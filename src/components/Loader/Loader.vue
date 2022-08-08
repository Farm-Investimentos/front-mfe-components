<template>
	<v-overlay opacity="0.3" v-if="mode === 'overlay'">
		<v-progress-circular indeterminate :size="100" color="secondary" />
	</v-overlay>
	<div v-else>
		<v-progress-circular color="secondary" indeterminate :size="calculateSize" :width="6" />
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
			return this.size === 'small' ? 35 : 70;
		},
	},
});
</script>
