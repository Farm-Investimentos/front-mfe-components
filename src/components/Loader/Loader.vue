<template>
	<div class="farm-loader__overlay" v-if="mode === 'overlay'" :style="styleObject">
		<span class="farm-loader__spinner farm-loader__spinner--big"></span>
	</div>
	<div v-else>
		<span class="farm-loader__spinner farm-loader__spinner--big-border" :class="calculateSize"></span>
	</div>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	name: 'farm-loader',
	props: {
		mode: {
			type: String,
			default: 'inline',
		},
		size: {
			type: String,
			default: 'normal',
		},
	},
	data() {

		const zIndex = Math.max(
			...Array.from(document.querySelectorAll('body *'), el =>
				parseFloat(window.getComputedStyle(el).zIndex)
			).filter(zIndex => !Number.isNaN(zIndex)),
			0
		);
		return {
			styleObject: {
				zIndex,
			},
		};
	},

	computed: {
		calculateSize() {
			return this.size === 'small' ? 'loader--small' : '';
		},
	},
});
</script>
<style lang="scss" scoped>
@import 'Loader.scss';
</style>
