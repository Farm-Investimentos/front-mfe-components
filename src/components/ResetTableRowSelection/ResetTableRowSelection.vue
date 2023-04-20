<template>
	<div class="ml-6 mr-3 d-flex align-center">
		Total de linhas selecionadas: {{ length }}
		<farm-btn color="error" @click="reset" small class="ml-3" v-if="length > 0">
			<farm-icon size="sm">trash-can </farm-icon>
			Desmarcar
		</farm-btn>
	</div>
</template>
<script>
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'farm-tablerowselection',
	props: {
		/**
		 * Current items length selected
		 */
		length: {
			default: 0,
			type: Number,
		},
	},
	methods: {
		reset() {
			this.$emit('onReset');
		},
	},
});
</script>
<style lang="scss" scoped>
div {
	height: 2rem;
}
</style>
