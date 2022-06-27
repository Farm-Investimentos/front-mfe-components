<template>
	<DefaultButton v-bind="$attrs" v-on="$listeners" color="secondary">
		<i :class="{ mdi: true, [iconPath]: true, 'mr-3': true }" v-if="icon"></i>
		<slot></slot>
	</DefaultButton>
</template>
<script>
import Vue from 'vue';

import DefaultButton from '../DefaultButton';

export default Vue.extend({
	name: 'farm-btn-confirm',
	components: {
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
<style lang="scss" scoped>
i.mdi {
	font-size: 1rem;
}
</style>
