<template>
	<label :class="{ 'farm-label': true, 'farm-label--required': required }" v-bind="$attrs">
		<slot></slot>
	</label>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	name: 'farm-label',
	props: {
		/**
		 * Show required indicator
		 */
		required: {
			type: Boolean,
			default: false,
		},
	},
});
</script>
<style lang="scss" scoped>
@import 'Label.scss';
</style>
