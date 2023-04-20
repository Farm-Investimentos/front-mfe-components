<template>
	<div
		class="farm-textarea"
		:class="{
			'farm-textarea': true,
			'farm-textarea--validatable': rules.length > 0,
			'farm-textarea--touched': isTouched,
			'farm-textarea--blured': isBlured,
			'farm-textarea--error': hasError,
			'farm-textarea--disabled': disabled,
			'farm-textarea--hiddendetails': hideDetails,
			'farm-textarea--focused': isFocus && !readonly,
		}"
	>
		<div
			:class="{
				'farm-textarea--textarea': true,
			}"
		>
			<textarea
				v-model="innerValue"
				v-bind="$attrs"
				:id="$props.id"
				:rows="$props.rows"
				:disabled="disabled"
				:readonly="readonly"
				@click="$emit('click')"
				@keyup="onKeyUp"
				@blur="onBlur"
				@focusin="onFocus(true)"
				@focusout="onFocus(false)"
			/>
		</div>
		<farm-caption v-if="showErrorText" color="error" variation="regular">
			{{ errorBucket[0] }}
		</farm-caption>
		<farm-caption
			v-if="hint && !showErrorText"
			class="farm-textarea__hint-text"
			:class="{
				'farm-textarea__hint-text--show': persistentHint || isFocus,
			}"
			color="gray"
			variation="regular"
		>
			{{ hint }}
		</farm-caption>
	</div>
</template>

<script lang="ts">
import { defineComponent, computed, onBeforeMount, PropType, ref, toRefs, watch } from 'vue';
import validateFormStateBuilder from '../../composition/validateFormStateBuilder';
import validateFormFieldBuilder from '../../composition/validateFormFieldBuilder';
import validateFormMethodBuilder from '../../composition/validateFormMethodBuilder';
import deepEqual from '../../composition/deepEqual';
import randomId from '../../helpers/randomId';

export default defineComponent({
	name: 'farm-textarea',
	inheritAttrs: true,
	props: {
		/**
		 * v-model binding
		 */
		value: { type: [String, Number], default: '' },
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
		 * Textarea rows
		 */
		rows: {
			default: 5,
			type: [String, Number],
		},
		/**
		 * Hides hint and validation errors
		 */
		hideDetails: {
			type: Boolean,
			default: false,
		},
		/**
		 * Select id
		 */
		id: {
			type: String,
			default: '',
		},
	},
	setup(props, { emit }) {
		const { rules } = toRefs(props);
		const innerValue = ref(props.value);
		const isTouched = ref(false);
		const isFocus = ref(false);
		const isBlured = ref(false);

		const { errorBucket, valid, validatable } = validateFormStateBuilder();

		let fieldValidator = validateFormFieldBuilder(rules.value);

		const hasError = computed(() => {
			return errorBucket.value.length > 0;
		});
		const customId = 'farm-textarea-' + (props.id || randomId(2));

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
});
</script>
<style lang="scss" scoped>
@import 'TextArea';
</style>
