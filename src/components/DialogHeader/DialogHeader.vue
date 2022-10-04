<template>
	<header>
		<farm-icon v-if="iconTitle" size="16px" color="primary">{{ iconTitle }}</farm-icon>
		<farm-caption v-if="title" variation="regular" color="primary" bold>
			{{ title }}
		</farm-caption>

		<slot></slot>

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
		},
		/**
		 * Ícone - usa os do material icons
		 */
		iconTitle: {
			type: String,
			default: null,
		},
		/**
		 * Ícone - se possui o ícone de fechar
		 */
		hasCloseIcon: {
			type: Boolean,
			default: true,
		},
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
