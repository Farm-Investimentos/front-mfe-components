<template>
	<component
		v-on="$listeners"
		:is="tag"
		:class="{
			'farm-typography': true,
			['farm-typography--' + $props.size]: isSizeFromBreakpoints,
			['farm-typography--weight-' + weight]: weight !== undefined,
			'farm-typography--lighten': colorVariation === 'lighten',
			'farm-typography--darken': colorVariation === 'darken',
			'farm-typography--ellipsis': ellipsis,
		}"
		:style="style"
		:color="color"
	>
		<slot></slot>
	</component>
</template>
<script lang="ts">
import Vue, { computed, PropType, ref, toRefs } from 'vue';
import breakPoints from '../../configurations/sizes';
import typographyHtmlTags from '../../configurations/typographyHtmlTags';

export default Vue.extend({
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
			default: 'default',
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

		let style = ref({});
		let tag = ref(typographyHtmlTags.includes(props.tag) ? props.tag : 'p');

		const isSizeFromBreakpoints = computed(() => breakPoints.includes(size.value));

		if (size !== undefined && !isSizeFromBreakpoints.value) {
			style.value.fontSize = size.value;
		}
		if (lineHeight !== undefined) {
			style.value.lineHeight = lineHeight.value;
		}

		return {
			style,
			isSizeFromBreakpoints,
			tag,
		};
	},
});
</script>
<style lang="scss" scoped>
@import './Typography.scss';
</style>
