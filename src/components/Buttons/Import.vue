<template>
	<v-btn @click="onClick" dense class="v-btn--responsive v-btn--import" outlined title="Importar">
		<v-icon>mdi-upload</v-icon>
		{{ label }}
	</v-btn>
</template>
<script>
import VBtn from 'vuetify/lib/components/VBtn';
import VIcon from 'vuetify/lib/components/VIcon';
export default {
	name: 'ImportButton',
	components: {
		VBtn,
		VIcon,
	},
	props: {
		/**
		 * Label do botão
		 */
		label: {
			type: String,
			default: 'Importar',
		},
	},
	methods: {
		onClick() {
			this.$emit('onClick');
		},
	},
};
</script>
<style scoped lang="scss">
.v-btn.v-btn--import {
	background: var(--v-extra-lighten2);
	color: var(--v-gray-lighten5);
	.v-icon {
		margin-right: 1rem;
	}
}
</style>
