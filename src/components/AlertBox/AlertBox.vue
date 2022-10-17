<template>
	<div>
		<!--
			@slot Use this slot for the content
		-->
		<slot></slot>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	name: 'farm-alertbox',
	props: {},
	setup() {},
});
</script>
<style lang="scss" scoped>
@import './AlertBox';
</style>
