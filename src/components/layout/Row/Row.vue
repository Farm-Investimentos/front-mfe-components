<template>
	<component
		:is="tag"
		:class="{
			'farm-row': true,
			[`farm-row--align-${align}`]: align,
			[`farm-row--align-content-${alignContent}`]: alignContent,
			[`farm-row--justify-${justify}`]: justify,
			'farm-row--no-default-gutters': noDefaultGutters,
			'farm-row--extra-decrease': extraDecrease,
			'farm-row--y-grid-gutters': yGridGutters,
		}"
	>
		<slot></slot>
	</component>
</template>
<script lang="ts">
import { PropType, defineComponent } from 'vue';

export default defineComponent({
	name: 'farm-row',
	props: {
		/**
		 * Html tag
		 */
		tag: { type: String, default: 'div' },
		/**
		 * Applies the align-items css property.
		 */
		align: {
			type: String as PropType<'start' | 'center' | 'end' | 'baseline' | 'stretch'>,
			default: '',
		},
		/**
		 * applies the align-content css property
		 */
		alignContent: {
			type: String as PropType<
				'start' | 'center' | 'end' | 'space-between' | 'space-around' | 'stretch'
			>,
			default: '',
		},
		/**
		 * Applies the justify-content css property
		 */
		justify: {
			type: String as PropType<'start' | 'center' | 'end' | 'space-between' | 'space-around'>,
			default: '',
		},
		/**
		 * Remove default gutters
		 */
		noDefaultGutters: {
			type: Boolean,
			default: false,
		},
		/**
		 * Extra decrease margin
		 */
		extraDecrease: {
			type: Boolean,
			default: false,
		},
		/**
		 * Add gutters to farm-cols in Y axis
		 */
		yGridGutters: {
			type: Boolean,
			default: false,
		},
	},
	inheritAttrs: true,
});
</script>
<style lang="scss" scoped>
@import 'Row';
</style>
