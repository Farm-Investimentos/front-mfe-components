<template>
	<div
		class="farm-textfield"
		:class="{
			'farm-textfield': true,
			'farm-textfield--validatable': rules.length > 0,
			'farm-textfield--touched': isTouched,
			'farm-textfield--blured': isBlured,
			'farm-textfield--error': hasError,
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
			color="gray"
			variation="regular"
		>
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
import randomId from '../../helpers/randomId';

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
	},
	setup(props, { emit }) {
		const { rules } = toRefs(props);
		const innerValue = ref(props.value);
		const isTouched = ref(false);
		const isBlured = ref(false);
		const isUppercase = ref(props.uppercase);

		const { errorBucket, valid, validatable } = validateFormStateBuilder();

		let fieldValidator = validateFormFieldBuilder(rules.value);

		const hasError = computed(() => {
			return errorBucket.value.length > 0;
		});
		const customId = 'farm-textfield-' + (props.id || randomId(2));

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

		const onKeyUp = (event: Event) => {
			isTouched.value = true;
			emit('keyup', event);
		};

		const onBlur = (event: Event) => {
			isBlured.value = true;
			emit('blur', event);
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
			showErrorText,
			validate,
			onKeyUp,
			onBlur,
			reset,
			makePristine,
		};
	},
});
</script>
<style lang="scss" scoped>
@import 'TextFieldV2';
</style>
