<template>
	<i v-on="$listeners" v-bind="$attrs" :class="classes" :size="$props.size" ref="el" />
</template>
<script lang="ts">
import Vue, { PropType } from 'vue';

const breakPoints = ['xs', 'sm', 'md', 'lg', 'xl'];

export default Vue.extend({
	name: 'farm-icon',
	inheritAttrs: true,

	props: {
		/**
		 * Color
		 */
		color: {
			type: String as PropType<
				| 'primary'
				| 'secondary'
				| 'error'
				| 'extra'
				| 'accent'
				| 'info'
				| 'success'
				| 'gray'
				| 'yellow'
				| 'white'
			>,
			default: 'primary',
		},
		size: {
			type: String as PropType<
				'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'other (examples: 12px, 3rem)'
			>,
			default: 'default',
		},
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
