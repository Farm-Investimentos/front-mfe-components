<template>
	<div class="farm-checkbox__container">
		<span
			:class="{ 'farm-checkbox': true, 'farm-checkbox--checked': innerValue, 'farm-checkbox--disabled': disabled }"
			@click="toggleValue"
		>
			<farm-icon size="sm" v-if="innerValue">check</farm-icon>
		</span>
		<farm-label v-if="label">
			{{ label }}
		</farm-label>
	</div>
</template>
<script lang="ts">
import Vue, { ref, toRefs } from 'vue';

export default Vue.extend({
	name: 'farm-checkbox',
	props: {
		/**
		 * v-model binding
		 */
		value: { type: Boolean, required: true },
		/**
		 * Label
		 */
		label: { type: String, default: null },
		/**
		 * disabled
		 */
		disabled: { type: Boolean, default: false },
	},
	setup(props, { emit }) {
		const innerValue = ref(props.value);
		const { label, disabled } = toRefs(props);

		const toggleValue = () => {
			if(disabled.value) {
				return false;
			}
			innerValue.value = !innerValue.value;
			emit('input', innerValue.value);
		};

		return {
			innerValue,
			label,
			disabled,
			toggleValue,
		};
	},
});
</script>
<style lang="scss" scoped>
@import './Checkbox.scss';
</style>
