<template>
	<div :class="classes" :style="containerStyle">
		<div :style="valueStyle"></div>
	</div>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
	name: 'farm-progressbar',
	props: {
		/**
		 * backgroundColor
		 */
		backgroundColor: {
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
				| 'extra-1'
				| 'extra-2'
				| any
			>,
			default: 'primary',
		},
		/**
		 * color
		 */
		valueColor: {
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
				| 'extra-1'
				| 'extra-2'
				| any
			>,
			default: 'error',
		},
		/**
		 * Value (form 0 to 100)
		 */
		value: {
			type: Number,
			required: true,
		},
	},
	computed: {
		classes() {
			const obj = {};

			if (!this.backgroundColor.startsWith('#')) {
				obj['farm-progressbar--' + this.backgroundColor] = true;
			}
			if (!this.valueColor.startsWith('#')) {
				obj['farm-progressbar--value-' + this.valueColor] = true;
			}

			return {
				'farm-progressbar': true,
				...obj,
			};
		},
		valueStyle() {
			const obj = {
				width: `${this.value}%`,
			};
			if (this.valueColor.startsWith('#')) {
				obj['background-color'] = this.valueColor;
			}
			return obj;
		},
		containerStyle() {
			const obj = {};

			if (this.backgroundColor.startsWith('#')) {
				obj['background-color'] = this.backgroundColor;
			}

			return obj;
		},
	},
});
</script>
<style lang="scss" scoped>
@import 'ProgressBar.scss';
</style>
