<template>
	<div
		v-if="!readonly && !disabled"
		:id="customId"
		:class="{
			'farm-textfield': true,
			'farm-textfield--validatable': rules.length > 0,
			'farm-textfield--touched': isTouched,
			'farm-textfield--blured': isBlured,
			'farm-textfield--error': hasError,
			'farm-textfield--disabled': disabled,
			'farm-textfield--focused': isFocus || isVisible,
			'farm-textfield--hiddendetails': hideDetails,
		}"
	>
		<farm-contextmenu
			bottom
			v-model="isVisible"
			:stay-open="multiple || clickedDisabledItem"
			ref="contextmenu"
		>
			<farm-list v-if="!readonly" ref="listRef" @keydown="onKeyDown">
				<farm-listitem
					v-if="hasAllOption"
					tabindex="0"
					clickable
					hover-color-variation="lighten"
					:hover-color="hasAllDisabled ? 'neutral' : 'primary'"
					:class="{
						'farm-listitem--selected': innerValue === 'all',
						'farm-listitem--disabled': hasAllDisabled,
					}"
					@click="selectAll"
				>
					<farm-checkbox
						v-model="hasAllSelected"
						class="farm-select__checkbox"
						value="all"
						size="sm"
						:disabled="hasAllDisabled"
					/>
					<farm-caption bold tag="span">Todos</farm-caption>
				</farm-listitem>
				<farm-listitem
					v-for="(item, index) in items"
					tabindex="0"
					clickable
					hover-color-variation="lighten"
					:key="'contextmenu_item_' + index"
					:hover-color="item.disabled ? 'neutral' : 'primary'"
					:class="{
						'farm-listitem--selected': item[itemValue] === innerValue,
						'farm-listitem--disabled': item.disabled,
					}"
					@click="selectItem(item)"
				>
					<farm-checkbox
						v-if="isChecked(item)"
						v-model="checked"
						class="farm-select__checkbox"
						value="1"
						size="sm"
						:disabled="item.disabled"
					/>
					<farm-checkbox
						v-else-if="multiple"
						v-model="checked"
						class="farm-select__checkbox"
						value="2"
						size="sm"
						:disabled="item.disabled"
					/>
					<farm-caption bold tag="span">{{ item[itemText] }}</farm-caption>
				</farm-listitem>
				<farm-listitem v-if="!items || items.length === 0">
					{{ noDataText }}
				</farm-listitem>
			</farm-list>
			<template #activator="{}">
				<div
					class="farm-textfield--input farm-textfield--input--iconed"
					@keydown="onKeyDown"
				>
					<input
						v-bind="$attrs"
						v-model="selectedText"
						ref="inputField"
						readonly
						:id="$props.id"
						@click="clickInput"
						@blur="onBlur"
						@focusin="onFocus(true)"
						@focusout="onFocus(false)"
					/>
					<farm-icon
						color="gray"
						:class="{ 'farm-icon--rotate': isVisible }"
						@click="addFocusToInput"
					>
						menu-down
					</farm-icon>
				</div>
			</template>
		</farm-contextmenu>
		<farm-caption v-if="showErrorText" color="error" variation="regular">
			{{ errorBucket[0] }}
		</farm-caption>
		<farm-caption
			v-if="hint && !showErrorText"
			class="farm-select__hint-text"
			:class="{
				'farm-select__hint-text--show': persistentHint || isFocus,
			}"
			color="gray"
			variation="regular"
		>
			{{ hint }}
		</farm-caption>
	</div>
	<farm-textfield-v2 v-else v-model="selectedText" :disabled="disabled" :readonly="readonly" />
</template>

<script lang="ts">
import { computed, onBeforeMount, PropType, ref, toRefs, watch, defineComponent } from 'vue';
import validateFormStateBuilder from '../../composition/validateFormStateBuilder';
import validateFormFieldBuilder from '../../composition/validateFormFieldBuilder';
import validateFormMethodBuilder from '../../composition/validateFormMethodBuilder';
import deepEqual from '../../composition/deepEqual';
import randomId from '../../helpers/randomId';
import { buildData } from './composition';

