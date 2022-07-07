<template>
	<div class="farm-dialog__footer">
		<farm-btn v-if="hasCancel" color="secondary" outlined @click="$emit('onClose')">
			{{ closeLabel }}
		</farm-btn>
		<farm-btn
			v-for="button in extraButtons"
			:key="button.label"
			:color="button.color"
			:outlined="button.outlined"
			:disabled="button.disabled"
			@click="$emit(button.listener ? button.listener : '')"
		>
			{{ button.label }}
		</farm-btn>
		<farm-btn
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

<script lang="ts">
import Vue, { PropType } from 'vue';
import DefaultButton from '../Buttons/DefaultButton';
import IExtraButton from './IExtraButton';

/**
 * Footer de dialog/modal
 */
export default Vue.extend({
	name: 'farm-dialog-foote',
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
		 * lista de botões extra (IExtraButton)
		 */
		extraButtons: {
			type: Array as PropType<Array<IExtraButton>>,
			default: () => [],
		},
	},
});
</script>
<style lang="scss" scoped>
@import 'DialogFooter';
</style>
