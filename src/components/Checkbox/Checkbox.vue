<template>
	<div class="farm-checkbox__container" :color="$props.color">
		<span
			:class="{
				'farm-checkbox': true,
				'farm-checkbox--checked': innerValue,
				'farm-checkbox--disabled': disabled,
				'farm-checkbox--indeterminate': indeterminate,
				'farm-checkbox--lighten': variation === 'lighten',
				'farm-checkbox--darken': variation === 'darken',
			}"
			:size="$props.size"
			@click="toggleValue"
		>
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
			type: String,
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
		const innerValue = ref(props.value);
		const { label, disabled, rules } = toRefs(props);
		const { errorBucket, valid, validatable } = validateFormStateBuilder();

		let fieldValidator = validateFormFieldBuilder(rules.value);

		const toggleValue = () => {
			if (disabled.value) {
				return false;
			}
			innerValue.value = !innerValue.value;
			emit('input', innerValue.value);
			validate(innerValue.value);
		};

		const hasError = computed(() => {
			return errorBucket.value.length > 0;
		});

		watch(
			() => props.value,
			() => {
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

		const reset = () => {
			if (disabled.value) {
				return false;
			}
			innerValue.value = false;
			emit('input', innerValue.value);
		};

		onBeforeMount(() => {
			validate(innerValue.value);
		});

		let validate = validateFormMethodBuilder(errorBucket, valid, fieldValidator);

		return {
			innerValue,
			label,
			disabled,
			errorBucket,
			valid,
			validatable,
			hasError,
			toggleValue,
			reset,
			validate,
		};
	},
});
</script>
<style lang="scss" scoped>
@import './Checkbox.scss';
</style>
