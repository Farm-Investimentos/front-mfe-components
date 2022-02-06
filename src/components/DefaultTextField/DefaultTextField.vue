<template>
	<v-col cols="12" sm="12" :md="item.md ? item.md : 2" class="v-col-fieldset-default pl-0">
		<label :for="inputId">
			{{ item.label }}
			<span class="required" v-if="required && !disabled">*</span>
		</label>
		<v-text-field
			color="secondary"
			v-model="inputVal"
			outlined
			dense
			v-mask="`${mask ? mask : ''}`"
			:id="inputId"
			:rules="inputRules"
			:disabled="disabled"
			:readonly="readonly"
		></v-text-field>
	</v-col>
</template>
<script>
import { VTextField } from 'vuetify/lib/components/VTextField';
import { VCol } from 'vuetify/lib/components/VGrid';
export default {
	props: {
		item: {
			type: Object,
			required: true,
		},
		value: {
			required: true,
		},
		rules: {
			type: Array,
		},
		disabled: {
			type: Boolean,
			default: false,
		},
		forKey: {
			type: String,
			required: false,
			default: 'form',
		},
		required: {
			type: Boolean,
			default: false,
		},
		mask: {
			type: String,
			default: null,
		},
		readonly: {
			type: Boolean,
			default: false,
		},
	},
	components: {
		VCol,
		VTextField,
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
		inputRules() {
			if (this.disabled) {
				return [];
			}
			if (this.rules && this.rules.length) {
				return this.rules;
			}
			return [];
		},
		inputId() {
			return `${this.forKey}-${this.item.key}`;
		},
	},
};
</script>
