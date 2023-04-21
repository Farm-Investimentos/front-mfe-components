<template>
	<div
		:class="{
			'farm-radio-group': true,
		}"
	>
		<slot></slot>
		<farm-caption v-if="showErrorText" color="error" variation="regular">
			{{ errorBucket[0] }}
		</farm-caption>
	</div>
</template>
<script lang="ts">
import {  ref, watch, PropType, toRefs, computed, onBeforeMount } from 'vue';
import validateFormStateBuilder from '../../composition/validateFormStateBuilder';
import validateFormFieldBuilder from '../../composition/validateFormFieldBuilder';
import validateFormMethodBuilder from '../../composition/validateFormMethodBuilder';
import deepEqual from '../../composition/deepEqual';

export default {
	name: 'farm-radio-group',
	props: {
		/**
		 * v-model
		 */
		value: {
			required: true,
		},
		errorMessage: String,
		/**
		 * Array of rules used for validation
		 */
		rules: {
			type: Array as PropType<Array<Function>>,
			default: () => [],
		},
	},
	setup(props, { emit }) {
		const { rules } = toRefs(props);
		const innerValue = ref(props.value);
		const { errorBucket, valid, validatable } = validateFormStateBuilder();
		const isTouched = ref(false);

		let fieldValidator = validateFormFieldBuilder(rules.value);

		const hasError = computed(() => {
			return errorBucket.value.length > 0;
		});

		const showErrorText = computed(() => hasError.value && isTouched.value);

		watch(
			() => props.value,
			() => {
				isTouched.value = true;
				innerValue.value = props.value;
				validate(innerValue.value);
			}
		);

		watch(
			() => props.rules,
			(newVal, oldVal) => {
				if (deepEqual(newVal, oldVal)) return;
				fieldValidator = validateFormFieldBuilder(rules.value);
				validate = validateFormMethodBuilder(errorBucket, valid, fieldValidator);
				validate(innerValue.value);
			}
		);

		let validate = validateFormMethodBuilder(errorBucket, valid, fieldValidator);

		const reset = () => {
			innerValue.value = null;
			emit('input', innerValue.value);
		};

		onBeforeMount(() => {
			validate(innerValue.value);
		});

		return {
			innerValue,
			errorBucket,
			valid,
			validatable,
			hasError,
			showErrorText,
			isTouched,
			reset,
			validate,
		};
	},
};
</script>
