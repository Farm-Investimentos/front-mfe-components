<template>
	<div class="ml-6 mr-3 d-flex align-center">
		Total de linhas selecionadas: {{ length }}
		<v-btn color="error" @click="reset" small dense class="ml-3" v-if="length > 0">
			<v-icon small> mdi-trash-can </v-icon>
			Limpar
		</v-btn>
	</div>
</template>
<script>
import Vue from 'vue';
import VBtn from 'vuetify/lib/components/VBtn';
import VIcon from 'vuetify/lib/components/VIcon';
export default Vue.extend({
	// name: 'farm-tablerowselection',
	components: {
		VBtn,
		VIcon,
	},
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
