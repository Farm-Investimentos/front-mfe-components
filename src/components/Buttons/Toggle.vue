<template>
	<v-btn
		@click="onClick"
		dense
		class="v-btn--responsive"
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
		<v-icon v-if="!prepend">{{ `mdi-chevron-${open ? 'up' : 'down'}` }}</v-icon>
	</v-btn>
</template>
<script>
import VBtn from 'vuetify/lib/components/VBtn';
import VIcon from 'vuetify/lib/components/VIcon';
/**
 * Botão de Toggle, emitindo e guardando status
 */
export default {
	name: 'ImportButton',
	components: {
		VBtn,
		VIcon,
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
};
</script>
<style scoped lang="scss">
.v-btn {
	&.v-btn_icon--apppend .v-icon {
		margin-left: 1rem;
		margin-right: 0;
	}
	&.v-btn_icon--prepend .v-icon {
		margin-left: 0;
	}
}
</style>
