<template>
	<farm-typography
		v-bind="$attrs"
		v-on="$listeners"
		:weight="weight"
		:size="size"
		:key="key"
		:class="{ 'farm-caption': true, [`farm-caption--${variation}`]: true }"
	>
		<slot></slot>
	</farm-typography>
</template>
<script lang="ts">
import {  computed, ref, watch, toRefs, PropType } from 'vue';

import { Keys } from './configurations';

export default {
	inheritAttrs: true,
	name: 'farm-caption',
	props: {
		/**
		 * Variation of the caption
		 */
		variation: {
			type: String as PropType<'regular' | 'medium' | 'semiBold'>,
			default: 'medium',
		},
	},
	setup(props) {
		const { variation } = toRefs(props);
		const key = ref(variation.value);

		watch(
			() => props,
			() => {
				key.value = variation.value;
			}
		);

		const config = computed(() => Keys[key.value]);
		const weight = computed(() => config.value.weight);
		const size = computed(() => config.value.size);

		return { weight, size, key, variation };
	},
};
</script>
<style lang="scss" scoped>
@import 'Caption';
</style>
