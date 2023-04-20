<template>
	<header>
		<farm-icon v-if="iconTitle" size="16px" color="primary" class="mr-2">{{ iconTitle }}</farm-icon>
		<farm-caption v-if="title" variation="semiBold">
			{{ title }}
		</farm-caption>

		<slot></slot>

		<farm-btn
			v-if="hasCloseIcon"
			icon
			color="primary"
			class="farm-dialog-header__close"
			title="Fechar"
			@click="onClose"
		>
			<farm-icon role="button" size="24px"> window-close </farm-icon>
		</farm-btn>
	</header>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
/**
 * Header de dialog/modal
 */
export default defineComponent({
	name: 'farm-dialog-header',
	props: {
		/**
		 * Title
		 */
		title: {
			type: String,
			default: '',
		},
		/**
		 * Icon
		 */
		iconTitle: {
			type: String,
			default: null,
		},
		/**
		 * Has close icon?
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
