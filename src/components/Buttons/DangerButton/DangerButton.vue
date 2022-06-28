<template>
	<farm-btn v-bind="$attrs" v-on="$listeners" color="error">
		<i v-if="icon" :class="{mdi: true, [iconPath]: true, 'mr-3': true}"></i>
		<slot></slot>
	</farm-btn>
</template>
<script>
import Vue from 'vue';
import DefaultButton from '../DefaultButton';

export default Vue.extend({
	name: 'farm-btn-danger',
	components: {
		'farm-btn': DefaultButton,
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
				return 'mdi-trash-can-outline';
			}
			return `mdi-${this.customIcon}`;
		},
	},
});
</script>
