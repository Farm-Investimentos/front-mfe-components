<template>
	<component class="farm-card" :is="tag" v-on="$listeners">
		<slot></slot>
	</component>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	name: 'farm-card',
	inheritAttrs: true,
	props: {
		/**
		 * Html tag
		 */
		tag: { type: String, default: 'div' },
	},
});
</script>

<style lang="scss" scoped>
@import './Card';
</style>
