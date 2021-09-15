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
			></v-text-field>
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
			<v-btn outlined color="primary" @click="menuField = false" title="Cancelar">
				Cancelar
			</v-btn>
			<v-btn color="secondary" @click="save()" title="Salvar">
				Salvar
			</v-btn>
		</v-date-picker>
	</v-menu>
</template>
<script>
import { VTextField } from 'vuetify/lib/components/VTextField';
import { VMenu } from 'vuetify/lib/components/VMenu';
import { VBtn } from 'vuetify/lib/components/VBtn';
import { VDatePicker } from 'vuetify/lib/components/VDatePicker';
import { defaultFormat as dateDefaultFormatter } from '../../helpers/date';
/**
 * Componente de input com datepicker para data
 */
export default {
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
	},
	data() {
		const s = this.formatDateRange(this.value);
		return {
			menuField: false,
			dateField: this.value,
			fieldRange: s,
		};
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
			this.dateField = null;
			this.fieldRange = null;
			this.inputVal = null;
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
};
</script>
