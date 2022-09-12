<template>
	<span :class="{ 'farm-chip': true, 'farm-chip--dense': dense }">
		<farm-typography tag="span" size="sm"> <slot></slot> </farm-typography>
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
	},
});
</script>
<style lang="scss" scoped>
@import './Chip.scss';
</style>
