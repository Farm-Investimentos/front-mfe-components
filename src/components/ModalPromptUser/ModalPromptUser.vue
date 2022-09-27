<template>
	<farm-modal v-model="inputVal" size="sm" :offsetTop="48" :offsetBottom="68">
		<template v-slot:header>
			<DialogHeader :title="title" @onClose="close" />
		</template>
		<template v-slot:content>
			<section class="modal-content">
				<farm-promptusertoconfirm
					v-if="inputVal"
					v-model="canConfirm"
					:match="match"
					:title="subtitle"
				/>
			</section>
		</template>

		<template v-slot:footer>
			<DialogFooter
				:confirmColor="confirmColor"
				:confirmLabel="confirmLabel"
				:isConfirmDisabled="!canConfirm"
				@onConfirm="confirm"
				@onClose="close"
			/>
		</template>
	</farm-modal>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	name: 'farm-prompt-user',
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
<style lang="scss" scoped>
@import './ModalPromptUser';
</style>
