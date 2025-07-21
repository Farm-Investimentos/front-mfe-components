<template>
	<span :class="{ 'farm-tooltip': true }" ref="parent">
		<span
			class="farm-tooltip__activator"
			ref="activator"
			@mouseover="onOver"
			@mouseout="onOut"
			@mouseleave="onOut"
		>
			<slot name="activator" />
		</span>

		<span
			ref="popup"
			:class="{
				'farm-tooltip__popup': true,
				'farm-tooltip__popup--visible':
					(!externalControl && showOver) || (externalControl && toggleComponent),
				'farm-tooltip__popup--fluid': fluid,
				[`farm-tooltip__popup--${position}`]: position,
				'farm-tooltip__popup--has-title': hasTitle,
			}"
			:style="styles"
			@mouseout="onOut"
			@mouseleave="onOut"
		>
			<div v-if="hasTitle" class="farm-tooltip__header">
				<div class="farm-tooltip__title">
					<slot name="title"></slot>
				</div>
				<span v-if="externalControl" class="farm-tooltip__close" @click="onClose">×
					
				</span>
			</div>
			<div class="farm-tooltip__content">
				<slot />
			</div>
			<span v-if="hasPosition" class="farm-tooltip__arrow"></span>
		</span>
	</span>
</template>
<script lang="ts">
import { PropType, ref, computed, reactive, onBeforeUnmount, defineComponent, useSlots } from 'vue';
import { calculateMainZindex } from '../../helpers';

export type TooltipPosition =
	| 'top-left'
	| 'top-center'
	| 'top-right'
	| 'bottom-left'
	| 'bottom-center'
	| 'bottom-right';

