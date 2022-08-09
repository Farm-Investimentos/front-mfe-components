<template>
	<farm-typography
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
import Vue, { computed, ref, watch } from 'vue';
import Typography from '../Typography.vue';

import { Keys } from './configurations';

export default Vue.extend({
	inheritAttrs: true,
	name: 'farm-heading',
	props: {
		type: { type: Number, default: 1 },
	},
	setup(props) {
		const type = ref(props.type);
		const key = ref(+new Date());

		watch(
			() => props.type,
			newValue => {
				type.value = newValue;
				key.value = +new Date();
			}
		);

		const config = computed(() => Keys[type.value]);
		const weight = computed(() => config.value.weight);
		const size = computed(() => config.value.size);
		const tag = computed(() => `h${type.value}`);

		return { weight, size, tag, config, key };
	},
	components: { 'farm-typography': Typography },
});
</script>
<style lang="scss" scoped>
@import 'Heading';
</style>
