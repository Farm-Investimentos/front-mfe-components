<template>
	<span
		:class="{ 'farm-tooltip': true, ['farm-tooltip--' + color]: true }"
		@mouseover="onOver"
		@mouseout="onOut"
		ref="parent"
	>
		<slot name="activator"></slot>
		<span :class="{ 'farm-tooltip__popup': true, 'farm-tooltip__popup--visible': showOver }">
			<slot></slot>
		</span>
	</span>
</template>
<script lang="ts">
import Vue, { PropType, ref } from 'vue';
import Icon from '../Icon';

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
	},
	setup() {
		const parent = ref(null);
		const showOver = ref(false);

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
		};
	},
	components: {
		'farm-icon': Icon,
	},
});
</script>

<style lang="scss" scoped>
@import './Tooltip';
</style>
