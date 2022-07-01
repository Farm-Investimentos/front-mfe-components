<template>
	<i v-on="$listeners" v-bind="$attrs" :class="classes"> </i>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	name: 'farm-icon',
	inheritAttrs: true,

	props: {
		color: { type: String, default: 'primary' },
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
			return this.$slots.default[0].text!.trim();
		},
	},
});
</script>
<style lang="scss" scoped>
@import 'Icon.scss';
</style>
