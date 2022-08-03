<template>
	<component :is="tag" :class="cssClasses" :style="style">
		<slot></slot>
	</component>
</template>
<script lang="ts">
import Vue, { PropType, ref } from 'vue';

const breakPoints = ['xs', 'sm', 'md', 'lg', 'xl'];

export default Vue.extend({
	inheritAttrs: true,
	props: {
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
				| 'h7'
				| 'legend'
				| 'label'
				| 'li'
			>,
			default: 'p',
		},
		size: {
			type: String as PropType<'xs' | 'sm' | 'md' | 'lg' | 'xl'>,
		},
	},
	setup(props, context) {
		let style = ref({});
		let cssClasses = ref({
			'farm-typography': true,
		});
		const { weight } = context.attrs;

		if (props.size !== undefined) {
			const { size } = props;

			if (breakPoints.includes(size)) {
				cssClasses.value['farm-typography--' + size] = true;
			} else {
				style.value.fontSize = size;
			}
		}

		if (weight) {
			style.value.fontWeight = weight;
		}

		return {
			style,
			cssClasses,
		};
	},
});
</script>
<style lang="scss" scoped>
@import './Typography.scss';
</style>
