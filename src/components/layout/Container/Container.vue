<template>
	<section class="farm-container">
		<div>
			<slot></slot>
		</div>
	</section>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	name: 'farm-container',
	inheritAttrs: true,
});
</script>
<style lang="scss" scoped>
@import 'Container.scss';
</style>
