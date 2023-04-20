<template>
	<span :class="{ 'farm-tooltip': true }" ref="parent">
		<span @mouseover="onOver" @mouseout="onOut" ref="activator">
			<slot name="activator"></slot>
		</span>

		<span
			ref="popup"
			:class="{
				'farm-tooltip__popup': true,
				['farm-tooltip--' + color]: true,
				'farm-tooltip__popup--visible':
					(!externalControl && showOver) || (externalControl && toggleComponent),
			}"
			:style="styles"
			@mouseout="onOut"
		>
			<slot></slot>
		</span>
	</span>
</template>
<script lang="ts">
import { PropType, ref, computed, reactive, onBeforeUnmount, defineComponent } from 'vue';
import { calculateMainZindex } from '../../helpers';

export default defineComponent({
	name: 'farm-tooltip',
	props: {
		/*
		 * Tooltip color
		 */
		color: {
			type: String as PropType<
				| 'primary'
				| 'secondary'
				| 'secondary-green'
				| 'secondary-golden'
				| 'neutral'
				| 'info'
				| 'success'
				| 'error'
				| 'warning'
				| 'extra-1'
				| 'extra-2'
				| 'gray'
			>,
			default: 'gray',
		},
		/**
		 * Control visibility
		 * v-model bind
		 */
		value: {
			type: Boolean,
			default: undefined,
		},
	},
	setup(props) {
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

		const onOver = () => {
			showOver.value = true;

			if (!hasBeenBoostrapped) {
				document.querySelector('body').appendChild(popup.value);
				const parentBoundingClientRect = parent.value.getBoundingClientRect();
				const activatorBoundingClientRect = activator.value.getBoundingClientRect();
				const popupBoundingClientRect = popup.value.getBoundingClientRect();

				styles.left =
					parentBoundingClientRect.left +
					window.scrollX -
					(80 - activatorBoundingClientRect.width / 2) +
					'px';
				styles.top =
					parentBoundingClientRect.top +
					window.scrollY -
					(popupBoundingClientRect.height + 8) +
					'px';
				styles.zIndex = calculateMainZindex();

				hasBeenBoostrapped = true;
			}
		};
		const onOut = (event: MouseEvent) => {
			showOver.value = parent.value.contains(event.relatedTarget);
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
		};
	},
});
</script>

<style lang="scss" scoped>
@import './Tooltip';
</style>
