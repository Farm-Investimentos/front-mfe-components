<template>
	<i v-on="$listeners" v-bind="$attrs" :class="classes" ref="el"> </i>
</template>
<script lang="ts">
import Vue from 'vue';

const breakPoints = ['xs', 'sm', 'md', 'lg', 'xl'];

export default Vue.extend({
	name: 'farm-icon',
	inheritAttrs: true,

	props: {
		color: { type: String, default: 'primary' },
		size: { type: String, default: 'default' },
	},

	computed: {
		classes() {
			const obj = {};
			return {
				'farm-icon': true,
				['farm-icon--' + this.color]: true,
				mdi: true,
				['mdi-' + this.icon]: true,
				...obj,
			};
		},
		icon() {
			if (!this.$slots.default) {
				return '';
			}
			return this.$slots.default[0].text!.trim();
		},
	},
	mounted() {
		if (this.size !== 'default' && !breakPoints.includes(this.size)) {
			this.$el.style.fontSize = this.size;
		}
	},
});
</script>
<style lang="scss" scoped>
@import 'Icon.scss';
</style>
