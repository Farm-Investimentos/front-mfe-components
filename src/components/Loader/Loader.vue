<template>
	<div>
		<div class="overlay" v-if="mode === 'overlay'" :style="styleObject">
			<span class="loader loader--big"></span>
		</div>
		<div v-else>
			<span class="loader loader--big-border" :class="calculateSize"></span>
		</div>
	</div>
</template>
<script lang="ts">
import Vue from 'vue';
import { VOverlay } from 'vuetify/lib/components/VOverlay';
import { VProgressCircular } from 'vuetify/lib/components/VProgressCircular';

export default Vue.extend({
	name: 'farm-loader',
	components: {
		VOverlay,
		VProgressCircular,
	},
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
