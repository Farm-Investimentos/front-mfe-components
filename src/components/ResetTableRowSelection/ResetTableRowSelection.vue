<template>
	<div class="ml-6 mr-3 d-flex align-center">
		Total de linhas selecionadas: {{ length }}
		<farm-btn color="error" @click="reset" small dense class="ml-3" v-if="length > 0">
			<v-icon small> mdi-trash-can </v-icon>
			Desmarcar
		</farm-btn>
	</div>
</template>
<script>
import { defineComponent } from 'vue';
import VIcon from 'vuetify/lib/components/VIcon';
import DefaultButton from '../Buttons/DefaultButton';

export default defineComponent({
	name: 'farm-tablerowselection',
	components: {
		VIcon,
		'farm-btn': DefaultButton,
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
