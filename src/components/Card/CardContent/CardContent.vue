<template>
	<component v-bind:is="tag" class="farm-card__content" :gutter="gutter">
		<slot></slot>
	</component>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	name: 'farm-card-content',
	props: {
		tag: { type: String, default: 'div' },
		gutter: { type: String, default: 'default' },
	},
});
</script>

<style lang="scss" scoped>
@import './CardContent.scss';
</style>
