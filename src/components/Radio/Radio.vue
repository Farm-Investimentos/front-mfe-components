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
		value: { type: String, default: undefined },
	},
	computed: {
		isChecked() {
			return this.modelValue == this.value;
		},
	},
	methods: {
		onClick(event) {
			this.$emit('change', event.target.value);
			this.$emit('input', event.target.value);
		},
		validate() {},
		reset() {
			this.$emit('input', null);
		},
	},
});
</script>
<style lang="scss" scoped>
@import 'Radio';
</style>
