<template>
	<div :class="{ 'farm-icon-box': true, [cssColorClass]: true }" :size="size">
		<farm-icon :color="color" :size="size">{{ iconParsed }}</farm-icon>
	</div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import Icon from '../Icon';

export default Vue.extend({
	name: 'farm-icon-box',
	components: {
		'farm-icon': Icon,
	},
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
