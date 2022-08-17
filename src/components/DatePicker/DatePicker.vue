<template>
	<v-menu
		ref="menuField"
		v-model="menuField"
		:close-on-content-click="false"
		:return-value.sync="fieldRange"
		transition="scale-transition"
		offset-y
		min-width="290px"
	>
		<template v-slot:activator="{ on }">
			<v-text-field
				color="secondary"
				append-icon="mdi-calendar"
				v-mask="`${readonly ? '' : '##/##/####'}`"
				@keyup="keyUpInput"
				:readonly="readonly"
				autocomplete="off"
				outlined
				dense
				v-on="on"
				v-model="fieldRange"
				:id="inputId"
				:rules="[checkMax, checkMin, checkRequire]"
			>
			</v-text-field>
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
			<farm-btn outlined color="primary" @click="menuField = false" title="Fechar">
				Fechar
			</farm-btn>
			<farm-btn outlined color="secondary" class="ml-2" @click="clear"> Limpar </farm-btn>
			<farm-btn
				color="secondary"
				class="ml-2"
				title="Confirmar"
				:disabled="!dateField.length"
				@click="save()"
			>
				Confirmar
			</farm-btn>
		</v-date-picker>
	</v-menu>
</template>
<script>
import Vue from 'vue';
import { VTextField } from 'vuetify/lib/components/VTextField';
import { VMenu } from 'vuetify/lib/components/VMenu';
import { VDatePicker } from 'vuetify/lib/components/VDatePicker';
import DefaultButton from '../Buttons/DefaultButton';
import { defaultFormat as dateDefaultFormatter, convertDate } from '../../helpers/date';
/**
 * Componente de input com datepicker para data
 */
export default Vue.extend({
	name: 'farm-input-datepicker',
	components: {
		VTextField,
		VMenu,
		VDatePicker,
		'farm-btn': DefaultButton,
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
			type: String,
			default: '',
		},
		max: {
			type: String,
			default: null,
		},
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

				return this.min && locatedSelectedDate < locatedMinDate
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
	},
	methods: {
		formatDateRange(date) {
			if (!date || date.length === 0) return '';
			return dateDefaultFormatter(date);
		},
		save() {
			this.$refs.menuField.save(this.formatDateRange(this.dateField));
			this.inputVal = this.dateField;
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
<style lang="scss" scoped>
.theme--light.v-input.v-input--dense.v-text-field.v-text-field--outlined.error--text:after {
	content: '' !important;
}
</style>
