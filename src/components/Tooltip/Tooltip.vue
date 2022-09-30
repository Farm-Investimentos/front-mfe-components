<template>
	<span
		:class="{ 'farm-tooltip': true, ['farm-tooltip--' + color]: true }"
		@mouseover="onOver"
		@mouseout="onOut"
		ref="parent"
	>
		<slot name="activator"></slot>
		<span
			:class="{
				'farm-tooltip__popup': true,
				'farm-tooltip__popup--visible':
					(!externalControl && showOver) || (externalControl && toggleComponent),
			}"
		>
			<slot></slot>
		</span>
	</span>
</template>
<script lang="ts">
import Vue, { PropType, ref, computed } from 'vue';

export default Vue.extend({
	name: 'farm-tooltip',
	props: {
		/*
		 * Tooltip color
		 */
		color: {
			type: String as PropType<
				| 'primary'
				| 'secondary'
				| 'neutral'
				| 'info'
				| 'success'
				| 'error'
				| 'warning'
				| 'success'
				| 'extra-1'
				| 'extra-2'
			>,
			default: 'secondary',
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
		const showOver = ref(false);

		const toggleComponent = computed(() => props.value);
		const externalControl = computed(() => props.value !== undefined);

		const onOver = () => {
			showOver.value = true;
		};
		const onOut = (event: MouseEvent) => {
			showOver.value = parent.value.contains(event.relatedTarget);
		};

		return {
			parent,
			showOver,
			toggleComponent,
			externalControl,
			onOver,
			onOut,
		};
	},
});
</script>

<style lang="scss" scoped>
@import './Tooltip';
</style>
