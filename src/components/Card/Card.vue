<template>
	<div class="farm-card">
		<slot></slot>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	name: 'farm-card',
<<<<<<< HEAD
=======
	inheritAttrs: true,
>>>>>>> 38dc3bb9698df651e1adb50e862be215daf600a6
});
</script>

<style lang="scss" scoped>
@import './Card.scss';
</style>
