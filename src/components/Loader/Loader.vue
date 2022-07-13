<template>
	<div>
		<v-overlay opacity="0.3" v-if="mode === 'overlay'">
			<v-progress-circular indeterminate :size="100" color="secondary"></v-progress-circular>
		</v-overlay>
		<v-progress-circular
			v-else
			:size="calculateSize"
			:width="6"
			color="secondary"
			indeterminate
		></v-progress-circular>
	</div>
</template>
<script lang="ts">
import { VOverlay } from 'vuetify/lib/components/VOverlay';
import { VProgressCircular } from 'vuetify/lib/components/VProgressCircular';
export default {
	name: 'farm-loader',
	components: {
		VOverlay,
		VProgressCircular,
	},
	props: {
		status: {
			default: 'IDLE',
		},
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
			if (this.size === 'small') {
				return 35;
			}
			return 70;
		},
	},
};
</script>
