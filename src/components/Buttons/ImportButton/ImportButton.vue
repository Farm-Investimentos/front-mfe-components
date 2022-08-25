<template>
	<farm-btn class="farm-btn--responsive farm-btn--import" title="Importar" @click="onClick">
		<farm-icon>upload</farm-icon>
		{{ label }}
	</farm-btn>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	name: 'farm-btn-import',
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
@import 'ImportButton';
</style>
