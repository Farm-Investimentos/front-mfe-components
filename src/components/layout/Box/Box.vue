<template>
	<component
		:is="tag"
		:class="{
			'farm-box': true,
		}"
		:gutter="gutter"
	>
		<div>
			<slot></slot>
		</div>
	</component>
</template>
<script lang="ts">
import {  PropType } from 'vue';

export default {
	name: 'farm-box',
	props: {
		/**
		 * Html tag
		 */
		tag: { type: String, default: 'div' },
		/**
		 * Add gutter
		 */
		gutter: {
			type: String as PropType<'none' | 'xs' | 'sm' | 'default' | 'md' | 'lg' | 'xl' | 'ds'>,
			default: 'none',
		},
	},
	inheritAttrs: true,
};
</script>
<style lang="scss" scoped>
@import 'Box';
</style>
