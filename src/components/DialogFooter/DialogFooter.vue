<template>
	<div class="v-dialog__footer d-flex flex-column flex-sm-row justify-end">
		<v-btn @click="$emit('onClose')" v-if="hasCancel" color="primary" outlined>
			{{ closeLabel }}
		</v-btn>
		<v-btn
			v-for="button in extraButtons"
			:key="button.label"
			@click="$emit(button.listener ? button.listener : '')"
			:color="button.color"
			:outlined="button.outlined"
			:depressed="button.outlined"
			:disabled="button.disabled"
			class="ml-sm-3 mt-3 mt-sm-0"
		>
			{{ button.label }}
		</v-btn>
		<v-btn
			@click="$emit('onConfirm')"
			:color="confirmColor"
			v-if="hasConfirm"
			:disabled="isConfirmDisabled"
			class="ml-sm-3 mt-3 mt-sm-0"
		>
			<v-icon v-if="confirmIcon">mdi-{{ confirmIcon }}</v-icon>
			{{ confirmLabel }}
		</v-btn>
	</div>
</template>

<script>
import { VBtn } from 'vuetify/lib/components/VBtn';
import { VIcon } from 'vuetify/lib/components/VIcon';
/**
 * Footer de dialog/modal
 */
export default {
	name: 'DialogFooter',
	components: {
		VBtn,
		VIcon,
	},
	props: {
		/**
		 * Label do botão de confirmação
		 */
		confirmLabel: {
			type: String,
			default: 'Confirmar',
		},
		/**
		 * Label do botão de fechar
		 */
		closeLabel: {
			type: String,
			default: 'Fechar',
		},
		/**
		 * Exibe/esconde botão de confirmação
		 */
		hasConfirm: {
			type: Boolean,
			default: true,
		},
		/**
		 * Exibe/esconde botão de cancelar
		 */
		hasCancel: {
			type: Boolean,
			default: true,
		},
		/**
		 * Cor do botão de confirmação - usa as do tema do vuetify
		 */
		confirmColor: {
			type: String,
			default: 'secondary',
		},
		/**
		 * Ícone no botão Confirmar
		 */
		confirmIcon: {
			type: String,
			default: null,
		},
		/**
		 * Desabilita botão de confirmação
		 */
		isConfirmDisabled: {
			type: Boolean,
			default: false,
		},
		/**
		 * lista de botões extra
		 */
		extraButtons: {
			type: Array,
			default: () => [],
		},
	},
};
</script>
