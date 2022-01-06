<template>
	<img :src="imgSrc" />
</template>
<script>
import Vue from 'vue';

export default Vue.extend({
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
			return `/public/logos/originadores/${this.id}/${this.variation}.svg`;
		},
	},
});
</script>
