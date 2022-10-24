<template>
	<div
		class="farm-textfield"
		:class="{
			'farm-textfield': true,
			'farm-textfield--validatable': rules.length > 0,
			'farm-textfield--touched': isTouched,
			'farm-textfield--blured': isBlured,
			'farm-textfield--error': hasError,
		}"
	>
		<div class="farm-textfield--input">
			<button v-if="icon && iconPosition === 'left'" @click="$emit('onClickIcon')">
				<farm-icon color="gray" size="20px">{{ icon }}</farm-icon>
			</button>
			<input
				v-bind="$attrs"
				v-model="innerValue"
				v-mask="$props.vMask"
				:disabled="disabled"
				:readonly="readonly"
				@keyup="onKeyUp"
				@blur="onBlur"
			/>
			<button v-if="icon && iconPosition === 'right'" @click="$emit('onClickIcon')">
				<farm-icon color="gray" size="20px">{{ icon }}</farm-icon>
			</button>
		</div>

		<farm-caption v-if="showErrorText" color="error" variation="regular">
			{{ errorBucket[0] }}
		</farm-caption>
		<farm-caption v-if="hint && !showErrorText" color="gray" variation="regular">
			{{ hint }}
		</farm-caption>
	</div>
</template>

<script lang="ts">
import Vue, { computed, onBeforeMount, PropType, ref, toRefs, watch } from 'vue';
import validateFormStateBuilder from '../../composition/validateFormStateBuilder';
import validateFormFieldBuilder from '../../composition/validateFormFieldBuilder';
import validateFormMethodBuilder from '../../composition/validateFormMethodBuilder';
import deepEqual from '../../composition/deepEqual';

export default Vue.extend({
	name: 'farm-textfield-v2',
	inheritAttrs: true,
	props: {
		/**
		 * v-model binding
		 */
		value: { type: [String, Number], default: '' },
		/**
		 * Show icon?
		 */
		icon: {
			type: String,
			default: null,
		},
		/**
		 * Icon position
		 */
		iconPosition: { type: String as PropType<'left' | 'right'>, default: 'right' },
		/**
		 * Show hint text
		 */
		hint: {
			type: String,
			default: null,
		},
		/**
		 * Disabled the input
		 */
		disabled: {
			type: Boolean,
			default: false,
		},
		/**
		 * Puts input in readonly state
		 */
		readonly: {
			type: Boolean,
			default: false,
		},

		errorMessage: String,
		/**
		 * Array of rules used for validation
		 */
		rules: {
			type: Array as PropType<Array<Function>>,
			default: () => [],
		},
		/**
		 * Mask
		 */
		vMask: {
			default: '',
			type: [String, Function],
		},
	},
	setup(props, { emit }) {
		const { rules } = toRefs(props);
		const innerValue = ref(props.value);
		const isTouched = ref(false);
		const isBlured = ref(false);

		const { errorBucket, valid, validatable } = validateFormStateBuilder();

		let fieldValidator = validateFormFieldBuilder(rules.value);

		const hasError = computed(() => {
			return errorBucket.value.length > 0;
		});

		const showErrorText = computed(() => hasError.value && isTouched.value);

		watch(
			() => props.value,
			() => {
				innerValue.value = props.value;
				validate(innerValue.value);
			}
		);

		watch(
			() => innerValue.value,
			() => {
				emit('input', innerValue.value);
				emit('change', innerValue.value);
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

		onBeforeMount(() => {
			validate(innerValue.value);
		});

		let validate = validateFormMethodBuilder(errorBucket, valid, fieldValidator);

		const onKeyUp = () => {
			isTouched.value = true;
		};

		const onBlur = () => {
			isBlured.value = true;
		};

		const reset = () => {
			innerValue.value = '';
			isTouched.value = true;
			emit('input', innerValue.value);
		};

		return {
			innerValue,
			errorBucket,
			valid,
			validatable,
			hasError,
			isTouched,
			isBlured,
			showErrorText,
			validate,
			onKeyUp,
			onBlur,
			reset,
		};
	},
});
</script>
<style lang="scss" scoped>
@import 'TextFieldV2';
</style>
