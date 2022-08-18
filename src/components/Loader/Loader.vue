<template>
	<div>
		<div class="overlay" opacity="0.3" v-if="mode === 'overlay'">
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
