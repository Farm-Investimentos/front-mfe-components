<template>
	<farm-btn
		class="farm-btn--responsive farm-btn--import"
		title="Importar"
		v-bind="$attrs"
		@click="onClick"
	>
		<farm-icon>upload</farm-icon>
		{{ label }}
	</farm-btn>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
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
