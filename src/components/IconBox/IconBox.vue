<template>
	<div
		:class="{
			'farm-icon-box': true,
			[cssColorClass]: true,
			'farm-icon-box--inverted': inverted,
		}"
		:size="size"
	>
		<farm-icon :color="inverted ? 'white' : color" :size="size">{{
			iconParsed
		}}</farm-icon>
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
			type: String,
			default: 'secondary',
		},
		size: {
			type: String as PropType<'xs' | 'sm' | 'md' | 'lg' | 'xl'>,
			default: 'md',
		},
		/**
		 * INverted
		 */
		inverted: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		iconParsed() {
			if (this.icon.indexOf('mdi-') === 0) {
				return this.icon.split('mdi-')[1];
			}
			return this.icon;
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
