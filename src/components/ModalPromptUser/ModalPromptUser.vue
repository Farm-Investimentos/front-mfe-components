<template>
	<v-dialog content-class="modal-default modal-default-small" v-model="inputVal">
		<DialogHeader :title="title" @onClose="close" />

		<v-main>
			<section class="mt-9">
				<PromptUserToConfirm
					v-if="inputVal"
					:match="match"
					v-model="canConfirm"
					:title="subtitle"
				/>
			</section>
			<DialogFooter
				@onClose="close"
				:confirmColor="confirmColor"
				:confirmLabel="confirmLabel"
				@onConfirm="confirm"
				:isConfirmDisabled="!canConfirm"
			/>
		</v-main>
	</v-dialog>
</template>
<script lang="ts">
import Vue from 'vue';
import { DialogHeader, DialogFooter, PromptUserToConfirm } from '../../main';
import { VDialog } from 'vuetify/lib/components/VDialog';
import { VMain } from 'vuetify/lib/components/VMain';

export default Vue.extend({
	name: 'farm-prompt-user',
	components: {
		DialogHeader,
		DialogFooter,
		PromptUserToConfirm,
		VDialog,
		VMain,
	},
	props: {
		/**
		 * Habilita/desabilita o modal
		 */
		value: {
			required: true,
		},
		/**
		 * Título do modal
		 */
		title: {
			required: true,
			type: String,
		},
		/**
		 * Subtítulo do modal
		 */
		subtitle: {
			required: true,
			type: String,
		},
		/**
		 * Cor (do Vuetify) do botão de confirmar
		 */
		confirmColor: {
			type: String,
			default: 'secondary',
		},
		/**
		 * Label do botão
		 */
		confirmLabel: {
			type: String,
			default: 'Confirmar',
		},
		/**
		 * String usada para dar match e habilitar
		 */
		match: {
			required: true,
			type: String,
		},
	},
	data() {
		return {
			canConfirm: false,
		};
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
	methods: {
		close() {
			this.inputVal = false;
		},
		confirm() {
			this.$emit('onConfirm');
			this.inputVal = false;
		},
	},
});
</script>
