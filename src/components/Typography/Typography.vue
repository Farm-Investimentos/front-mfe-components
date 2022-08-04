<template>
	<component
		:is="tag"
		:class="{
			'farm-typography': true,
			['farm-typography--' + $props.size]: isSizeFromBreakpoints,
		}"
		:style="style"
	>
		<slot></slot>
	</component>
</template>
<script lang="ts">
import Vue, { computed, PropType, ref } from 'vue';

const breakPoints = ['xs', 'sm', 'md', 'lg', 'xl'];
const valideHtmlTags = ['p', 'span', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'legend', 'label', 'li'];

export default Vue.extend({
	inheritAttrs: true,
	props: {
		tag: {
			type: String as PropType<
				'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'legend' | 'label' | 'li'
			>,
			default: 'p',
		},
		size: {
			type: String as PropType<'xs' | 'sm' | 'md' | 'lg' | 'xl'>,
		},
	},
	setup(props, context) {
		let style = ref({});
		let tag = ref({});

		const { weight } = context.attrs;
		const { size } = props;

		const receivedTag = props.tag;
		const defaultHtmlTag = 'p';

		const isHtmlTagValide = computed(() => valideHtmlTags.includes(receivedTag));

		!isHtmlTagValide.value ? (tag.value = defaultHtmlTag) : (tag.value = receivedTag);

		const isSizeFromBreakpoints = computed(() => breakPoints.includes(size));

		if (props.size !== undefined && !isSizeFromBreakpoints.value) {
			style.value.fontSize = size;
		}

		if (weight) {
			style.value.fontWeight = weight;
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
