<template>
	<label
		:class="{ 'farm-label': true, 'farm-label--required': required }"
		v-on="$listeners"
		v-bind="$attrs"
	>
		<slot></slot>
	</label>
</template>
<script lang="ts">


export default {
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
};
</script>
<style lang="scss" scoped>
@import 'Label';
</style>
