<template>
	<component
		:is="tag"
		:class="{
			'farm-row': true,
			[`farm-row--align-${align}`]: align,
			[`farm-row--align-content-${alignContent}`]: alignContent,
			[`farm-row--justify-${justify}`]: justify,
		}"
	>
		<slot></slot>
	</component>
</template>
<script lang="ts">
import Vue, { PropType } from 'vue';

export default Vue.extend({
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
	},
	inheritAttrs: true,
});
</script>
<style lang="scss" scoped>
@import 'Row.scss';
</style>
