<template>
	<div ref="outsideClickHandler" @click="handleOutsideClick">
		<div
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
			v-if="!readonly && !disabled"
			:id="customId"
		>
			<farm-contextmenu bottom v-model="isVisible" :stay-open="multiple" ref="contextmenu">
				<farm-list v-if="!readonly" ref="listRef" @keyup="onKeyUp">
					<farm-listitem
						tabindex="0"
						v-for="(item, index) in showFilteredItems ? filteredItems : computedItems"
						clickable
						hoverColorVariation="lighten"
						hover-color="primary"
						:key="'contextmenu_item_' + index"
						:class="{ 'farm-listitem--selected': item[itemValue] === innerValue }"
						@click='selectItem(item)'
					>
						<farm-checkbox
							class="farm-select__checkbox"
							v-model="checked"
							value="1"
							size="sm"
							v-if="isChecked(item)"
						/>
						<farm-checkbox
							class="farm-select__checkbox"
							v-model="checked"
							value="2"
							size="sm"
							v-else-if="multiple"
						/>
						<farm-caption bold tag="span">{{ item[itemText] }}</farm-caption>
					</farm-listitem>
					<farm-listitem v-if=" (!items || items.length === 0) || (showFilteredItems && filteredItems.length === 0)">
						{{ noDataText }}
					</farm-listitem>
				</farm-list>
				<template v-slot:activator="{}">
					<div class="farm-textfield--input farm-textfield--input--iconed">
						<input
							v-bind="$attrs"
							v-model="selectedText"
							ref="inputField"
							:id="$props.id"
							@focusin="onFocus(true)"
							@focusout="onFocus(false)"
							@input="onInput"
							@blur="onBlur"
							@keyup="onKeyUp"
							autocomplete="off"
						/>
						<farm-icon color="gray" :class="{ 'farm-icon--rotate': isVisible }" @click="addFocusToInput">
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
				:class="{ 'farm-select__hint-text--show': persistentHint || isFocus }"
				color="gray"
				variation="regular"
			>
				{{ hint }}
			</farm-caption>
		</div>
		<farm-textfield-v2 v-else v-model="selectedText" :disabled="disabled" :readonly="readonly" />
	</div>
</template>

<script lang="ts">
import { computed, onBeforeMount, onMounted, PropType, ref, toRefs, watch, defineComponent } from 'vue';
import validateFormStateBuilder from '../../composition/validateFormStateBuilder';
import validateFormFieldBuilder from '../../composition/validateFormFieldBuilder';
import validateFormMethodBuilder from '../../composition/validateFormMethodBuilder';
import deepEqual from '../../composition/deepEqual';
import randomId from '../../helpers/randomId';
import { useSelectAutoComplete } from './composables';

export default defineComponent({
	name: 'farm-select-auto-complete',
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
			filteredItems,
			inputField,
		} = useSelectAutoComplete(props);

		const listRef = ref();

		const contextmenu = ref(null);

		const { errorBucket, valid, validatable } = validateFormStateBuilder();

		let fieldValidator = validateFormFieldBuilder(rules.value);
		let validate = validateFormMethodBuilder(errorBucket, valid, fieldValidator);

		const computedItems = computed(() => {
			let itemsList = items.value;
			if (multiple.value) {
				itemsList = [{ [itemText.value as string]: 'Todos', [itemValue.value as string]: 'all' }, ...itemsList];
			}
			return itemsList;
		});

		const hasError = computed(() => {
			return errorBucket.value.length > 0;
		});

		const customId = 'farm-select-' + (props.id || randomId(2));

		const showErrorText = computed(() => hasError.value && isTouched.value);

		const searchText = ref('');

		const filterOptions = () => {
			searchText.value = selectedText.value.toLowerCase();
			if (!searchText || searchText.value.includes('+')) {
				filteredItems.value = items.value;
				return;
			}

			filteredItems.value = items.value.filter(
				(item) => item[itemText.value].toLowerCase().includes(searchText.value)
			);

			if (filteredItems.value.length === 0 && searchText.value.trim() !== '') {
				filteredItems.value = [];
			}
		};

		const showFilteredItems = computed(() => {
			return isVisible.value && searchText.value.trim() !== '';
		});

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


		const handleOutsideClick = (event) => {
			clearSearchAndReturnSelection(event);

		};

		onBeforeMount(() => {
			validate(innerValue.value);
			updateSelectedTextValue();
			document.removeEventListener('click', handleOutsideClick);
		});

		onMounted(() => {
			document.addEventListener('click', handleOutsideClick);
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

			setTimeout(() => {
				if (multiple.value){
					searchText.value = '';
					addLabelToMultiple();
					return;
				}
			}, 100);

		};

		const clearSearchAndReturnSelection = (event) => {
			if (!event.srcElement.className.includes('farm-listitem')) {
				if (innerValue.value !== null) {
					if (!selectedText.value) {
						innerValue.value = null;
					}
				}
				searchText.value = '';
				updateSelectedTextValue();
			}
		};

		const onFocus = (focus: boolean) => {

			isFocus.value = focus;
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

			setTimeout(() => {
				emit('change', innerValue.value);
				searchText.value = '';
			}, 100);
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

		const onInput = () => {
			isVisible.value = true;
		};

		function onKeyUp(event) {
			if (props.readonly) return;
			filterOptions();
			event.preventDefault();
		}

		function addFocusToInput() {
			inputField.value.focus();
		}

		return {
			items,
			computedItems,
			innerValue,
			selectedText,
			errorBucket,
			valid,
			validatable,
			hasError,
			isTouched,
			isBlured,
			isFocus,
			isVisible,
			customId,
			showErrorText,
			contextmenu,
			validate,
			reset,
			selectItem,
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
			onKeyUp,
			addFocusToInput,
			filterOptions,
			onInput,
			listRef,
			filteredItems,
			showFilteredItems,
			searchText,
			handleOutsideClick
		};
	},
});
</script>
<style lang="scss" scoped>
@import 'SelectAutoComplete';
</style>
