<template>
	<div class="ml-6 mr-3 d-flex align-center">
		Total de linhas selecionadas: {{ inputVal.length }}
		<v-btn color="error" @click="reset" small dense class="ml-3" v-if="inputVal.length > 0">
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
	name: 'farm-tablerowselection',
	components: {
		VBtn,
		VIcon,
	},
	props: {
		/**
		 * Variável usada como v-model
		 * contém a lista selecionada
		 */
		value: {
			required: true,
			type: Array,
		},
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
		reset() {
			this.inputVal = [];
		},
	},
});
</script>
<style lang="scss" scoped>
div {
	height: 2rem;
}
</style>
