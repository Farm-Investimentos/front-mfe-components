<template>
	<div :class="{
		'farm-icon-box': true,
		[cssColorClass]: true,
		'farm-icon-box--inverted': inverted,
	}" :size="size">
		<farm-icon :color="inverted ? 'white' : color" :size="size">{{ iconParsed }}</farm-icon>
	</div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

export default Vue.extend({
	name: 'farm-icon-box',
	props: {
		/**
		 * Icon
		 */
		icon: {
			type: String,
			required: true,
		},
		/**
		 * Color
		 */
		color: {
			type: String as PropType<
				| 'primary'
				| 'secondary'
				| 'secondary-green'
				| 'secondary-golden'
				| 'neutral'
				| 'info'
				| 'success'
				| 'error'
				| 'warning'
				| 'success'
				| 'extra-1'
				| 'extra-2'
				| 'gray'
			>,
			default: 'primary',
		},
		size: {
			type: String as PropType<'xs' | 'sm' | 'md' | 'lg' | 'xl'>,
			default: 'md',
		},
		/**
		 * Inverted
		 */
		inverted: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		iconParsed() {
			return this.icon.indexOf('mdi-') === 0 ? this.icon.split('mdi-')[1] : this.icon;
		},
		cssColorClass() {
			return `farm-icon-box--${this.color}`;
		},
	},
});
</script>

<style lang="scss" scoped>
@import './IconBox.scss';
</style>
