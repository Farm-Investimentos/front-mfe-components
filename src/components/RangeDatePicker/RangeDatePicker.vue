	<template>
	<farm-contextmenu
		stay-open
		v-model="menuField"
		ref="contextmenu"
		maxHeight="auto"
		:bottom="position === 'bottom'"
		:top="position === 'top'"
		:fixedCentered="position === 'fixed-centered'"
		popup-width="320"
	>
		<v-date-picker
			v-if="menuField"
			class="rangedatepicker datepicker"
			v-model="dateField"
			no-title
			scrollable
			range
			show-adjacent-months
			:header-date-format="formatDatePickerHeader"
			color="secondary"
			locale="pt-br"
			:max="max"
			:min="min"
			:class="{
				'invert-date': isInvertedDate,
			}"
		>
			<farm-btn plain title="Limpar" color="primary" :disabled="isDisabled" @click="clear">
				Limpar
			</farm-btn>
			<farm-btn outlined class="btn-cancel" title="Cancelar" @click="closeDatepicker">
				Cancelar
			</farm-btn>

			<farm-btn
				class="ml-2"
				title="Confirmar"
				:disabled="isDateFieldDisabled"
				@click="save()"
			>
				Confirmar <farm-icon>check</farm-icon>
			</farm-btn>
		</v-date-picker>
		<template v-slot:activator>
			<farm-textfield-v2
				v-model="fieldRange"
				icon="calendar"
				ref="inputCalendar"
				:readonly="readonly"
				:id="inputId"
				:mask="`${readonly ? [''] : ['##/##/####' + ' a ' + '##/##/####']}`"
				:rules="[checkDateValid, checkRequire, ...(validateInput ? [checkMinMax] : [])]"
				:disabled="disabled"
				@keyup="keyUpInput"
			/>
		</template>
	</farm-contextmenu>
</template>
<script>
import { defineComponent } from 'vue';
import { VDatePicker } from 'vuetify/lib/components/VDatePicker';
import {
	defaultFormat as dateDefaultFormatter,
	convertDate,
	checkDateValid,
} from '../../helpers/date';
import { formatDatePickerHeader } from '../../helpers';

/**
 * Componente de input com datepicker para range de data
 */
