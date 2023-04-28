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
import { defineComponent } from 'vue';

export default defineComponent({
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
