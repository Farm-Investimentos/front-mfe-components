<template>
	<div class="farm-card">
		<slot></slot>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	name: 'farm-card',
	inheritAttrs: true,
});
</script>

<style lang="scss" scoped>
@import './Card.scss';
</style>
