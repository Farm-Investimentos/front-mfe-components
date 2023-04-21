<template>
	<farm-typography
		v-bind="$attrs"
		v-on="$listeners"
		:weight="weight"
		:size="size"
		:tag="tag"
		:key="key"
		:class="{ ['farm-heading--' + tag]: true }"
	>
		<slot></slot>
	</farm-typography>
</template>
<script lang="ts">
import {  computed, ref, watch, toRefs, PropType } from 'vue';

import { Keys } from './configurations';

export default {
	inheritAttrs: true,
	name: 'farm-heading',
	props: {
		/**
		 * Type of the heading
		 */
		type: { type: [String, Number] as PropType<1 | 2 | 3 | 4 | 5 | 6>, default: 1 },
	},
	setup(props) {
		const { type } = toRefs(props);
		const key = ref(+new Date());

		watch(
			() => props.type,
			() => {
				key.value = +new Date();
			}
		);

		const config = computed(() => Keys[type.value]);
		const tag = computed(() => `h${type.value}`);
		const weight = computed(() => config.value.weight);
		const size = computed(() => config.value.size);

		return { weight, size, tag, config, key };
	},
};
</script>
<style lang="scss" scoped>
@import 'Heading';
</style>
