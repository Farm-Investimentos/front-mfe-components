<template>
	<span :class="{ 'farm-tooltip': true }" ref="parent">
		<span class="farm-tooltip__activator" ref="activator" @mouseover="onOver" @mouseout="onOut">
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
		>
			<div v-if="hasTitle" class="farm-tooltip__header">
				<div class="farm-tooltip__title">
					<slot name="title"></slot>
				</div>
				<span v-if="externalControl" class="farm-tooltip__close" @click="onClose">×</span>
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

		const toggleComponent = computed(() => props.value);
		const externalControl = computed(() => props.value !== undefined);
		const hasPosition = computed(() => !!props.position);
		const hasTitle = computed(() => !!slots.title);

		let hasBeenBoostrapped = false;

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

			return { left, top };
		};

		const onOver = () => {
			showOver.value = true;

			if (!hasBeenBoostrapped) {
				document.querySelector('body').appendChild(popup.value);
				const { left, top } = calculatePosition();

				styles.left = `${left}px`;
				styles.top = `${top}px`;
				styles.zIndex = calculateMainZindex();

				hasBeenBoostrapped = true;
			}
		};

		const onOut = (event: MouseEvent) => {
			showOver.value = parent.value.contains(event.relatedTarget);
		};

		const onClose = () => {
			showOver.value = false;
			if (externalControl.value) {
				emit('input', false);
			}
		};

		onBeforeUnmount(() => {
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
