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
				:disabled="disabled"
				@keyup="onKeyUp"
				@blur="onBlur"
			/>

			<button v-if="icon && iconPosition === 'right'" @click="$emit('onClickIcon')">
				<farm-icon color="gray" size="20px">{{ icon }}</farm-icon>
			</button>
		</div>

		<farm-caption v-if="hasError && isTouched" color="error">{{ errorBucket[0] }}</farm-caption>
		<farm-caption v-if="hintText && !errorMessage" color="gray">{{ hintText }}</farm-caption>
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
		value: {},
		/**
		 * Show icon?
		 */
		icon: String,
		/**
		 * Icon position
		 */
		iconPosition: { type: String, default: 'right' },
		/**
		 * Show hint text
		 */
		hintText: String,
		/**
		 * Show input disable
		 */
		disabled: {
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

		return {
			innerValue,
			errorBucket,
			valid,
			validatable,
			hasError,
			isTouched,
			isBlured,
			validate,
			onKeyUp,
			onBlur,
		};
	},
});
</script>
<style lang="scss" scoped>
@import 'TextFieldV2';
</style>
