<template>
	<component :style="cardStyles" class="farm-card" :is="tag">
		<slot></slot>
	</component>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	name: 'farm-card',
	inheritAttrs: true,
	props: {
		tag: { type: String, default: 'div' },
		padding: { type: Number, default: 16 }
	},
	computed: {
		cardStyles() {
			return {
				padding: `${this.padding}px`
			};
		}
	}
});
</script>

<style lang="scss" scoped>
@import './Card.scss';
</style>
