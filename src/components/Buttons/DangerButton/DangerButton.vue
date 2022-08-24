<template>
	<farm-btn v-bind="$attrs" v-on="$listeners" color="error">
		<i v-if="icon" :class="{mdi: true, [iconPath]: true, 'mr-3': true}"></i>
		<slot></slot>
	</farm-btn>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	name: 'farm-btn-danger',
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
		iconPath(): string {
			if (!this.customIcon) {
				return 'mdi-trash-can-outline';
			}
			return `mdi-${this.customIcon}`;
		},
	},
});
</script>
