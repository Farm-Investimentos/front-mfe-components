<template>
	<farm-btn
		dense
		class="farm-btn--responsive"
		color="error"
		:title="label"
		:disabled="disabled"
		@click="onClick"
	>
		<farm-icon>trash-can-outline</farm-icon>
		{{ label }}
	</farm-btn>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'farm-btn-remove',
	props: {
		/**
		 * Label do botão
		 */
		label: {
			type: String,
			default: 'Remover',
		},
		/**
		 * Desabilita o botão
		 */
		disabled: {
			type: Boolean,
			default: false,
		},
	},
	methods: {
		onClick() {
			this.$emit('onClick');
		},
	},
});
</script>
<style scoped lang="scss">
@import './RemoveButton';
</style>
