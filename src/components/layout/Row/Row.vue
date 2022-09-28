<template>
	<component :is="tag" class="farm-row">
		<slot></slot>
	</component>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	name: 'farm-row',
	props: {
		/**
		 * Html tag
		 */
		tag: { type: String, default: 'div' },
	},
	inheritAttrs: true,
});
</script>
<style lang="scss" scoped>
@import 'Row.scss';
</style>
