<template>
	<v-form v-model="formVal" autocomplete="off">
		<div v-html="title"></div>
		<v-row>
			<v-col cols="12" sm="12" class="mt-3 v-col-fieldset-default">
				<v-text-field
					id="form-confirm-remove"
					color="secondary"
					v-model="matchInput"
					outlined
					dense
					:rules="[rules.checkRemove]"
				></v-text-field>
			</v-col>
		</v-row>
	</v-form>
</template>
<script lang="ts">
import Vue from 'vue';
import { VForm } from 'vuetify/lib/components/VForm';
import { VTextField } from 'vuetify/lib/components/VTextField';
import { VRow, VCol } from 'vuetify/lib/components/VGrid';
export default Vue.extend({
	name: 'farm-prompusertoconfirm',
	props: {
		/**
		 * String to be matched with user prompt
		 */
		match: {
			type: String,
			default: 'EXCLUIR',
		},
		/**
		 * Object to be used as value (or v-model)
		 */
		value: {
			required: true,
		},
		/**
		 * Title
		 */
		title: {
			type: String,
			default: 'Escreva no campo abaixo "EXCLUIR" para confirmar a exclusão.',
		},
	},
	components: {
		VForm,
		VTextField,
		VRow,
		VCol,
	},
	data() {
		return {
			rules: {
				checkRemove: value => {
					return value === this.match;
				},
			},
			matchInput: null,
		};
	},
	computed: {
		formVal: {
			get() {
				return this.value;
			},
			set(val) {
				this.$emit('input', val);
			},
		},
	},
	mounted() {
		this.matchInput = null;
	},
});
</script>
