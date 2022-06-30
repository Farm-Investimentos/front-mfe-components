<template>
	<farm-btn
		@click="onClick"
		dense
		class="farm-btn--responsive"
		:class="{
			'v-btn_icon--prepend': prepend,
			'v-btn_icon--apppend': !prepend,
		}"
		:color="color"
		:outlined="!open"
		:title="label"
	>
		<v-icon v-if="prepend">{{ `mdi-chevron-${open ? 'up' : 'down'}` }}</v-icon>
		{{ label }}
		<v-icon v-if="!prepend" class="ml-3 mr-0">{{ `mdi-chevron-${open ? 'up' : 'down'}` }}</v-icon>
	</farm-btn>
</template>
<script>
import Vue from 'vue';
import VIcon from 'vuetify/lib/components/VIcon';
import DefaultButton from '../DefaultButton';

/**
 * Botão de Toggle, emitindo e guardando status
 */
export default Vue.extend({
	name: 'farm-btn-toggle',
	components: {
		VIcon,
		'farm-btn': DefaultButton,
	},
	data: () => ({
		open: false,
	}),
	props: {
		/**
		 * Label do botão
		 */
		label: {
			type: String,
			default: '',
		},
		/**
		 * Cor do botão - usando as do tema do vuetify
		 */
		color: {
			type: String,
			default: 'secondary',
		},
		/**
		 * Pressionado ou não
		 */
		pressed: {
			type: Boolean,
			default: false,
		},
		/**
		 * Posição do ícone
		 */
		position: {
			type: String,
			default: 'left',
		},
	},
	methods: {
		onClick() {
			this.open = !this.open;
		},
	},
	watch: {
		open(value) {
			this.$emit('onChange', value);
		},
	},
	created() {
		this.open = this.pressed;
	},
	computed: {
		prepend() {
			return this.position === 'left';
		},
	},
});
</script>
