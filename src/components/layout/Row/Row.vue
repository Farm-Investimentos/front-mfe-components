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
import Vue from 'vue';
import { PropType } from 'vue/types/v3-component-props';

export default Vue.extend({
	name: 'farm-row',
	props: {
		/**
		 * Html tag
		 */
		tag: { type: String, default: 'div' },
		align: {
			type: String as PropType<'start' | 'center' | 'end' | 'baseline' | 'stretch'>,
			default: '',
		},
		alignContent: {
			type: String as PropType<
				'start' | 'center' | 'end' | 'space-between' | 'space-around' | 'stretch'
			>,
			default: '',
		},
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
