<template>
	<component
		:is="tag"
		:class="{
			'farm-col': true,
			[`farm-col--align-${alignSelf}`]: alignSelf,
			[`farm-col--xl-${xl}`]: xl,
			[`farm-col--lg-${lg}`]: lg,
			[`farm-col--md-${md}`]: md,
			[`farm-col--sm-${sm}`]: sm,
			[`farm-col--xs-${xs}`]: xs,
			[`farm-col--cols-${cols}`]: cols,
			'farm-col--no-gutters': noGutters,
			[`farm-col--offset-${offset}`]: offset,
			[`farm-col--offset-xl-${offsetXl}`]: offsetXl,
			[`farm-col--offset-lg-${offsetLg}`]: offsetLg,
			[`farm-col--offset-md-${offsetMd}`]: offsetMd,
			[`farm-col--offset-sm-${offsetSm}`]: offsetSm,
		}"
	>
		<slot></slot>
	</component>
</template>
<script lang="ts">
import { PropType, defineComponent } from 'vue';

export default defineComponent({
	name: 'farm-col',
	props: {
		/**
		 * Html tag
		 */
		tag: { type: String, default: 'div' },
		/**
		 * Sets the default number of columns the component extends
		 */
		cols: {
			type: [String, Number] as PropType<1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12>,
			default: null,
		},
		/**
		 * Extra-large breakpoint
		 */
		xl: {
			type: [String, Number] as PropType<1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12>,
			default: null,
		},
		/**
		 * Large breakpoint
		 */
		lg: {
			type: [String, Number] as PropType<1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12>,
			default: null,
		},
		/**
		 * Medium breakpoint
		 */
		md: {
			type: [String, Number] as PropType<1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12>,
			default: null,
		},
		/**
		 * Small breakpoint
		 */
		sm: {
			type: [String, Number] as PropType<1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12>,
			default: null,
		},
		/**
		 * Extra-small breakpoint
		 */
		xs: {
			type: [String, Number] as PropType<1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12>,
			default: null,
		},
		/**
		 * Remove default gutters
		 */
		noGutters: {
			type: Boolean,
			default: false,
		},
		/**
		 * Applies the align-items css property.
		 */
		alignSelf: {
			type: String as PropType<'start' | 'center' | 'end' | 'auto' | 'baseline' | 'stretch'>,
			default: '',
		},
		/**
		 * Sets the default offset for the column.
		 */
		offset: {
			type: [String, Number] as PropType<
				0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
			>,
			default: null,
		},
		/**
		 * Changes the offset of the component on extra large and greater breakpoints.
		 */
		offsetXl: {
			type: [String, Number] as PropType<
				0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
			>,
			default: null,
		},
		/**
		 * Changes the offset of the component on large and greater breakpoints.
		 */
		offsetLg: {
			type: [String, Number] as PropType<
				0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
			>,
			default: null,
		},
		/**
		 * Changes the offset of the component on medium and greater breakpoints.
		 */
		offsetMd: {
			type: [String, Number] as PropType<
				0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
			>,
			default: null,
		},
		/**
		 * Changes the offset of the component on small and greater breakpoints.
		 */
		offsetSm: {
			type: [String, Number] as PropType<
				0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
			>,
			default: null,
		},
	},
	inheritAttrs: true,
});
</script>
<style lang="scss" scoped>
@import 'Col';
</style>
