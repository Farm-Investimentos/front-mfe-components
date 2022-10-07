<template>
	<div class="farm-loader__overlay" v-if="mode === 'overlay'" :style="styleObject">
		<div
			role="progressbar"
			aria-valuemin="0"
			aria-valuemax="100"
			class="farm-loader farm-loader--big farm-loader--visible farm-loader--indeterminate"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="22.857142857142858 22.857142857142858 45.714285714285715 45.714285714285715"
				style="transform: rotate(0deg)"
			>
				<circle
					fill="transparent"
					cx="45.714285714285715"
					cy="45.714285714285715"
					r="20"
					stroke-dasharray="125.664"
					stroke-dashoffset="125.66370614359172px"
					class="farm-loader__overlay"
				></circle>
			</svg>
			<div class="farm-loader__info"></div>
		</div>
	</div>
	<div
		v-else
		role="progressbar"
		aria-valuemin="0"
		aria-valuemax="100"
		class="farm-loader farm-loader--visible farm-loader--indeterminate"
		:class="calculateSize"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="22.857142857142858 22.857142857142858 45.714285714285715 45.714285714285715"
			style="transform: rotate(0deg)"
		>
			<circle
				fill="transparent"
				cx="45.714285714285715"
				cy="45.714285714285715"
				r="20"
				stroke-dasharray="125.664"
				stroke-dashoffset="125.66370614359172px"
				class="farm-loader__overlay"
			></circle>
		</svg>
		<div class="farm-loader__info"></div>
	</div>
</template>
<script lang="ts">
import Vue from 'vue';
import { calculateMainZindex } from '../../helpers';

export default Vue.extend({
	name: 'farm-loader',
	props: {
		mode: {
			type: String,
			default: 'inline',
		},
		size: {
			type: String,
			default: 'normal',
		},
	},
	data() {
		return {
			styleObject: {
				zIndex: calculateMainZindex(),
			},
		};
	},

	computed: {
		calculateSize() {
			return this.size === 'small' ? 'farm-loader--small' : '';
		},
	},
});
</script>
<style lang="scss" scoped>
@import 'Loader';
</style>
