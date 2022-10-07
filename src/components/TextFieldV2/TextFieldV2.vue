<template>
	<div class="farm-textfield">
		<div class="farm-textfield--input">
			<input v-bind="$attrs" v-model="innerValue" />
		</div>
		<span class="farm-textfield--text"> hint text</span>
	</div>
</template>
<script lang="ts">
import Vue, { ref, watch } from 'vue';

export default Vue.extend({
	name: 'farm-textfield-v2',
	inheritAttrs: true,
	props: {
		/**
		 * v-model binding
		 */
		value: {},
	},
	setup(props, { emit }) {
		const innerValue = ref(props.value);

		watch(
			() => props.value,
			() => {
				innerValue.value = props.value;
			}
		);

		watch(
			() => innerValue.value,
			() => {
				emit('input', innerValue.value);
			}
		);

		return {
			innerValue,
		};
	},
});
</script>
<style lang="scss" scoped>
@import 'TextFieldV2';
</style>
