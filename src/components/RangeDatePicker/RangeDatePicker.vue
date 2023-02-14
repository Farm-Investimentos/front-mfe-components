<template>
	<farm-contextmenu
		stay-open
		v-model="menuField"
		ref="contextmenu"
		maxHeight="auto"
		bottom
		popup-width="320"
	>
		<v-date-picker
			v-if="menuField"
			class="datepicker"
			v-model="dateField"
			no-title
			scrollable
			range
			show-adjacent-months
			color="secondary"
			locale="pt-br"
			:max="max"
			:min="min"
		>
			<farm-btn plain title="Limpar" color="gray" @click="clear"> Limpar </farm-btn>
			<farm-btn outlined class="btn-cancel" title="Cancelar" @click="closeDatepicker">
				Cancelar
			</farm-btn>

			<farm-btn class="ml-2" title="Confirmar" :disabled="!dateField.length" @click="save()">
				Confirmar <farm-icon>check</farm-icon>
			</farm-btn>
		</v-date-picker>
		<template v-slot:activator="{}">
			<farm-textfield-v2
				v-model="fieldRange"
				icon="calendar"
				readonly
				:id="inputId"
				:rules="required ? [requiredRule] : []"
				@click="openDatepicker"
				@onClickIcon="openDatepicker"
			/>
		</template>
	</farm-contextmenu>
</template>
<script>
import Vue from 'vue';
import { VDatePicker } from 'vuetify/lib/components/VDatePicker';
import { defaultFormat as dateDefaultFormatter } from '../../helpers/date';
/**
 * Componente de input com datepicker para range de data
 */
export default Vue.extend({
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
	},
	data() {
		const s = this.formatDateRange(this.value);
		return {
			menuField: false,
			dateField: this.value || [],
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
			this.formatDateRange(this.dateField);
			this.inputVal = this.dateField;
			this.menuField = false;
			this.closeDatepicker();
		},
		clear() {
			this.dateField = [];
			this.save();
		},
		openDatepicker() {
			this.menuField = true;
		},
		closeDatepicker() {
			this.menuField = false;
			this.$refs.contextmenu.inputValue = false;
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
			return !this.dateField || this.dateField.length == 1;
		},
	},
});
</script>
<style lang="scss" scoped>
@import './RangeDatePicker.scss';
</style>
