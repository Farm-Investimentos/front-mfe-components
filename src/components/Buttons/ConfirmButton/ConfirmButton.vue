<template>
	<DefaultButton v-bind="$attrs" v-on="$listeners" color="secondary">
		<v-icon v-if="icon" class="mr-3">
			{{ iconPath }}
		</v-icon>
		<slot></slot>
	</DefaultButton>
</template>
<script>
import Vue from 'vue';
import VIcon from 'vuetify/lib/components/VIcon';

import DefaultButton from '../DefaultButton';

export default Vue.extend({
	name: 'farm-btn-confirm',
	components: {
		VIcon,
		DefaultButton,
	},
	inheritAttrs: true,
	props: {
		/**
		 * Show icon
		 */
		icon: {
			type: Boolean,
			default: false,
		},
		/**
		 * Custom icon
		 */
		customIcon: {
			type: String,
			default: '',
		},
	},
	computed: {
		iconPath() {
			if (!this.customIcon) {
				return 'mdi-check';
			}
			return `mdi-${this.customIcon}`;
		},
	},
});
</script>
