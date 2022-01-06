<template>
	<header>
		<v-icon v-if="iconTitle" class="dialog-header__title-icon">{{ 'mdi-' + iconTitle }}</v-icon>
		{{ title }}

		<v-icon
			v-if="hasCloseIcon"
			role="button"
			title="Fechar"
			class="dialog-header__close-icon"
			@click="onClose"
			color="secondary"
		>
			mdi-close-thick
		</v-icon>
	</header>
</template>
<script>
import { VIcon } from 'vuetify/lib/components/VIcon';
/**
 * Header de dialog/modal
 */
export default {
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
		VIcon,
	},
	methods: {
		onClose() {
			this.$emit('onClose', {});
		},
	},
};
</script>
