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
				v-model="fieldRange"
				append-icon="mdi-calendar"
				readonly
				v-on="on"
				outlined
				dense
				:id="inputId"
				:rules="required ? [requiredRule] : []"
			></v-text-field>
		</template>
		<v-date-picker
			v-if="menuField"
			v-model="dateField"
			no-title
			scrollable
			range
			:max="max"
			:min="min"
			color="secondary"
			locale="pt-br"
		>
			<v-btn outlined color="primary" @click="menuField = false" tutle="Fechar">
				Fechar
			</v-btn>
			<v-btn outlined color="secondary" @click="clear()" title="Limpar"> Limpar </v-btn>
			<v-btn color="secondary" :disabled="canConfirm" @click="save()" title="Confirmar">
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
 * Componente de input com datepicker para range de data
 */
export default Vue.extend({
	name: 'farm-input-rangedatepicker',
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
			type: Array,
			default: () => {
				return [];
			},
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
			const dateStart = date[0];
			const dateEnd = date[1];
			return dateDefaultFormatter(dateStart) + ' a ' + dateDefaultFormatter(dateEnd);
		},
		save() {
			this.$refs.menuField.save(this.formatDateRange(this.dateField));
			this.inputVal = this.dateField;
			this.menuField = false;
		},
		clear() {
			this.dateField = [];
			this.save();
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
		canConfirm() {
			if (!this.dateField || this.dateField.length == 1) {
				return true;
			}
			return false;
		},
	},
});
</script>
<style lang="scss" scoped>
.theme--light.v-input.v-input--dense.v-text-field.v-text-field--outlined.error--text:after {
	content: '' !important;
}
</style>
