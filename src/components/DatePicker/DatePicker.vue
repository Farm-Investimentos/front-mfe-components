<template>
	<farm-contextmenu stay-open v-model="menuField" ref="contextmenu" maxHeight="auto" popup-width="320"
		:bottom="position === 'bottom'" :top="position === 'top'">

		<VueDatePicker inline auto-apply model-type="yyyy-MM-dd" v-model="dateField" :min-date="minDate" :max-date="maxDate"
			:allowed-dates="allowedDaysList" />

		<farm-btn plain title="Limpar" color="primary" :disabled="isDisabled" @click="clear">
			Limpar
		</farm-btn>
		<farm-btn outlined class="btn-cancel" title="Cancelar" @click="closeDatepicker">
			Cancelar
		</farm-btn>

		<farm-btn class="ml-2" title="Confirmar" :disabled="isDateFieldDisabled" @click="save()">
			Confirmar <farm-icon>check</farm-icon>
		</farm-btn>
		<template v-slot:activator="{ }">
			<farm-textfield-v2 icon="calendar" v-model="fieldRange" autocomplete="off" ref="inputCalendar"
				:readonly="readonly" :mask="`${readonly ? '' : '##/##/####'}`" :id="inputId"
				:rules="[checkDateValid, checkMax, checkMin, checkRequire, checkIsInAllowedDates]" @keyup="keyUpInput" />
		</template>
	</farm-contextmenu>
</template>
<script lang="ts">
const revertDate = (oldDate: string): string => {
	if (!oldDate) {
		return '';
	}
	const arr = oldDate.split('-');
	// Concatenate each part in reverse order
	const newDate = arr[2] + '/' + arr[1] + '/' + arr[0];

	return newDate;
}
import { PropType } from 'vue';
import {
	defaultFormat as dateDefaultFormatter,
	convertDate,
	checkDateValid,
} from '../../helpers/date';
import { formatDatePickerHeader } from '../../helpers';
/**
 * Componente de input com datepicker para data
 */

export default {
	name: 'farm-input-datepicker',
	props: {
		/**
		 * Input's id
		 */
		inputId: {
			type: String,
			required: true,
		},
		/**
		 * v-model bind
		 */
		modelValue: {
			type: String,
			default: '',
		},
		/**
		 * Max date (ISO format)
		 */
		max: {
			type: String,
			default: null,
		},
		/**
		 * Min date (ISO format)
		 */
		min: {
			type: String,
			default: null,
		},
		/**
		 * Min date (ISO format)
		 */
		position: {
			type: String as PropType<'top' | 'bottom' | 'center'>,
			default: 'bottom',
		},
		/**
		 * Allowed days to be selected and validated
		 */
		allowedDays: {
			type: Array,
			default: () => null,
		},
		allowedDatesValidator: {
			type: Function,
			default: () => true
		},
		/**
		 * Current month/year to show when opened
		 */
		pickerDate: {
			type: String,
			default: '',
		},
		/**
		 * Required field (inside form)
		 */
		required: {
			type: Boolean,
			default: false,
		},
		readonly: {
			type: Boolean,
			default: false,
		},
	},
	data() {

		return {
			internalPickerDate: this.pickerDate,
			menuField: false,
			dateField: this.modelValue,
			fieldRange: revertDate(this.modelValue),
			checkDateValid: value => {
				if (value.length > 0) {
					const isValid = checkDateValid(value);
					return isValid ? true : 'Data inválida';
				}
				return true;
			},
			checkRequire: value => {
				return this.required ? !!value || value != '' || 'Campo obrigatório' : true;
			},
			checkMax: value => {
				if (!this.required && value.length === 0) {
					return true;
				}
				return this.max && new Date(convertDate(value)) > new Date(this.max)
					? 'A data está fora do período permitido'
					: true;
			},
			checkMin: value => {
				if (!this.required && value.length === 0) {
					return true;
				}
				if (this.min) {
					const dateSelected = new Date(convertDate(value));
					const dateMin = new Date(convertDate(this.min));
					if (dateSelected.getTime() >= dateMin.getTime()) {
						return true;
					}
					return 'A data está fora do período permitido';
				}
				return true;
			},
			checkIsInAllowedDates: value => {
				const dateSelected = convertDate(value);

				if (!this.required && value.length === 0) {
					return true;
				}

				return this.allowedDatesValidator(dateSelected) || 'Data inválida';
			},
		};
	},
	watch: {
		modelValue(newValue) {
			this.dateField = newValue;
		},
		fieldRange(newValue) {
			if (!newValue) {
				this.dateField = '';
				this.save();
			}
		},
		menuField(newValue) {
			if (newValue) {
				this.dateField = this.modelValue;
			}
		},
	},
	methods: {
		save() {
			// this.inputVal = this.formatDateRange(this.dateField);
			this.inputVal = this.dateField;
			this.menuField = false;
			this.fieldRange = revertDate(this.dateField);
			this.closeDatepicker();
		},
		clear() {
			this.dateField = '';
			this.save();
			this.$refs.inputCalendar.reset();
		},
		validation(date) {
			const pattern =
				/^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/gm;
			return pattern.test(date);
		},
		keyUpInput(event) {
			let newValue = event.target.value;
			if (this.validation(newValue) && newValue.length === 10) {
				const [day, month, year] = newValue.split('/');
				this.dateField = `${year}-${month}-${day}`;
				this.save();
			}
		},
		getUniversalDate(d) {
			const onlyDMY = d.split(' ')[0];
			const arr = onlyDMY.split('/');
			return new Date(arr[2], arr[1] - 1, arr[0]);
		},
		openDatepicker(event: MouseEvent) {
			this.menuField = true;
			event.stopPropagation();
		},
		closeDatepicker() {
			this.menuField = false;
			this.$refs.contextmenu.inputValue = false;
		},
		formatDatePickerHeader,
	},
	computed: {
		inputVal: {
			get() {
				return this.modelValue;
			},
			set(val) {
				this.$emit('update:modelValue', val);
			},
		},
		isDisabled(): boolean {
			if (this.modelValue) {
				return this.modelValue.length === 0;
			}
			return true;
		},
		isDateFieldDisabled() {
			if (this.dateField) {
				return this.dateField.length === 0;
			}
			return true;
		},
		minDate() {
			if (this.min) {
				return new Date(this.min);
			}
		},
		maxDate() {
			if (this.max) {
				return new Date(this.max);
			}
		},
		allowedDaysList() {
			if (this.allowedDays) {
				return this.allowedDays.map(day => new Date().setDate(day))
			}
		}
	},
};
</script>
<style lang="scss" scoped>
@import './DatePicker.scss';
</style>
