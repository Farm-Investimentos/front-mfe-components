<template>
	<component
		:is="tag"
		:class="{
			'farm-box': true,
			[`farm-box--justify-${justify}`]: justify,
			[`farm-box--direction-${direction}`]: direction,
		}"
	>
		<div>
			<slot></slot>
		</div>
	</component>
</template>
<script lang="ts">
import Vue, { PropType } from 'vue';

export default Vue.extend({
	name: 'farm-box',
	props: {
		/**
		 * Html tag
		 */
		tag: { type: String, default: 'div' },
		/**
		 * Applies the flex-direction css property
		 */
		direction: {
			type: String as PropType<'row' | 'row-reverse' | 'column' | 'column-reverse'>,
			default: 'row',
		},
		/**
		 * Applies the justify-content css property
		 */
		justify: {
			type: String as PropType<'start' | 'center' | 'end' | 'space-between' | 'space-around'>,
			default: '',
		},
	},
	inheritAttrs: true,
});
</script>
<style lang="scss" scoped>
@import 'Box';
</style>
