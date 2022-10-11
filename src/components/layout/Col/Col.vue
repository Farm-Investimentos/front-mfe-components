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
			'farm-col--no-gutters': noGutters,
		}"
	>
		<slot></slot>
	</component>
</template>
<script lang="ts">
import Vue, { PropType } from 'vue';

export default Vue.extend({
	name: 'farm-col',
	props: {
		/**
		 * Html tag
		 */
		tag: { type: String, default: 'div' },
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
	},
	inheritAttrs: true,
});
</script>
<style lang="scss" scoped>
@import 'Col';
</style>
