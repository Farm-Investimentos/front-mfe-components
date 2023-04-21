<template>
	<img :src="imgSrc" />
</template>
<script>


export default {
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
				href.indexOf('localhost') >= 0 || href.indexOf('front-farm-storybook') >= 0
					? 'https://dev.plataforma.portalfarm.com.br'
					: ''
			}/public/logos/products/${this.id}/${this.variation}.svg`;
		},
	},
};
</script>
