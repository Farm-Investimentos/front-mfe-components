<template>
	<farm-btn
		@click="onClick"
		v-bind="$attrs"
		class="farm-btn--responsive"
		:class="{
			'v-btn_icon--prepend': prepend,
			'v-btn_icon--apppend': !prepend,
		}"
		:outlined="!open"
		:title="label"
	>
		<farm-icon v-if="prepend" class="mr-3 ml-0">{{
			`chevron-${open ? 'up' : 'down'}`
		}}</farm-icon>
		{{ label }}
		<farm-icon v-if="!prepend" class="ml-3 mr-0">{{
			`chevron-${open ? 'up' : 'down'}`
		}}</farm-icon>
	</farm-btn>
</template>
<script lang="ts">


/**
 * Botão de Toggle, emitindo e guardando status
 */
export default {
	name: 'farm-btn-toggle',
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
