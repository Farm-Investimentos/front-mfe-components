<template>
	<div class="farm-card">
		<slot></slot>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	name: 'farm-card',
});
</script>

<style lang="scss" scoped>
@import './Card.scss';
</style>
