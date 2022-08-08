<template>
	<img :src="imgSrc" />
</template>
<script>
import Vue from 'vue';

export default Vue.extend({
	name: 'farm-imglogo-product',
	inheritAttrs: true,
	props: {
		/**
		 * Product id
		 */
		id: {
			required: true,
		},
		/**
		 * Logo variation
		 */
		variation: {
			type: String,
			default: 'full',
		},
	},
	computed: {
		imgSrc() {
			const href = window.location.href;
			return `${
				href.indexOf('localhost') || href.indexOf('front-farm-storybook')
					? 'https://dev.plataforma.portalfarm.com.br'
					: ''
			}/public/logos/products/${this.id}/${this.variation}.svg`;
		},
	},
});
</script>
