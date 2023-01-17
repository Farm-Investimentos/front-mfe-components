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
		}"
		v-if="!readonly && !disabled"
	>
		<farm-contextmenu bottom v-model="isVisible" :stay-open="multiple">
			<farm-list v-if="!readonly">
				<farm-listitem
					v-for="(item, index) in items"
					clickable
					hoverColorVariation="lighten"
					hover-color="primary"
					:key="'contextmenu_item_' + index"
					:class="{ 'farm-listitem--selected': item[itemValue] === innerValue }"
					@click="selectItem(item)"
				>
					<farm-checkbox
						class="farm-select__checkbox"
						v-model="checked"
						value="1"
						size="sm"
						v-if="isChecked(item)"
					></farm-checkbox>
					<farm-checkbox
						class="farm-select__checkbox"
						v-model="checked"
						value="2"
						size="sm"
						v-else-if="multiple"
					></farm-checkbox
					><farm-caption bold tag="span">{{ item[itemText] }}</farm-caption>
				</farm-listitem>
				<farm-listitem v-if="!items || items.length === 0">
					{{ noDataText }}
				</farm-listitem>
			</farm-list>
			<template v-slot:activator="{}">
				<div class="farm-textfield--input farm-textfield--input--iconed">
					<input
						v-model="selectedText"
						:disabled="disabled"
						:readonly="true"
						@click="clickInput"
						@keyup="onKeyUp"
						@blur="onBlur"
					/>
					<farm-icon color="gray" :class="{ 'farm-icon--rotate': isVisible }">
						menu-down
					</farm-icon>
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
	<farm-textfield-v2 v-else v-model="selectedText" :disabled="disabled" :readonly="readonly" />
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
		value: { type: [String, Number, Array], default: '' },
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
			type: Array,
			default: () => [],
		},
		/**
		 * Set property of items's text value
		 */
		itemText: {
			type: String,
			default: 'text',
		},
		/**
		 * Set property of items's value
		 */
		itemValue: {
			type: String,
			default: 'value',
		},
		/**
		 * No data text
		 */
		noDataText: {
			type: String,
			default: 'Não há dados',
		},
		/**
		 * Set a multiple select
		 */
		multiple: {
			type: Boolean,
			default: false,
		},
		/**
		 * Hides hint and validation errors
		 */
		hideDetails: {
			type: Boolean,
			default: false,
		},
	},
	setup(props, { emit }) {
		const { rules, items, itemText, itemValue, disabled, multiple } = toRefs(props);
		const innerValue = ref(props.value);
		const isTouched = ref(false);
		const isBlured = ref(false);
		const isVisible = ref(false);
		const selectedText = ref('');
		const multipleValues = ref(Array.isArray(props.value) ? [...props.value] : []);
		const checked = ref('1');
		const notChecked = ref(false);

		const { errorBucket, valid, validatable } = validateFormStateBuilder();

		let fieldValidator = validateFormFieldBuilder(rules.value);
		let validate = validateFormMethodBuilder(errorBucket, valid, fieldValidator);

		const hasError = computed(() => {
			return errorBucket.value.length > 0;
		});

		const showErrorText = computed(() => hasError.value && isTouched.value);

		watch(
			() => props.value,
			newValue => {
				innerValue.value = newValue;
				errorBucket.value = [];
				validate(newValue);
				updateSelectedTextValue();
				emit('input', newValue);
				emit('change', newValue);
			}
		);

		watch(
			() => props.items,
			() => {
				errorBucket.value = [];
				validate(innerValue.value);
				updateSelectedTextValue();
			}
		);

		watch(
			() => innerValue.value,
			() => {
				isTouched.value = true;
				isBlured.value = true;
				validate(innerValue.value);
				emit('input', innerValue.value);
				emit('change', innerValue.value);
			}
		);

		watch(
			() => props.rules,
			(newVal, oldVal) => {
				if (deepEqual(newVal, oldVal)) return;
				fieldValidator = validateFormFieldBuilder(rules.value);
				validate(innerValue.value);
			}
		);

		onBeforeMount(() => {
			validate(innerValue.value);
			updateSelectedTextValue();
		});

		const reset = () => {
			if (disabled.value) {
				return;
			}
			innerValue.value = null;
			multipleValues.value = [];
			selectedText.value = '';
			isTouched.value = true;
			if (multiple.value) {
				innerValue.value = [];
				return;
			}
			emit('input', innerValue.value);
		};

		const onKeyUp = (event: Event) => {
			emit('keyup', event);
		};

		const onBlur = (event: Event) => {
			isBlured.value = true;
			validate(innerValue.value);
			emit('blur', event);
		};

		const selectItem = item => {
			if (multiple.value) {
				const alreadyAdded = multipleValues.value.findIndex(
					val => val === item[itemValue.value]
				);
				checked.value = '1';
				if (alreadyAdded !== -1) {
					multipleValues.value.splice(alreadyAdded, 1);
				} else {
					multipleValues.value.push(item[itemValue.value]);
				}
				innerValue.value = [...multipleValues.value];

				return;
			}

			innerValue.value = item[itemValue.value];
			isVisible.value = false;
		};

		const clickInput = () => {
			isTouched.value = true;
			emit('click');
		};

		const makePristine = () => {
			isTouched.value = false;
		};

		const updateSelectedTextValue = () => {
			if (
				!items.value ||
				items.value.length === 0 ||
				innerValue.value === null ||
				(multiple.value && multipleValues.value.length === 0)
			) {
				selectedText.value = '';
				return;
			}
			const selectedItem = items.value.find(
				item => item[itemValue.value] == innerValue.value
			);

			if (selectedItem) {
				selectedText.value = selectedItem[itemText.value];
			}

			addLabelToMultiple();
		};

		const addLabelToMultiple = () => {
			if (multiple.value && Array.isArray(innerValue.value) && innerValue.value.length > 0) {
				const labelItem = items.value.find(
					item => item[itemValue.value] === innerValue.value[0]
				);

				if (innerValue.value.length === 0) {
					selectedText.value = '';
					return;
				} else if (innerValue.value.length === 1) {
					selectedText.value = labelItem[itemText.value];
					return;
				}

				selectedText.value = `${labelItem[itemText.value]} (+${
					innerValue.value.length - 1
				} ${innerValue.value.length - 1 === 1 ? 'outro' : 'outros'})`;
			}
		};

		const isChecked = item => {
			return (
				multiple.value &&
				multipleValues.value.findIndex(val => val === item[itemValue.value]) !== -1
			);
		};

		return {
			items,
			innerValue,
			selectedText,
			errorBucket,
			valid,
			validatable,
			hasError,
			isTouched,
			isBlured,
			isVisible,
			showErrorText,
			validate,
			reset,
			selectItem,
			onKeyUp,
			onBlur,
			clickInput,
			updateSelectedTextValue,
			makePristine,
			checked,
			notChecked,
			isChecked,
			multipleValues,
			addLabelToMultiple,
		};
	},
});
</script>
<style lang="scss" scoped>
@import 'Select';
</style>
