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
			}"
			:style="styles"
			@mouseout="onOut"
		>
			<slot />
			<span v-if="fluid" class="farm-tooltip__close" @click="onClose">×</span>
			<span class="farm-tooltip__arrow"></span>
		</span>
	</span>
</template>
<script lang="ts">
import { PropType, ref, computed, reactive, onBeforeUnmount, defineComponent } from 'vue';
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
		 * Control visibility
		 * v-model bind
		 */
		value: {
			type: Boolean,
			default: undefined,
		},
		/**
		 * Fluid width (grow based on content)
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

		const toggleComponent = computed(() => props.value);
		const externalControl = computed(() => props.value !== undefined);

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

			const [verticalPosition, horizontalAlignment] = props.position.split('-');

			if (verticalPosition === 'top') {
				// Tooltip appears above the element
				top = parentBoundingClientRect.top + window.scrollY - popupHeight - 8;

				switch (horizontalAlignment) {
					case 'left':
						left = parentBoundingClientRect.left + window.scrollX;
						break;
					case 'right':
						left =
							parentBoundingClientRect.left +
							window.scrollX +
							activatorWidth -
							popupWidth;
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
			} else {
				// Tooltip appears below the element
				top = parentBoundingClientRect.top + window.scrollY + activatorHeight + 8;

				switch (horizontalAlignment) {
					case 'left':
						left = parentBoundingClientRect.left + window.scrollX;
						break;
					case 'right':
						left =
							parentBoundingClientRect.left +
							window.scrollX +
							activatorWidth -
							popupWidth;
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
