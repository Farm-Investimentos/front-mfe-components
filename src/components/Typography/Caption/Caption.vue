<template>
	<farm-typography
		:weight="weight"
		:size="size"
		:key="key"
		:class="{ [`farm-caption--${variation}`]: true }"
		v-bind="$attrs"
	>
		<slot></slot>
	</farm-typography>
</template>
<script lang="ts">
import Vue, { computed, ref, watch, toRefs, PropType } from 'vue';
import Typography from '../Typography.vue';

import { Keys } from './configurations';

export default Vue.extend({
	inheritAttrs: true,
	name: 'farm-caption',
	props: {
		/**
		 * Variation of the caption
		 */
		variation: { type: String as PropType<'regular' | 'medium'>, default: 'medium' },
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
	components: { 'farm-typography': Typography },
});
</script>
<style lang="scss" scoped>
@import 'Caption';
</style>
