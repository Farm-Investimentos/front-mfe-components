<template>
	<div
		class="farm-select"
		:class="{
			'farm-select': true,
			'farm-select--validatable': rules.length > 0,
			'farm-select--touched': isTouched,
			'farm-select--blured': isBlured,
			'farm-select--error': hasError,
			'farm-select--disabled': disabled,
		}"
	>
	{{ items }}
		<farm-contextmenu bottom>
			<farm-list>
				<farm-listitem
					v-for="item in items"
					clickable
					hoverColorVariation="lighten"
					:key="'contextmenu_item_' + item.text"
					:hoverColor="item.icon.color || 'primary'"
				>
					
					<farm-caption bold tag="span">{{ item.text }}</farm-caption>
				</farm-listitem>
			</farm-list>
			<template v-slot:activator="{}">
				<div class="farm-select--input">
					<input
						v-model="innerValue"
						:disabled="disabled"
						:readonly="true"
						@click="$emit('click')"
						@keyup="onKeyUp"
						@blur="onBlur"
					/>
				</div>
			</template>
		</farm-contextmenu>

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
	name: 'farm-select',
	inheritAttrs: true,
	props: {
		/**
		 * v-model binding
		 */
		value: { type: [String, Number], default: '' },
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
		 * An array of objects. Will look for a text, value and disabled keys.
		 * This can be changed using the item-text ad item-value
		 */
		items: {
			//type: Array,
			default: () => [],
		},
	},
	setup(props, { emit }) {
		const { rules, items } = toRefs(props);
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

		return {
			items,
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
@import 'Select';
</style>
