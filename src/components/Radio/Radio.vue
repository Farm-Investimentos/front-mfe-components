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
			:size="$props.size"
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
import { defineComponent, PropType } from 'vue';

export default defineComponent({
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
	computed: {
		isChecked() {
			return this.modelValue == this.value;
		},
	},
	setup(_, { emit }) {
		const onClick = event => {
			emit('change', event.target.value);
			emit('input', event.target.value);
		};

		const reset = () => {
			emit('input', null);
		};
		const validate = () => {};
		return { onClick, reset, validate };
	},
});
</script>
<style lang="scss" scoped>
@import 'Radio';
</style>
