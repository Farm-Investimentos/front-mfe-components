<template>
	<v-menu
		ref="menuField"
		v-model="menuField"
		:close-on-content-click="false"
		:nudge-right="40"
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
				:rules="required ? [requiredRule] : []"
			>
			</v-text-field>
		</template>
		<v-date-picker
			v-if="menuField"
			v-model="dateField"
			no-title
			scrollable
			:max="max"
			:min="min"
			color="secondary"
			locale="pt-br"
		>
			<v-btn outlined color="primary" @click="menuField = false" title="Fechar">
				Fechar
			</v-btn>
			<v-btn outlined color="secondary" @click="clear"> Limpar </v-btn>
			<v-btn
				color="secondary"
				:disabled="!dateField.length"
				@click="save()"
				title="Confirmar"
			>
				Confirmar
			</v-btn>
		</v-date-picker>
	</v-menu>
</template>
<script>
import Vue from 'vue';
import { VTextField } from 'vuetify/lib/components/VTextField';
import { VMenu } from 'vuetify/lib/components/VMenu';
import { VBtn } from 'vuetify/lib/components/VBtn';
import { VDatePicker } from 'vuetify/lib/components/VDatePicker';
import { defaultFormat as dateDefaultFormatter } from '../../helpers/date';
/**
 * Componente de input com datepicker para data
 */
export default Vue.extend({
	name: 'farm-input-datepicker',
	components: {
		VTextField,
		VMenu,
		VBtn,
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
			requiredRule: value => {
				return !!value || value != '' || 'Campo obrigatório';
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
		validation(date){
			const pattern = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/gm;
			return pattern.test(date);	
		},
		keyUpInput(event) {
			let newValue = event.target.value;
			if(this.validation(newValue) && newValue.length === 10) {
				const [day, month, year] = newValue.split('/');
				this.dateField = `${year}-${month}-${day}`;
				this.save();
			}
		}
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
