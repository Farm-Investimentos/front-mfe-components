<template>
	<div class="farm-checkbox__container" :color="$props.color">
		<span :class="{
			'farm-checkbox': true,
			'farm-checkbox--checked': isChecked,
			'farm-checkbox--disabled': disabled,
			'farm-checkbox--indeterminate': indeterminate,
			'farm-checkbox--lighten': variation === 'lighten',
			'farm-checkbox--darken': variation === 'darken',
			'farm-checkbox--error': showError,
		}" :size="$props.size" @click="toggleValue">
			<farm-icon :size="$props.size" v-if="innerValue && !indeterminate">check</farm-icon>
			<farm-icon :size="$props.size" v-if="indeterminate">minus</farm-icon>
		</span>
		<farm-label v-if="label">
			{{ label }}
		</farm-label>
		<div class="farm-ripple" :size="$props.size" v-if="!disabled"></div>
	</div>
</template>
<script lang="ts">
import Vue, { computed, onBeforeMount, PropType, ref, toRefs, watch } from 'vue';
import validateFormStateBuilder from '../../composition/validateFormStateBuilder';
import validateFormFieldBuilder from '../../composition/validateFormFieldBuilder';
import validateFormMethodBuilder from '../../composition/validateFormMethodBuilder';
import deepEqual from '../../composition/deepEqual';

export default Vue.extend({
	name: 'farm-checkbox',
	model: {
		prop: 'modelValue',
	},
	props: {
		/**
		 * v-model binding
		 */
		modelValue: {},
		/**
		 * Value to be set to v-model
		 */
		value: { type: [String, Number, Boolean], default: undefined },
		/**
		 * Label
		 */
		label: { type: String, default: null },
		/**
		 * Is disabled?
		 */
		disabled: { type: Boolean, default: false },
		/**
		 * Variation
		 */
		variation: {
			type: String as PropType<'' | 'lighten' | 'darken'>,
			default: '',
		},
		color: {
			type: String as PropType<
				| 'primary'
				| 'secondary'
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
		 * Array of rules used for validation
		 */
		rules: {
			type: Array as PropType<Array<Function>>,
			default: () => [],
		},
		/**
		 * Size
		 */
		size: {
			type: String as PropType<'xs' | 'sm' | 'md' | 'lg' | 'xl'>,
			default: 'md',
		},
		/**
		 * Sets an indeterminate state for the simple checkbox
		 */
		indeterminate: { type: Boolean, default: false },
	},
	setup(props, { emit }) {
		const innerValue = ref(props.modelValue);
		const { label, disabled, rules } = toRefs(props);
		const { errorBucket, valid, validatable } = validateFormStateBuilder();
		const isTouched = ref(false);
		let fieldValidator = validateFormFieldBuilder(rules.value);

		const toggleValue = () => {
			if (disabled.value) {
				return false;
			}
			isTouched.value = true;
			if (isChecked.value) {
				innerValue.value = null;
			} else {
				innerValue.value = props.value;
			}
			emit('input', innerValue.value);
			validate(innerValue.value);
		};

		const isChecked = computed(() => {
			return innerValue.value == props.value;
		});

		const hasError = computed(() => {
			return errorBucket.value.length > 0;
		});

		const showError = computed(() => hasError.value && isTouched.value);

		
		watch(
			() => props.modelValue,
			(newValue) => {
				isTouched.value = true;
				innerValue.value = newValue;
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

		const reset = () => {
			if (disabled.value) {
				return false;
			}
			isTouched.value = true;
			innerValue.value = null;
			validate(innerValue.value);
			emit('input', innerValue.value);
		};

		onBeforeMount(() => {
			validate(innerValue.value);
		});

		let validate = validateFormMethodBuilder(errorBucket, valid, fieldValidator);

		const makePristine = () => {
			isTouched.value = false;
		};

		return {
			innerValue,
			label,
			disabled,
			errorBucket,
			valid,
			validatable,
			hasError,
			isChecked,
			toggleValue,
			reset,
			validate,
			showError,
			makePristine,
			isTouched,
		};
	},
});
</script>
<style lang="scss" scoped>
@import './Checkbox.scss';
</style>
