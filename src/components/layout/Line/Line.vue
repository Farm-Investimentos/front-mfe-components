<template>
	<hr :class="{ 'farm-line': true, 'farm-line--spacing': !noSpacing }" />
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	name: 'farm-line',
	props: {
		noSpacing: {
			type: Boolean,
			default: false,
		},
	},
});
</script>

<style lang="scss" scoped>
@import './Line.scss'
</style>
