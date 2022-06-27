<template>
	<farm-btn @click="onClick" dense class="v-btn--responsive farm-btn--import" outlined title="Importar">
		<i class="mdi mdi-upload"></i>
		{{ label }}
	</farm-btn>
</template>
<script>
import Vue from 'vue';
import DefaultButton from '../DefaultButton';

export default Vue.extend({
	name: 'farm-btn-import',
	components: {
		'farm-btn': DefaultButton,
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
});
</script>
<style scoped lang="scss">
.farm-btn.farm-btn--import {
	background: var(--v-extra-lighten2);
	color: var(--v-gray-lighten5);
	.farm-btn__content i.mdi {
		color: white;
		margin-right: 1rem;
	}
}
</style>
