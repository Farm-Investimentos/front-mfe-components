<template>
	<component
		:is="tag"
		:class="{
			'farm-col': true,
			[`farm-col--xl-${xl}`]: xl,
			[`farm-col--lg-${lg}`]: lg,
			[`farm-col--md-${md}`]: md,
			[`farm-col--sm-${sm}`]: sm,
			[`farm-col--xs-${xs}`]: xs,
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
		xl: {
			type: [String, Number, Boolean] as PropType<
				1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
			>,
			default: false,
		},
		lg: {
			type: [String, Number, Boolean] as PropType<
				1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
			>,
			default: false,
		},
		md: {
			type: [String, Number, Boolean] as PropType<
				1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
			>,
			default: false,
		},
		sm: {
			type: [String, Number, Boolean] as PropType<
				1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
			>,
			default: false,
		},
		xs: {
			type: [String, Number, Boolean] as PropType<
				1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
			>,
			default: false,
		},
	},
	inheritAttrs: true,
});
</script>
<style lang="scss" scoped>
@import 'Col';
</style>
