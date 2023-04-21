<template>
	<section class="farm-container">
		<div>
			<slot></slot>
		</div>
	</section>
</template>
<script lang="ts">


export default {
	name: 'farm-container',
	inheritAttrs: true,
};
</script>
<style lang="scss" scoped>
@import 'Container.scss';
</style>
