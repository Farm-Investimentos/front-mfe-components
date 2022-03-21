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
			:placeholder="placeholder"
			:id="inputId"
			:rules="inputRules"
			:disabled="disabled"
			:readonly="readonly"
		></v-text-field>
	</v-col>
</template>
<script>
import Vue from 'vue';
import { VTextField } from 'vuetify/lib/components/VTextField';
import { VCol } from 'vuetify/lib/components/VGrid';

export default Vue.extend({
	name: 'farm-textfield-labelled',
	props: {
		item: {
			type: Object,
			required: true,
		},
		/**
		 * v-model
		 */
		value: {
			required: true,
		},
		/**
		 * Array of rules
		 */
		rules: {
			type: Array,
		},
		/**
		 * Input is disabled or not
		 */
		disabled: {
			type: Boolean,
			default: false,
		},
		forKey: {
			type: String,
			required: false,
			default: 'form',
		},
		/**
		 * Input is required or not
		 */
		required: {
			type: Boolean,
			default: false,
		},
		/**
		 * Mask (v-mask)
		 */
		mask: {
			type: String,
			default: null,
		},
		/**
		 * Input is readonly or not
		 */
		readonly: {
			type: Boolean,
			default: false,
		},
		/**
		 * Placeholder is helper text for input
		 */
		placeholder: {
			type: String,
			default: null,
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
});
</script>
