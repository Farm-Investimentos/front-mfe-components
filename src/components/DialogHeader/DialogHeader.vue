<template>
	<header>
		<farm-icon v-if="iconTitle" size="16px" color="secondary">{{ iconTitle }}</farm-icon>
		{{ title }}

		<farm-icon
			v-if="hasCloseIcon"
			role="button"
			title="Fechar"
			class="farm-dialog-header__close"
			color="secondary"
			@click="onClose"
		>
			close-thick
		</farm-icon>
	</header>
</template>
<script lang="ts">
import Vue from 'vue';
import Icon from '../Icon';
/**
 * Header de dialog/modal
 */
export default Vue.extend({
	name: 'farm-dialog-header',
	props: {
		/**
		 * Título
		 */
		title: {
			type: String,
			default: '',
			required: true,
		},
		/**
		 * Ícone - usa os do material icons
		 */
		iconTitle: {
			type: String,
			default: null,
			required: false,
		},
		/**
		 * Ícone - se possui o ícone de fechar
		 */
		hasCloseIcon: {
			type: Boolean,
			default: true,
			required: false,
		},
	},
	components: {
		'farm-icon': Icon,
	},
	methods: {
		onClose() {
			this.$emit('onClose', {});
		},
	},
});
</script>
<style lang="scss" scoped>
@import 'DialogHeader';
</style>
