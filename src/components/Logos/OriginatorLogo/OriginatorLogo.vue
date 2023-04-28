<template>
	<img :src="imgSrc" />
</template>
<script>
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'farm-imglogo-originator',
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
			}/public/logos/originadores/${this.id}/${this.variation}.svg`;
		},
	},
});
</script>
