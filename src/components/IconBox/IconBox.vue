<template>
	<div :class="{ 'farm-icon-box': true, [cssColorClass]: true }">
		<farm-icon size="md" :color="color">{{ iconParsed }}</farm-icon>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Icon from '../Icon';

export default Vue.extend({
	name: 'farm-icon-box',
	components: {
		'farm-icon': Icon,
	},
	props: {
		icon: {
			type: String,
			required: true,
		},
		color: {
			type: String,
			default: 'secondary',
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
		}
	},
});
</script>

<style lang="scss" scoped>
@import './IconBox.scss';
</style>
