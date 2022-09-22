<template>
	<div class="farm-checkbox__container" :color="$props.color">
		<span
			:class="{
				'farm-checkbox': true,
				'farm-checkbox--checked': innerValue,
				'farm-checkbox--disabled': disabled,
				'farm-checkbox--lighten': variation === 'lighten',
				'farm-checkbox--darken': variation === 'darken',
			}"
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
import Vue, { ref, toRefs, watch } from 'vue';

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
		variation: {
			type: String,
			default: '',
		},
		color: {
			type: String,
			default: 'primary',
		},
	},
	setup(props, { emit }) {
		const innerValue = ref(props.value);
		const { label, disabled } = toRefs(props);

		const toggleValue = () => {
			if (disabled.value) {
				return false;
			}
			innerValue.value = !innerValue.value;
			emit('input', innerValue.value);
		};

		watch(
			() => props.value,
			() => {
				innerValue.value = props.value;
			}
		);

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
