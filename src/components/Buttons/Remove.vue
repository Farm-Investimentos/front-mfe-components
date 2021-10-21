<template>
	<v-btn
		@click="onClick"
		dense
		class="v-btn--responsive"
		color="error"
		:title="label"
		:disabled="disabled"
	>
		<v-icon>mdi-trash-can-outline</v-icon>
		{{ label }}
	</v-btn>
</template>
<script>
import VBtn from 'vuetify/lib/components/VBtn';
import VIcon from 'vuetify/lib/components/VIcon';
export default {
	name: 'RemoveButton',
	props: {
		/**
		 * Label do botão
		 */
		label: {
			type: String,
			default: 'Importar',
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
		VBtn,
		VIcon,
	},
	methods: {
		onClick() {
			this.$emit('onClick');
		},
	},
};
</script>
<style scoped lang="scss">
.v-btn {
	.v-icon {
		margin-right: 1rem;
	}
}
</style>
