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
import { defineComponent } from 'vue';

export default defineComponent({
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
@import 'Label';
</style>
