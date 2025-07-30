<template>
	<div class="tooltip-container" ref="containerRef">
		<div
			ref="activatorRef"
			class="tooltip-activator"
			@mouseover="show"
			@mouseout="hide"
			@mouseleave="hide"
		>
			<slot name="activator" />
		</div>

		<div v-if="isVisible" ref="tooltipRef" :class="tooltipClasses" :style="tooltipStyles">
			<div v-if="hasTitle || showCloseButton" class="tooltip-header">
				<div v-if="hasTitle" class="tooltip-title">
					<slot name="title" />
				</div>
				<span v-if="showCloseButton" class="tooltip-close" @click="close">×</span>
			</div>

			<div class="tooltip-content">
				<slot />
			</div>

			<div class="tooltip-arrow" :style="arrowStyles"></div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, PropType, onBeforeUnmount, nextTick, watch } from 'vue';
import {
	TooltipPlacement,
	TooltipTrigger,
	TooltipVariant,
	TooltipSize,
} from './types/tooltip.types';
import { calculateTooltipPosition, moveToBody, moveToContainer } from './utils/tooltip.utils';

const ARROW_OFFSET = 18;

export default defineComponent({
	name: 'farm-tooltip',
	props: {
		value: {
			type: Boolean,
			default: undefined,
		},
		trigger: {
			type: String as PropType<TooltipTrigger>,
			default: 'hover',
		},
		placement: {
			type: String as PropType<TooltipPlacement>,
			default: 'top-center',
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
		offset: {
			type: Number,
			default: 8,
		},
		variant: {
			type: String as PropType<TooltipVariant>,
			default: 'dark',
		},
		size: {
			type: String as PropType<TooltipSize>,
			default: 'md',
		},
		maxWidth: {
			type: [String, Number],
			default: undefined,
		},
		delay: {
			type: [Number, Array],
			default: () => [100, 50],
		},
		disabled: {
			type: Boolean,
			default: false,
		},
		fluid: {
			type: Boolean,
			default: false,
		},
		position: {
			type: String,
			default: undefined,
		},
	},
	emits: ['input', 'show', 'hide'],
	setup(props, { emit, slots }) {
		const containerRef = ref<HTMLElement | null>(null);
		const activatorRef = ref<HTMLElement | null>(null);
		const tooltipRef = ref<HTMLElement | null>(null);
		const scrollableElementsRef = ref<Element[] | null>(null);

		const Z_INDEX_OFFSET = 1000;

		const isVisible = ref(false);

		const isControlled = computed(() => props.value !== undefined);
		const hasTitle = computed(() => !!slots.title);
		const showCloseButton = computed(() => isControlled.value && hasTitle.value);

		const normalizedPlacement = computed(() => {
			if (props.position) {
				return props.position as TooltipPlacement;
			}
			return props.placement;
		});

		const normalizedMaxWidth = computed(() => {
			if (props.fluid) {
				return '300px';
			}
			return props.maxWidth;
		});

		const tooltipClasses = computed(() => ({
			'tooltip-popup': true,
			'tooltip-popup--visible': isVisible.value,
			[`tooltip-popup--${props.variant}`]: true,
			[`tooltip-popup--${props.size}`]: true,
			'tooltip-popup--has-title': hasTitle.value,
			[`tooltip-popup--${normalizedPlacement.value}`]: true,
		}));

		const tooltipStyles = computed(() => {
			const getTooltipZIndex = () => {
				// Sempre busca modais fresh para evitar cache desatualizado
				const modals = document.querySelectorAll('.farm-modal');
				let maxModalZIndex = 0;

				modals.forEach(modal => {
					const htmlModal = modal as HTMLElement;

					// Tenta pegar z-index inline primeiro (mais rápido)
					let zIndex = parseInt(htmlModal.style.zIndex, 10);

					// Se não tem inline ou é inválido, pega computed style
					if (Number.isNaN(zIndex)) {
						const computedZIndex = window.getComputedStyle(htmlModal).zIndex;
						if (computedZIndex === 'auto') {
							zIndex = 0;
						} else {
							zIndex = parseInt(computedZIndex, 10) || 0;
						}
					}

					if (zIndex > maxModalZIndex) {
						maxModalZIndex = zIndex;
					}
				});

				return maxModalZIndex > 0 ? maxModalZIndex + Z_INDEX_OFFSET : 10001;
			};

			const styles: Record<string, string> = {
				position: 'fixed',
				zIndex: String(getTooltipZIndex()),
			};

			if (normalizedMaxWidth.value) {
				styles.maxWidth =
					typeof normalizedMaxWidth.value === 'number'
						? `${normalizedMaxWidth.value}px`
						: normalizedMaxWidth.value;
				styles.width = 'auto';
			}

			return styles;
		});

		const arrowStyles = computed(() => {
			const [verticalPos, horizontalAlign] = normalizedPlacement.value.split('-');

			const styles: Record<string, string> = {
				position: 'absolute',
				width: '0',
				height: '0',
				borderStyle: 'solid',
				zIndex: 'inherit',
			};

			if (verticalPos === 'top') {
				styles.bottom = '-6px';
				styles.borderWidth = '6px 6px 0 6px';
				styles.borderColor = '#333333 transparent transparent transparent';
			} else {
				styles.top = '-6px';
				styles.borderWidth = '0 6px 6px 6px';
				styles.borderColor = 'transparent transparent #333333 transparent';
			}

			if (horizontalAlign === 'left') {
				styles.left = `${ARROW_OFFSET}px`;
			} else if (horizontalAlign === 'right') {
				styles.right = `${ARROW_OFFSET}px`;
			} else {
				styles.left = '50%';
				styles.transform = 'translateX(-50%)';
			}

			return styles;
		});

		const show = () => {
			if (props.disabled || isControlled.value) return;

			isVisible.value = true;
			emit('show');

			nextTick(() => {
				if (tooltipRef.value && activatorRef.value) {
					moveToBody(tooltipRef.value);
					updatePosition();
					addScrollListener();
				}
			});
		};

		const hide = () => {
			if (props.disabled || isControlled.value) return;

			isVisible.value = false;
			emit('hide');
			removeScrollListener();
		};

		const close = () => {
			if (isControlled.value) {
				emit('input', false);
			} else {
				hide();
			}
		};

		const updatePosition = () => {
			if (!activatorRef.value || !tooltipRef.value) return;

			const activatorRect = activatorRef.value.getBoundingClientRect();
			const tooltipRect = tooltipRef.value.getBoundingClientRect();

			const isActivatorVisible =
				activatorRect.top < window.innerHeight &&
				activatorRect.bottom > 0 &&
				activatorRect.left < window.innerWidth &&
				activatorRect.right > 0;

			if (!isActivatorVisible && isVisible.value && !isControlled.value) {
				hide();
				return;
			}

			const position = calculateTooltipPosition(
				activatorRect,
				tooltipRect,
				normalizedPlacement.value,
				props.offset
			);

			tooltipRef.value.style.left = `${position.left}px`;
			tooltipRef.value.style.top = `${position.top}px`;
		};

		const getScrollableElements = () => {
			if (!scrollableElementsRef.value) {
				const nodeList = document.querySelectorAll(
					'.farm-modal, .modal-content, [style*="overflow-y: auto"], [style*="overflow-y: scroll"]'
				);
				scrollableElementsRef.value = Array.from(nodeList);
			}
			return scrollableElementsRef.value;
		};

		const addScrollListener = () => {
			window.addEventListener('scroll', updatePosition, { passive: true });

			const scrollableElements = getScrollableElements();
			scrollableElements.forEach(element => {
				element.addEventListener('scroll', updatePosition, { passive: true });
			});
		};

		const removeScrollListener = () => {
			window.removeEventListener('scroll', updatePosition);

			const scrollableElements = getScrollableElements();
			scrollableElements.forEach(element => {
				element.removeEventListener('scroll', updatePosition);
			});
		};

		if (isControlled.value) {
			isVisible.value = props.value || false;
		}

		watch(
			() => props.value,
			newValue => {
				if (isControlled.value) {
					isVisible.value = newValue || false;

					if (isVisible.value) {
						nextTick(() => {
							if (tooltipRef.value) {
								moveToBody(tooltipRef.value);
								updatePosition();
								addScrollListener();
							}
						});
					} else {
						removeScrollListener();
					}
				}
			}
		);

		onBeforeUnmount(() => {
			if (tooltipRef.value && containerRef.value) {
				moveToContainer(tooltipRef.value, containerRef.value);
			}
			removeScrollListener();
		});

		return {
			containerRef,
			activatorRef,
			tooltipRef,
			isVisible,
			isControlled,
			hasTitle,
			showCloseButton,
			tooltipClasses,
			tooltipStyles,
			arrowStyles,
			show,
			hide,
			close,
		};
	},
});
</script>

<style lang="scss" scoped>
@import './Tooltip.scss';

.tooltip-container {
	display: inline-block;
	position: relative;
}

.tooltip-activator {
	display: inline-block;
}
</style>
