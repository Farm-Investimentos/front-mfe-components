<template>
	<div class="v-dialog__footer d-flex flex-column flex-sm-row justify-end">
		<farm-btn @click="$emit('onClose')" v-if="hasCancel" color="primary" outlined>
			{{ closeLabel }}
		</farm-btn>
		<farm-btn
			v-for="button in extraButtons"
			:key="button.label"
			:color="button.color"
			:outlined="button.outlined"
			:depressed="button.outlined"
			:disabled="button.disabled"
			class="ml-sm-3 mt-3 mt-sm-0"
			@click="$emit(button.listener ? button.listener : '')"
		>
			{{ button.label }}
		</farm-btn>
		<farm-btn
			class="ml-sm-3 mt-3 mt-sm-0"
			v-if="hasConfirm"
			:color="confirmColor"
			:disabled="isConfirmDisabled"
			@click="$emit('onConfirm')"
		>
			<i :class="{ mdi: true, ['mdi-' + confirmIcon]: true }" v-if="confirmIcon"></i>
			{{ confirmLabel }}
		</farm-btn>
	</div>
</template>

<script>
import DefaultButton from '../Buttons/DefaultButton';
/**
 * Footer de dialog/modal
 */
export default {
	name: 'DialogFooter',
	components: {
		'farm-btn': DefaultButton,
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
