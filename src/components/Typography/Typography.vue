<template>
	<component
		
		:is="tag"
		:class="{
			'farm-typography': true,
			['farm-typography--' + $props.size]: isSizeFromBreakpoints,
			['farm-typography--weight-' + weight]: weight !== undefined,
			'farm-typography--lighten': colorVariation === 'lighten',
			'farm-typography--darken': colorVariation === 'darken',
			['farm-typography--black-' + colorVariation]: color === 'black',
			'farm-typography--ellipsis': ellipsis,
		}"
		:style="style"
		:color="color"
	>
		<slot></slot>
	</component>
</template>
<script lang="ts">
import {  computed, PropType, ref, toRefs } from 'vue';
import breakPoints from '../../configurations/sizes';
import typographyHtmlTags from '../../configurations/typographyHtmlTags';

export default {
	inheritAttrs: true,
	name: 'farm-typography',
	props: {
		/**
		 * Html tag
		 */
		tag: {
			type: String as PropType<
				| 'p'
				| 'span'
				| 'h1'
				| 'h2'
				| 'h3'
				| 'h4'
				| 'h5'
				| 'h6'
				| 'legend'
				| 'label'
				| 'li'
				| 'div'
				| 'dd'
				| 'dt'
			>,
			default: 'p',
		},
		/**
		 * Size
		 */
		size: {
			type: String as PropType<'xs' | 'sm' | 'md' | 'lg' | 'xl'>,
		},
		/**
		 * Line Height
		 */
		lineHeight: {
			type: String,
		},
		/**
		 * Font-weight
		 */
		weight: {
			type: [Number, String] as PropType<100 | 200 | 300 | 400 | 500 | 600 | 700>,
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
				| 'extra-1'
				| 'extra-2'
				| 'gray'
				| 'black'
				| 'white'
			>,
			default: '',
		},
		/**
		 * Color variation
		 */
		colorVariation: {
			type: String,
			default: '',
		},
		/**
		 * Add css ellipsis
		 */
		ellipsis: {
			type: Boolean,
			default: false,
		},
	},
	setup(props) {
		const { size, lineHeight } = toRefs(props);

		let style = ref({} as { fontSize: string; lineHeight: string });
		let tag = ref(typographyHtmlTags.includes(props.tag) ? props.tag : 'p');

		const isSizeFromBreakpoints = computed(() => breakPoints.includes(size.value));

		if (size !== undefined && !isSizeFromBreakpoints.value) {
			style.value.fontSize = size.value;
		}
		if (lineHeight !== undefined) {
			style.value.lineHeight = lineHeight.value;
		}

		// eslint-disable-next-line
		return {
			style,
			isSizeFromBreakpoints,
			tag,
		};
	},
};
</script>
<style lang="scss" scoped>
@import './Typography.scss';
</style>