export default defineComponent({
	name: 'farm-tooltip',
	props: {
		/**
		 * Control visibility with v-model
		 */
		value: {
			type: Boolean,
			default: undefined,
		},
		/**
		 * Fluid width (grows based on content)
		 */
		fluid: {
			type: Boolean,
			default: false,
		},
		/**
		 * Position of the tooltip relative to the activator
		 */
		position: {
			type: String as PropType<TooltipPosition>,
			default: undefined,
			validator: (value: string) => {
				return [
					'top-left',
					'top-center',
					'top-right',
					'bottom-left',
					'bottom-center',
					'bottom-right',
				].includes(value);
			},
		},
	},
	setup(props, { emit }) {
		const parent = ref(null);
		const popup = ref(null);
		const activator = ref(null);
		const showOver = ref(false);
		const styles = reactive({
			left: '0',
			top: '0',
			zIndex: 1,
		});
		const slots = useSlots();
		let hideTimeout: number | null = null;

		const toggleComponent = computed(() => props.value);
		const externalControl = computed(() => props.value !== undefined);
		const hasPosition = computed(() => !!props.position);
		const hasTitle = computed(() => !!slots.title);

		let hasBeenBoostrapped = false;
		let scrollListener = null;
		let isInsideModal = false;
		let modalScrollElements = [];

		const calculatePosition = () => {
			const parentBoundingClientRect = parent.value.getBoundingClientRect();
			const activatorBoundingClientRect = activator.value.getBoundingClientRect();
			const popupBoundingClientRect = popup.value.getBoundingClientRect();

			const activatorWidth = activatorBoundingClientRect.width;
			const activatorHeight = activatorBoundingClientRect.height;
			const popupWidth = popupBoundingClientRect.width;
			const popupHeight = popupBoundingClientRect.height;

			let left = 0;
			let top = 0;

			// Se estiver dentro de um modal, usar coordenadas da viewport (position fixed)
			if (isInsideModal) {
				if (!props.position) {
					left = activatorBoundingClientRect.left + activatorWidth / 2 - popupWidth / 2;
					top = activatorBoundingClientRect.top - popupHeight - 8;
				} else {
					const [verticalPosition, horizontalAlignment] = props.position.split('-');

					switch (horizontalAlignment) {
						case 'left':
							left = activatorBoundingClientRect.left - 8;
							break;
						case 'right':
							left = activatorBoundingClientRect.left + activatorWidth - popupWidth + 8;
							break;
						case 'center':
						default:
							left = activatorBoundingClientRect.left + activatorWidth / 2 - popupWidth / 2;
							break;
					}

					if (verticalPosition === 'top') {
						top = activatorBoundingClientRect.top - popupHeight - 8;
					} else {
						top = activatorBoundingClientRect.top + activatorHeight + 8;
					}
				}

				// Ajustar para não sair da viewport
				if (left < 5) {
					left = 5;
				} else if (left + popupWidth > window.innerWidth - 5) {
					left = window.innerWidth - popupWidth - 5;
				}
			} else {
				// Comportamento original para tooltips fora de modais
				if (!props.position) {
					left =
						parentBoundingClientRect.left +
						window.scrollX +
						activatorWidth / 2 -
						popupWidth / 2;

					top = parentBoundingClientRect.top + window.scrollY - popupHeight - 8;
				} else {
					const [verticalPosition, horizontalAlignment] = props.position.split('-');

					switch (horizontalAlignment) {
						case 'left':
							left = parentBoundingClientRect.left + window.scrollX - 8;
							break;
						case 'right':
							left =
								parentBoundingClientRect.left +
								window.scrollX +
								activatorWidth -
								popupWidth +
								8;
							break;
						case 'center':
						default:
							left =
								parentBoundingClientRect.left +
								window.scrollX +
								activatorWidth / 2 -
								popupWidth / 2;
							break;
					}

					if (verticalPosition === 'top') {
						top = parentBoundingClientRect.top + window.scrollY - popupHeight - 8;
					} else {
						top = parentBoundingClientRect.top + window.scrollY + activatorHeight + 8;
					}
				}

				if (left < window.scrollX) {
					left = window.scrollX + 5;
				} else if (left + popupWidth > window.innerWidth + window.scrollX) {
					left = window.innerWidth + window.scrollX - popupWidth - 5;
				}
			}

			return { left, top };
		};

		const onOver = () => {
			// Limpa qualquer timeout de hide
			if (hideTimeout) {
				clearTimeout(hideTimeout);
				hideTimeout = null;
			}

			showOver.value = true;

			if (!hasBeenBoostrapped) {
				document.querySelector('body').appendChild(popup.value);
				
				// Detectar se está dentro de um modal
				isInsideModal = !!parent.value.closest('.farm-modal');
				
				if (isInsideModal) {
					// Usar position fixed para tooltips dentro de modais
					popup.value.style.position = 'fixed';
					// Adicionar listener de scroll para recalcular posição
					scrollListener = () => {
						const { left, top } = calculatePosition();
						styles.left = `${left}px`;
						styles.top = `${top}px`;
					};
					
					// Escutar scroll da window E do modal
					window.addEventListener('scroll', scrollListener, true);
					
					// Encontrar o modal e escutar seu scroll interno também
					const modalElement = parent.value.closest('.farm-modal');
					if (modalElement) {
						// Função para detectar elementos scrolláveis
						const isScrollable = (element) => {
							const style = window.getComputedStyle(element);
							return (
								style.overflow === 'auto' ||
								style.overflow === 'scroll' ||
								style.overflowY === 'auto' ||
								style.overflowY === 'scroll' ||
								style.overflowX === 'auto' ||
								style.overflowX === 'scroll'
							);
						};
						
						// Buscar todos os elementos dentro do modal
						const allElements = modalElement.querySelectorAll('*');
						const scrollableElements = Array.from(allElements).filter(isScrollable);
						
						// Adicionar elementos específicos do modal que podem ter scroll
						const modalSpecificElements = modalElement.querySelectorAll(
							'.farm-modal--content, .farm-modal--content > div, [data-simplebar], .simplebar-content-wrapper'
						);
						
						// Combinar e remover duplicatas
						const elementsToWatch = [...new Set([...scrollableElements, ...modalSpecificElements, modalElement])];
						
						elementsToWatch.forEach(element => {
							element.addEventListener('scroll', scrollListener, true);
							modalScrollElements.push(element);
						});
					}
				} else {
					// Comportamento original para tooltips fora de modais
					popup.value.style.position = 'absolute';
				}
				
				const { left, top } = calculatePosition();
				styles.left = `${left}px`;
				styles.top = `${top}px`;
				styles.zIndex = calculateMainZindex();

				hasBeenBoostrapped = true;
			}
		};

		const onOut = (event: MouseEvent) => {
			// Limpa qualquer timeout anterior
			if (hideTimeout) {
				clearTimeout(hideTimeout);
				hideTimeout = null;
			}

			// Verifica se o relatedTarget está contido no parent
			const isRelatedTargetInParent =
				event.relatedTarget && parent.value.contains(event.relatedTarget);

			if (!isRelatedTargetInParent) {
				// Se não está no parent, agenda o hide com um pequeno delay para evitar flickering
				hideTimeout = window.setTimeout(() => {
					showOver.value = false;
					
					// Remover listeners de scroll quando tooltip for escondido
					if (scrollListener) {
						window.removeEventListener('scroll', scrollListener, true);
						
						// Remover listeners dos elementos de scroll do modal
						modalScrollElements.forEach(element => {
							element.removeEventListener('scroll', scrollListener, true);
						});
						modalScrollElements = [];
						
						scrollListener = null;
					}
					
					hideTimeout = null;
				}, 50);
			}
		};

		const onClose = () => {
			showOver.value = false;
			if (externalControl.value) {
				emit('input', false);
			}
		};

		onBeforeUnmount(() => {
			// Limpa o timeout se existir
			if (hideTimeout) {
				clearTimeout(hideTimeout);
				hideTimeout = null;
			}

			// Limpar listeners de scroll se existirem
			if (scrollListener) {
				window.removeEventListener('scroll', scrollListener, true);
				
				// Remover listeners dos elementos de scroll do modal
				modalScrollElements.forEach(element => {
					element.removeEventListener('scroll', scrollListener, true);
				});
				modalScrollElements = [];
				
				scrollListener = null;
			}

			if (hasBeenBoostrapped) {
				document.querySelector('body').removeChild(popup.value);
			}
		});

		return {
			parent,
			popup,
			activator,
			showOver,
			toggleComponent,
			externalControl,
			hasPosition,
			hasTitle,
			styles,
			onOver,
			onOut,
			onClose,
		};
	},
});
</script>

<style lang="scss" scoped>
@import './Tooltip';
</style>
