<template>
	<footer class="farm-container-footer">
		<slot></slot>
	</footer>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	name: 'farm-container-footer',
	inheritAttrs: true,
});
</script>
<style lang="scss" scoped>
@import 'ContainerFooter.scss';
</style>
