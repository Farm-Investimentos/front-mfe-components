<template>
	<footer
		:class="{
			'farm-container-footer': true,
			'farm-container-footer--notop': noTop,
		}"
	>
		<slot></slot>
	</footer>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	name: 'farm-container-footer',
	props: {
		noTop: {
			type: Boolean,
			default: false,
		},
	},
	inheritAttrs: true,
});
</script>
<style lang="scss" scoped>
@import 'ContainerFooter.scss';
</style>
