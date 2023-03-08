<template>
	<farm-modal v-model="inputVal" size="sm" :offsetTop="48" :offsetBottom="68">
		<template v-slot:header>
			<farm-dialog-header :title="title" @onClose="close" />
		</template>
		<template v-slot:content>
			<section class="modal-content">
				<!--
				@slot subtitle content
				-->
				<slot name="subtitle"></slot>
				<farm-promptusertoconfirm
					v-if="inputVal"
					v-model="canConfirm"
					:match="match"
					:title="subtitle"
				/>
			</section>
		</template>

		<template v-slot:footer>
			<farm-dialog-footer
				:confirmColor="confirmColor"
				:confirmLabel="confirmLabel"
				:closeLabel="closeLabel"
				:isConfirmDisabled="!canConfirm"
				@onConfirm="confirm"
				@onClose="close"
			/>
		</template>
	</farm-modal>
</template>
<script lang="ts">
import Vue, { PropType } from 'vue';

export default Vue.extend({
	name: 'farm-prompt-user',
	props: {
		/**
		 * Open/close modal
		 */
		value: {
			required: true,
		},
		/**
		 * Modal title
		 */
		title: {
			required: true,
			type: String,
		},
		/**
		 * Modal subtitle
		 */
		subtitle: {
			required: true,
			type: String,
		},
		/**
		 * Confirm button color
		 */
		confirmColor: {
			type: String as PropType<
				| 'primary'
				| 'secondary'
				| 'neutral'
				| 'info'
				| 'success'
				| 'error'
				| 'warning'
				| 'success'
				| 'extra-1'
				| 'extra-2'
				| 'gray'
			>,
			default: 'primary',
		},
		/**
		 * Confirm button label
		 */
		confirmLabel: {
			type: String,
			default: 'Confirmar',
		},
		/**
		 * Close button label
		 */
		closeLabel: {
			type: String,
			default: 'Fechar',
		},
		/**
		 * String to be matched (and enable confirm button)
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
			/**
			 * input is correct filled and confirm button is triggered
			 *
			 * @event onConfirm
			 */
			this.$emit('onConfirm');
			this.inputVal = false;
		},
	},
});
</script>
<style lang="scss" scoped>
@import './ModalPromptUser';
</style>
