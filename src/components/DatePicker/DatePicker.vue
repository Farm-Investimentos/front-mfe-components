<template>
	<farm-contextmenu stay-open v-model="menuField">
		<v-date-picker
			v-if="menuField"
			v-model="dateField"
			no-title
			scrollable
			locale="pt-br"
			class="datepicker"
			:max="max"
			:min="min"
			@click="testAlert"
		>
			<farm-btn outlined color="secondary" @click="closeDatepicker" title="Fechar">
				Fechar
			</farm-btn>
			<farm-btn outlined class="btn-clean" @click="clear"> Limpar </farm-btn>
			<farm-btn class="ml-2" title="Confirmar" :disabled="!dateField.length" @click="save()">
				Confirmar
			</farm-btn>
		</v-date-picker>
		<template v-slot:activator="{ on, attrs }">
			<farm-textfield-v2
				icon="calendar"
				v-model="fieldRange"
				autocomplete="off"
				:readonly="readonly"
				:mask="`${readonly ? '' : '##/##/####'}`"
				:id="inputId"
				:rules="[checkMax, checkMin, checkRequire]"
				@keyup="keyUpInput"
				@click="openDatepicker"
				@onClickIcon="openDatepicker"
			/>
		</template>
	</farm-contextmenu>
	<!--
	<v-menu
		ref="menuField"
		v-model="menuField"
		:close-on-content-click="false"
		:return-value.sync="fieldRange"
		transition="scale-transition"
		offset-y
		min-width="290px"
	>
		<template v-slot:activator="{}">
			<farm-textfield-v2
				icon="calendar"
				v-model="fieldRange"
				autocomplete="off"
				:readonly="readonly"
				:mask="`${readonly ? '' : '##/##/####'}`"
				:id="inputId"
				:rules="[checkMax, checkMin, checkRequire]"
				@keyup="keyUpInput"
				@click="openDatepicker"
				@onClickIcon="openDatepicker"
			/>
		</template>
		<v-date-picker
			v-if="menuField"
			v-model="dateField"
			no-title
			scrollable
			color="secondary"
			locale="pt-br"
			:max="max"
			:min="min"
		>
			<farm-btn outlined color="secondary" @click="closeDatepicker" title="Fechar">
				Fechar
			</farm-btn>
			<farm-btn outlined class="ml-2" @click="clear"> Limpar </farm-btn>
			<farm-btn class="ml-2" title="Confirmar" :disabled="!dateField.length" @click="save()">
				Confirmar
			</farm-btn>
		</v-date-picker>
	</v-menu>
--></template>
<script lang="ts">
import Vue from 'vue';
import { VDatePicker } from 'vuetify/lib/components/VDatePicker';
import { defaultFormat as dateDefaultFormatter, convertDate } from '../../helpers/date';
/**
 * Componente de input com datepicker para data
 */
export default Vue.extend({
	name: 'farm-input-datepicker',
	components: {
		VDatePicker,
	},
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
		value: {
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
		const s = this.formatDateRange(this.value);
		return {
			menuField: false,
			dateField: this.value,
			fieldRange: s,
			checkRequire: value => {
				return this.required ? !!value || value != '' || 'Campo obrigatório' : true;
			},
			checkMax: value => {
				return this.max && new Date(convertDate(value)) > new Date(this.max)
					? 'A data está fora do período permitido'
					: true;
			},
			checkMin: value => {
				const selectedDateUTCString = new Date(convertDate(value))
					.toUTCString()
					.slice(0, -4);

				const selectedDate = new Date(selectedDateUTCString);
				selectedDate.setDate(selectedDate.getDate() + 1);

				const locatedSelectedDate = new Date(selectedDate.toUTCString()).toLocaleString(
					'pt-BR',
					{
						timeZone: 'America/Sao_Paulo',
					}
				);
				const locatedMinDate = new Date(this.min).toLocaleString('pt-BR', {
					timeZone: 'America/Sao_Paulo',
				});

				return this.min &&
					this.getUniversalDate(locatedSelectedDate) <
						this.getUniversalDate(locatedMinDate)
					? 'A data está fora do período permitido'
					: true;
			},
		};
	},
	watch: {
		value(newValue) {
			this.dateField = newValue;
			this.fieldRange = this.formatDateRange(newValue);
		},
		fieldRange(newValue) {
			if (!newValue) {
				this.dateField = '';
				this.save();
			}
		},
	},
	methods: {
		formatDateRange(date) {
			if (!date || date.length === 0) return '';
			return dateDefaultFormatter(date);
		},
		save() {
			//this.$refs.menuField.save(this.formatDateRange(this.dateField));
			this.formatDateRange(this.dateField);
			this.inputVal = this.dateField;
			this.menuField = false;
		},
		clear() {
			this.dateField = '';
			this.save();
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
		openDatepicker() {
			this.menuField = true;
		},
		closeDatepicker() {
			this.menuField = false;
		},
		testAlert(event) {
			alert(event);
		},
	},
	computed: {
		inputVal: {
			get() {
				return this.value;
			},
			set(val) {
				this.$emit('input', val);
			},
		},
	},
});
</script>
<style lang="scss">
.datepicker .v-btn--active {
	background: var(--farm-primary-base);
}
.btn-clean {
	margin: 0 8px;
}
</style>