export default defineComponent({
	name: 'farm-input-rangedatepicker',
	components: {
		VDatePicker,
	},
	props: {
		/**
		 * String usada no como id do input e for do label
		 */
		inputId: {
			type: String,
			required: true,
		},
		/**
		 * Variável usada como v-model
		 */
		value: {
			type: Array,
			default: () => [],
		},
		/**
		 * Variável usada para definir a data máxima (yyyy-mm-dd)
		 */
		max: {
			type: String,
			default: null,
		},
		/**
		 * Variável usada para definir a data minima (yyyy-mm-dd)
		 */
		min: {
			type: String,
			default: null,
		},
		/**
		 * Required field (inside form)
		 */
		required: {
			type: Boolean,
			default: false,
		},
		/**
		 * Readonly field
		 */
		readonly: {
			type: Boolean,
			default: false,
		},
		/**
		 * Disabled field
		 */
		disabled: {
			type: Boolean,
			default: false,
		},
		/**
		 * Habilita a validação de min/max no input
		 */
		validateInput: {
			type: Boolean,
			default: false,
		},
		/**
		 * Mensagem de erro customizada para data fora do período permitido
		 */
		outOfRangeMessage: {
			type: String,
			default: 'A data selecionada deve ser entre {min} e {max}',
		},
		/**
		 * Posição do datepicker (top, bottom, fixed-centered)
		 */
		position: {
			type: String,
			default: 'bottom',
			validator: value => ['top', 'bottom', 'fixed-centered'].includes(value),
		},
	},
	data() {
		const s = this.formatDateRange(this.value);
		return {
			menuField: false,
			dateField: this.value || [],
			fieldRange: s,
			checkRequire: value => {
				return this.required ? !!value || value != '' || 'Campo obrigatório' : true;
			},
			checkDateValid: value => {
				if (value.length) {
					const checkPartOne = checkDateValid(value.slice(0, 10));
					const checkPartTwo = checkDateValid(value.slice(13));
					return checkPartOne && checkPartTwo ? true : 'Data inválida';
				}
				return true;
			},
			checkMinMax: value => {
				if (!this.validateInput || !value || value.length === 0) return true;
				if (!this.min || !this.max) {
					if (process.env.NODE_ENV === 'development') {
						console.warn('[RangeDatePicker] Para usar validateInput é necessário definir as props min e max');
					}
					return true;
				}

				const [startDateStr, endDateStr] = value.split(' a ');
				
				const startDate = new Date(convertDate(startDateStr));
				const endDate = new Date(convertDate(endDateStr));
				const minDate = new Date(this.min);
				const maxDate = new Date(this.max);

				const isValid = startDate.getTime() >= minDate.getTime() && endDate.getTime() <= maxDate.getTime();

				if (!isValid) {
					return this.outOfRangeMessage
						.replace('{min}', dateDefaultFormatter(this.min))
						.replace('{max}', dateDefaultFormatter(this.max));
				}

				return true;
			},
		};
	},
	watch: {
		value(newValue) {
			if (newValue?.length === 1) {
				newValue.push(newValue[0]);
			}
			this.dateField = newValue;
			this.fieldRange = this.formatDateRange(newValue);
		},
		fieldRange(newValue) {
			if (!newValue) {
				this.dateField = [];
				this.save();
			}
		},
	},
	methods: {
		formatDateRange(date) {
			if (!date || date.length === 0) return '';
			const dateStart = date[0];
			const dateEnd = date[1];
			return dateDefaultFormatter(dateStart) + ' a ' + dateDefaultFormatter(dateEnd);
		},
		save() {
			if (this.readonly) {
				this.menuField = false;
				this.closeDatepicker();
				return;
			}
			this.formatDateRange(this.dateField);
			this.inputVal = this.dateField;
			this.menuField = false;
			this.closeDatepicker();
		},
		clear() {
			this.dateField = [];
			this.save();
			this.$refs.inputCalendar.reset();
		},
		openDatepicker() {
			this.menuField = true;
		},
		closeDatepicker() {
			this.menuField = false;
			this.$refs.contextmenu.inputValue = false;
		},
		sortDates(dates) {
			if (dates?.length !== 2) {
				return dates;
			}
			const firstDate = new Date(dates[0]);
			const secondDate = new Date(dates[1]);

			if (firstDate.getTime() < secondDate.getTime()) {
				return [dates[0], dates[1]];
			}

			return [dates[1], dates[0]];
		},
		validation(date) {
			const pattern =
				/^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/gm;
			return pattern.test(date);
		},
		keyUpInput(event) {
			let newValue = event.target.value;
			if (newValue.length === 23) {
				const partOne = newValue.slice(0, 10);
				const partTwo = newValue.slice(13);
				if (this.validation(partOne) && this.validation(partTwo)) {
					const partOneDate = convertDate(partOne);
					const partTwoDate = convertDate(partTwo);
					this.dateField = [partOneDate, partTwoDate];
					this.save();
				}
			}
		},
		formatDatePickerHeader,
	},
	computed: {
		inputVal: {
			get() {
				return this.value;
			},
			set(val) {
				val = this.sortDates(val);
				this.$emit('input', val);
			},
		},
		canConfirm() {
			return !this.dateField || this.dateField.length == 1;
		},
		isDisabled() {
			if (this.value) {
				return this.value.length === 0 ? true : false;
			}
			return true;
		},
		isDateFieldDisabled() {
			if (this.dateField) {
				return this.dateField.length === 0 ? true : false;
			}
			return true;
		},
		isInvertedDate() {
			if (Array.isArray(this.dateField) && this.dateField.length === 2) {
				const firstDate = new Date(this.dateField[0]);
				const secondDate = new Date(this.dateField[1]);
				return firstDate.getTime() > secondDate.getTime();
			}
			return false;
		},
	},
});
</script>
<style lang="scss" scoped>
@import '../DatePicker/DatePicker.scss';
</style>
