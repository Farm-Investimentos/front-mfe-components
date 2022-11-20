<template>
	<input
		:class="{
			'farm-radio': true,
			'farm-radio--checked': isChecked,
		}"
		type="radio"
		:checked="isChecked"
		:value="value"
		@click="onClick"
	/>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
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
		value: { type: [String, Number, Boolean], default: undefined },
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