export default defineComponent({
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
		 * Always show hint text
		 */
		persistentHint: {
			type: Boolean,
			default: true,
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
		/**
		 * Select id
		 */
		id: {
			type: String,
			default: '',
		},
		/**
		 * Set "All" as first option to select all other values<br />
		 */
		hasAllOption: {
			type: Boolean,
			default: false,
		},
		/**
		 * The updated bound model<br />
		 * _event_
		 */
		input: {
			type: Function,
			// eslint-disable-next-line
			default: (value: [String, Number, Array<any>]) => {},
		},
		/**
		 * Emitted when the select is changed by user interaction<br />
		 * _event_
		 */
		change: {
			type: Function,
			// eslint-disable-next-line
			default: (value: [String, Number, Array<any>]) => {},
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
		/**
		 * Emitted when the select is blurred<br />
		 * _event_
		 */
		blur: {
			type: Function,
			// eslint-disable-next-line
			default: (event: Event) => {},
		},
	},
	setup(props, { emit }) {
		const { rules, items, itemText, itemValue, disabled, multiple } = toRefs(props);

		const {
			multipleValues,
			innerValue,
			isTouched,
			isFocus,
			isBlured,
			isVisible,
			selectedText,
			checked,
			notChecked,
			inputField,
			keys,
		} = buildData(props);

		const clickedDisabledItem = ref(false);
		const listRef = ref();

		const contextmenu = ref(null);
		const isAllSelected = ref(false);

		const { errorBucket, valid, validatable } = validateFormStateBuilder();

		let fieldValidator = validateFormFieldBuilder(rules.value);
		let validate = validateFormMethodBuilder(errorBucket, valid, fieldValidator);

		const enabledItems = computed(() => items.value.filter(item => !item.disabled));
		const disabledItems = computed(() => items.value.filter(item => item.disabled));
		const hasError = computed(() => {
			return errorBucket.value.length > 0;
		});
		const hasAllSelected = computed({
			get() {
				if (
					!multiple.value ||
					!Array.isArray(items.value) ||
					!Array.isArray(innerValue.value)
				) {
					return false;
				}

				if (innerValue.value.length === enabledItems.value.length) {
					return 'all';
				}

				return false;
			},
			set() {
				emit('input', innerValue.value);
			},
		});
		const hasAllDisabled = computed(() => items.value.length == disabledItems.value.length);

		const customId = 'farm-select-' + (props.id || randomId(2));

		const showErrorText = computed(() => hasError.value && isTouched.value);

		watch(
			() => props.value,
			newValue => {
				innerValue.value = newValue;
				errorBucket.value = [];

				if (
					(multiple.value && newValue === null) ||
					(Array.isArray(newValue) && newValue.length === 0)
				) {
					multipleValues.value = [];
				}

				if (Array.isArray(newValue) && newValue.length > 0) {
					multipleValues.value = [...newValue];
				}
				validate(newValue);
				updateSelectedTextValue();
				emit('input', newValue);
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

		const onBlur = (event: Event) => {
			isBlured.value = true;
			validate(innerValue.value);
			emit('blur', event);
		};

		const onFocus = (focus: boolean) => {
			isFocus.value = focus;
		};

		const selectItem = item => {
			if (inputField.value) {
				inputField.value.focus();
			}

			if (item.disabled) {
				clickedDisabledItem.value = true;

				// "Schedule" execution to next loop, so the contextMenu won't close immediately if a disabled item is clicked
				setTimeout(() => {
					clickedDisabledItem.value = false;
				});
				return;
			}

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

			setTimeout(() => {
				emit('change', innerValue.value);
			}, 100);
		};
		const selectAll = () => {
			if (hasAllDisabled.value) {
				return;
			}

			if (multipleValues.value.length === enabledItems.value.length) {
				multipleValues.value = [];
			} else {
				multipleValues.value = enabledItems.value.map(item => item[itemValue.value]);
			}

			checked.value = '1';
			innerValue.value = [...multipleValues.value];
			validate(innerValue.value);
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

		function onKeyDown(e) {
			if (props.readonly) return;

			if (['Space'].includes(e.code)) {
				isVisible.value = true;
				e.currentTarget.click();
			}
			if (['Escape'].includes(e.code)) {
				isVisible.value = false;
			}

			if (keys[e.code]) {
				listRef.value.focus(keys[e.code]);
			}

			e.preventDefault();
		}

		function addFocusToInput() {
			inputField.value.focus();
		}

		return {
			items,
			innerValue,
			selectedText,
			errorBucket,
			valid,
			validatable,
			hasError,
			hasAllSelected,
			hasAllDisabled,
			isTouched,
			isBlured,
			isFocus,
			isAllSelected,
			isVisible,
			customId,
			showErrorText,
			contextmenu,
			clickedDisabledItem,
			validate,
			reset,
			selectItem,
			selectAll,
			onBlur,
			onFocus,
			clickInput,
			updateSelectedTextValue,
			makePristine,
			checked,
			notChecked,
			isChecked,
			multipleValues,
			addLabelToMultiple,
			inputField,
			onKeyDown,
			addFocusToInput,
			listRef,
		};
	},
});
</script>
<style lang="scss" scoped>
@import 'Select';
</style>
