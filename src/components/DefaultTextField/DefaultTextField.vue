<template>
	<v-col cols="12" sm="12" :md="item.md ? item.md : 2" class="pl-0">
		<farm-label :for="inputId" :required="required && !disabled">
			{{ item.label }}
		</farm-label>
		<farm-textfield
			v-model="inputVal"
			v-mask="`${mask ? mask : ''}`"
			:placeholder="placeholder"
			:id="inputId"
			:rules="inputRules"
			:disabled="disabled"
			:readonly="readonly"
		/>
	</v-col>
</template>
<script lang="ts">
import Vue from 'vue';
import Label from '../Label';
import TextField from '../TextField';
import { VCol } from 'vuetify/lib/components/VGrid';

export default Vue.extend({
	name: 'farm-textfield-labelled',
	components: {
		'farm-label': Label,
		'farm-textfield': TextField,
		VCol,
	},
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
