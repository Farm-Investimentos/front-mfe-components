<template>
	<div class="farm-radio-wrapper">
		<input
			:class="{
				'farm-radio': true,
				'farm-radio--checked': isChecked,
			}"
			:id="id"
			type="radio"
			:color="color"
			:custom-size="$props.size"
			:checked="isChecked"
			:value="value"
			v-bind="$attrs"
			@click="onClick"
		/>
		<farm-label v-if="label" :for="id">
			{{ label }}
		</farm-label>
	</div>
</template>
<script lang="ts">
import { PropType, ref, watch } from 'vue';

export default {
	name: 'farm-radio',
	model: {
		prop: 'modelValue',
	},
	props: {
		/**
		 * v-model binding
		 */
		modelValue: { default: '' },
		/**
		 * Value to be set to v-model
		 */
		value: { type: [String, Number, Boolean], required: true },
		/**
		 * Size
		 */
		size: {
			type: String as PropType<'xs' | 'sm' | 'md' | 'lg' | 'xl'>,
			default: 'sm',
		},
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
				| 'success'
				| 'extra-1'
				| 'extra-2'
			>,
			default: 'primary',
		},
		/**
		 * Label
		 */
		label: {
			type: String,
			default: '',
		},
		/**
		 * ID
		 */
		id: {
			type: String,
			default: '',
		},
	},
	setup(props, { emit }) {
		const innerValue = ref(props.modelValue);
		const value = ref(props.value);

		const isChecked = ref<Boolean>(innerValue.value == value.value);

		watch(
			() => props.modelValue,
			newValue => {
				isChecked.value = newValue == value.value;
			}
		);

		const onClick = event => {
			emit('change', event.target.value);
			emit('update:modelValue', event.target.value);
		};

		const reset = () => {
			emit('update:modelValue', null);
		};
		const validate = () => {};

		return { isChecked, onClick, reset, validate };
	},
};
</script>
<style lang="scss" scoped>
@import 'Radio';
</style>
