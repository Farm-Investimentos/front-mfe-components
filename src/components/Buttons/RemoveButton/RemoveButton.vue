<template>
	<farm-btn
		@click="onClick"
		dense
		class="v-btn--responsive"
		color="error"
		:title="label"
		:disabled="disabled"
	>
		<v-icon>mdi-trash-can-outline</v-icon>
		{{ label }}
	</farm-btn>
</template>
<script>
import Vue from 'vue';
import VIcon from 'vuetify/lib/components/VIcon';
import DefaultButton from '../DefaultButton';

export default Vue.extend({
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
	components: {
		VIcon,
		'farm-btn': DefaultButton,
	},
	methods: {
		onClick() {
			this.$emit('onClick');
		},
	},
});
</script>
<style scoped lang="scss">
.farm-btn {
	.v-icon {
		margin-right: 1rem;
	}
}
</style>
