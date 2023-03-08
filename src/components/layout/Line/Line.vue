<template>
	<hr
		:class="{
			'farm-line': true,
			'farm-line--spacing': !noSpacing,
			['farm-line--' + color]: true,
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
