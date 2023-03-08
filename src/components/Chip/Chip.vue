<template>
	<span
		:class="{
			'farm-chip': true,
			'farm-chip--dense': dense,
			'farm-chip--outlined': outlined,
			'farm-chip--base': variation === 'base' || !variation,
			'farm-chip--lighten': variation === 'lighten',
			'farm-chip--darken': variation === 'darken',
		}"
	>
		<farm-caption tag="span" color="white" ellipsis> <slot></slot> </farm-caption>
	</span>
</template>
<script lang="ts">
import Vue, { computed, toRefs } from 'vue';

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
			default: 'base',
		},
	},
});
</script>
<style lang="scss" scoped>
@import './Chip.scss';
</style>
