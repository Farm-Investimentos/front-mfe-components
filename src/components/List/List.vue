<template>
	<ul>
		<slot></slot>
	</ul>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	name: 'farm-list',
	props: {},
	setup() {},
});
</script>
<style lang="scss" scoped>
@import './List';
</style>
