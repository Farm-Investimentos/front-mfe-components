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
				'farm-tooltip__popup--visible': showOver || toggleComponent,
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
				| 'error'
				| 'extra'
				| 'accent'
				| 'info'
				| 'success'
				| 'gray'
				| 'yellow'
				| 'white'
			>,
			default: 'gray',
		},

		value: {
			type: Boolean,
		},
	},
	setup(props) {
		const parent = ref(null);
		const showOver = ref(false);

		const toggleComponent = computed(() => {
			return props.value;
		});
		const onOver = () => {
			showOver.value = true;
		};
		const onOut = (event: MouseEvent) => {
			showOver.value = parent.value.contains(event.relatedTarget);
		};

		return {
			parent,
			showOver,
			onOver,
			onOut,
			toggleComponent,
		};
	},
});
</script>

<style lang="scss" scoped>
@import './Tooltip';
</style>
