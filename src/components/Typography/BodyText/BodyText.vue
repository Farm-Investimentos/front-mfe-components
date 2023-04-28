<template>
	<farm-typography
		v-bind="$attrs"
		v-on="$listeners"
		:weight="weight"
		:size="size"
		:key="key"
		:class="{ [`farm-bodytext--${type}`]: true, [`farm-bodytext--${variation}`]: true }"
	>
		<slot></slot>
	</farm-typography>
</template>
<script lang="ts">
import { defineComponent, computed, ref, watch, toRefs, PropType } from 'vue';
import { Keys } from './configurations';

export default defineComponent({
	inheritAttrs: true,
	name: 'farm-bodytext',
	props: {
		/**
		 * Type of the bodytext
		 */
		type: { type: [Number, String] as PropType<1 | 2>, default: 1 },
		/**
		 * Variation of the bodytext
		 */
		variation: { type: String as PropType<'regular' | 'medium' | 'bold'>, default: 'medium' },
	},
	setup(props) {
		const { type, variation } = toRefs(props);
		const key = ref(type.value + '_' + variation.value);

		watch(
			() => props,
			() => {
				key.value = type.value + '_' + variation.value;
			}
		);

		const config = computed(() => Keys[key.value]);
		const weight = computed(() => config.value.weight);
		const size = computed(() => config.value.size);

		return { weight, size, key, type, variation };
	},
});
</script>
<style lang="scss" scoped>
@import 'BodyText';
</style>
