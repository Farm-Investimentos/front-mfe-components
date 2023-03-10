<template>
	<hr
		:class="{
			'farm-line': true,
			'farm-line--spacing': !noSpacing,
			['farm-line--' + color]: !!color,
			'farm-line--lighten': variation === 'lighten',
			'farm-line--darken': variation === 'darken',
		}"
	/>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

export default Vue.extend({
	name: 'farm-line',
	props: {
		/**
		 * Color
		 */
		color: {
			type: String as PropType<
				| 'primary'
				| 'secondary'
				| 'secondary-green'
				| 'secondary-golden'
				| 'neutral'
				| 'info'
				| 'success'
				| 'error'
				| 'warning'
				| 'extra-1'
				| 'extra-2'
			>,
			default: 'default',
		},
		/**
		 * Variation Color
		 */
		variation: {
			type: String,
			default: 'base',
		},
		/**
		 * Remove default margins
		 */
		noSpacing: {
			type: Boolean,
			default: false,
		},
	},
});
</script>

<style lang="scss" scoped>
@import './Line';
</style>
