<template>
	<div
		class="farm-textfield"
		:class="{
			'farm-textfield': true,
			'farm-textfield--validatable': rules.length > 0,
			'farm-textfield--touched': isTouched,
			'farm-textfield--blured': isBlured,
			'farm-textfield--error': hasError,
			'farm-textfield--focused': isFocus && !readonly,
			'farm-textfield--disabled': disabled,
			'farm-textfield--hiddendetails': hideDetails,
			'farm-textfield--uppercase': isUppercase,
		}"
		:id="customId"
	>
		<div
			:class="{
				'farm-textfield--input': true,
				'farm-textfield--input--iconed': icon,
			}"
		>
			<button
				type="button"
				v-if="icon && iconPosition === 'left'"
				@click="$emit('onClickIcon')"
			>
				<farm-icon color="gray" size="20px">{{ icon }}</farm-icon>
			</button>
			<input
				v-bind="$attrs"
				v-model="innerValue"
				v-mask="mask"
				:id="$props.id"
				:disabled="disabled"
				:readonly="readonly"
				@click="$emit('click')"
				@keyup="onKeyUp"
				@blur="onBlur"
				@focusin="onFocus(true)"
				@focusout="onFocus(false)"
			/>
			<button
				type="button"
				v-if="icon && iconPosition === 'right'"
				@click="$emit('onClickIcon')"
			>
				<farm-icon color="gray" size="20px">{{ icon }}</farm-icon>
			</button>
		</div>
		<farm-caption v-if="!hideDetails && showErrorText" color="error" variation="regular">
			{{ errorBucket[0] }}
		</farm-caption>
		<farm-caption
			v-if="!hideDetails && hint && !showErrorText"
			class="farm-textfield__hint-text"
			:class="{
				'farm-textfield__hint-text--show': persistentHint || isFocus,
			}"
			color="gray"
			variation="regular"
		>
			{{ hint }}
		</farm-caption>
	</div>
</template>

<script lang="ts">
import {  computed, onBeforeMount, PropType, ref, toRefs, watch } from 'vue';
import validateFormStateBuilder from '../../composition/validateFormStateBuilder';
import validateFormFieldBuilder from '../../composition/validateFormFieldBuilder';
import validateFormMethodBuilder from '../../composition/validateFormMethodBuilder';
import deepEqual from '../../composition/deepEqual';
import randomId from '../../helpers/randomId';

export default {
	name: 'farm-textfield-v2',
	inheritAttrs: true,
	props: {
		/**
		 * v-model binding
		 */
		modelValue: { type: [String, Number], default: '' },
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
		 * Always show hint text
		 */
		persistentHint: {
			type: Boolean,
			default: false,
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
		mask: {
			default: '',
			type: [String, Function],
		},
		/**
		 * Hides hint and validation errors
		 */
		hideDetails: {
			type: Boolean,
			default: false,
		},
		/**
		 * Input id
		 */
		id: {
			type: String,
			default: '',
		},

		/**
		 * uppercase
		 * leaves only the text in the input in uppercase does not affect the value of the v-model
		 */
		uppercase: {
			type: Boolean,
			default: false,
		},
		/**
		 * Emitted when any key is pressed<br />
		 * _event_
		 */
		keyup: {
			type: Function,
			// eslint-disable-next-line
			default: (event: Event) => {},
		},
	},
	setup(props, { emit }) {
		const { rules } = toRefs(props);
		const innerValue = ref(props.modelValue);
		const isTouched = ref(false);
		const isBlured = ref(false);
		const isFocus = ref(false);
		const isUppercase = ref(props.uppercase);

		const { errorBucket, valid, validatable } = validateFormStateBuilder();

		let fieldValidator = validateFormFieldBuilder(rules.value);

		const hasError = computed(() => {
			return errorBucket.value.length > 0;
		});
		const customId = 'farm-textfield-' + (props.id || randomId(2));

		const showErrorText = computed(() => hasError.value && isTouched.value && isBlured.value);

		watch(
			() => props.modelValue,
			() => {
				innerValue.value = props.modelValue;
				validate(innerValue.value);
			}
		);

		watch(
			() => innerValue.value,
			() => {
				emit('input', innerValue.value);
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

		onBeforeMount(() => {
			validate(innerValue.value);
		});

		let validate = validateFormMethodBuilder(errorBucket, valid, fieldValidator);

		const onKeyUp = (event: Event) => {
			isTouched.value = true;
			emit('keyup', event);

			setTimeout(() => {
				emit('change', innerValue.value);
			}, 100);
		};

		const onBlur = (event: Event) => {
			isBlured.value = true;
			emit('blur', event);
		};

		const onFocus = (focus: boolean) => {
			isFocus.value = focus;
		};

		const reset = () => {
			innerValue.value = '';
			isTouched.value = true;
			emit('input', innerValue.value);
		};

		const makePristine = () => {
			isTouched.value = false;
			isBlured.value = false;
		};

		return {
			innerValue,
			errorBucket,
			valid,
			validatable,
			hasError,
			customId,
			isTouched,
			isBlured,
			isUppercase,
			isFocus,
			showErrorText,
			validate,
			onKeyUp,
			onBlur,
			onFocus,
			reset,
			makePristine,
		};
	},
};
</script>
<style lang="scss" scoped>
@import 'TextFieldV2';
</style>
