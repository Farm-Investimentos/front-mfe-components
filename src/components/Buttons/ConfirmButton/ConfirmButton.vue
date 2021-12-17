<template>
	<v-btn v-bind="$attrs" v-on="$listeners" color="secondary">
		<v-icon v-if="icon" class="mr-3">
			{{ iconPath }}
		</v-icon>
		<slot></slot>
	</v-btn>
</template>
<script>
import Vue from 'vue';
import VBtn from 'vuetify/lib/components/VBtn';
import VIcon from 'vuetify/lib/components/VIcon';

export default Vue.extend({
	name: 'farm-btn-confirm',
	components: {
		VBtn,
		VIcon,
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
