<template>
	<div
		class="farm-textfield"
		:class="{
			'touched-success': isSuccess,
			'touched-error': hasError,
			'touched-disabled': isDisabled,
		}"
	>
		<div class="farm-textfield--input">
			<button v-if="iconLeft" @click="$emit('onClickIconLeft')">
				<farm-icon>{{ iconLeft }}</farm-icon>
			</button>

			<input v-bind="$attrs" v-model="innerValue" :disabled="isDisabled" />

			<button v-if="iconRight" @click="$emit('onClickIconRight')">
				<farm-icon>{{ iconRight }}</farm-icon>
			</button>
		</div>

		<span class="farm-textfield--text" v-if="errorMessage">{{ errorMessage }}</span>
		<span class="farm-textfield--text" v-if="hintText && !errorMessage">{{ hintText }}</span>
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
		 * Show icon left
		 */
		iconLeft: String,
		/**
		 * Show icon right
		 */
		iconRight: String,
		/**
		 * Show hint text
		 */
		hintText: String,
		/**
		 * Show input active
		 */
		isSuccess: {
			type: Boolean,
			default: false,
		},
		/**
		 * Show input error
		 */
		isError: {
			type: Boolean,
			default: false,
		},
		/**
		 * Show input disable
		 */
		isDisabled: {
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

		return {
			innerValue,
			errorBucket,
			valid,
			validatable,
			hasError,
			validate,
		};
	},
});
</script>
<style lang="scss" scoped>
@import 'TextFieldV2';
</style>
