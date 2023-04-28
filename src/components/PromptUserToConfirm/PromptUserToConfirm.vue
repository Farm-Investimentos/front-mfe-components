<template>
	<farm-form v-model="formVal" autocomplete="off">
		<farm-caption v-html="title" color="gray" />
		<farm-textfield-v2
			v-model="matchInput"
			class="mt-3"
			:rules="[rules.checkRemove]"
		></farm-textfield-v2>
	</farm-form>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
	name: 'farm-promptusertoconfirm',
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
			type: Boolean,
		},
		/**
		 * Title
		 */
		title: {
			type: String,
			default: 'Escreva no campo abaixo "EXCLUIR" para confirmar a exclusão.',
		},
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
