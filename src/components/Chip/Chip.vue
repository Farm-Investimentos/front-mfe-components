<template>
	<span
		:class="{
			'farm-chip': true,
			'farm-chip--dense': dense,
			'farm-chip--outlined': outlined,
			'farm-chip--lighten': variation === 'lighten',
			'farm-chip--darken': variation === 'darken',
		}"
	>
		<farm-typography tag="span" size="sm" color="white"> <slot></slot> </farm-typography>
	</span>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	name: 'farm-chip',
	inheritAttrs: true,
	props: {
		/**
		 * Is dense (not 100% width)?
		 */
		dense: {
			type: Boolean,
			default: false,
		},
		/**
		 * Is outlined
		 */
		outlined: {
			type: Boolean,
			default: false,
		},
		variation: {
			type: String,
			default: '',
		},
	},
});
</script>
<style lang="scss" scoped>
@import './Chip.scss';
</style>
