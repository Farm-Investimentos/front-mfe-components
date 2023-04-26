<template>
	<i v-bind="$attrs" :class="classes" :size="$props.size" ref="el" />
</template>
<script lang="ts">
import { computed, onMounted, PropType, ref, toRefs, watch } from 'vue';

const breakPoints = ['xs', 'sm', 'md', 'lg', 'xl'];

export default {
	name: 'farm-icon',
	inheritAttrs: true,

	props: {
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
			default: 'primary',
		},
		size: {
			type: String as
				| PropType<'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'other (examples: 12px, 3rem)'>
				| any,
			default: 'default',
		},
		variation: {
			type: String as PropType<
				'lighten' | 'base' | 'darken' | '80' | '50' | '40' | '30' | '10' | '5'
			>,
			default: 'base',
		},
	},

	setup(props, { slots }) {
		const icon = ref('');
		const { color, variation, size } = toRefs(props);
		const el = ref(null);

		const classes = computed(() => {
			return {
				'farm-icon': true,
				['farm-icon--' + color.value]: true,
				mdi: true,
				['mdi-' + icon.value]: true,
				'farm-icon--lighten': variation.value === 'lighten',
				'farm-icon--darken': variation.value === 'darken',
				['farm-icon--black-' + variation.value]: color.value === 'black',
			};
		});

		const fontSize = computed(() => {
			return isNaN(size.value) ? size.value : `${size.value}px`;
		});

		const slotDefault = computed(() => slots.default());

		watch(slotDefault, () => {
			checkForSlotContent();
		});

		onMounted(() => {
			if (size.value !== 'default' && !breakPoints.includes(size.value)) {
				el.value.style.fontSize = fontSize.value;
			}
			checkForSlotContent();
		});

		const checkForSlotContent = () => {
			icon.value = !slotDefault.value ? '' : (slotDefault.value[0].children! as string).trim();
		};

		return {
			el,
			icon,
			classes,
			fontSize,
			checkForSlotContent,
		};
	},
};
</script>
<style lang="scss" scoped>
@import 'Icon.scss';
</style>
