<template>
	<section class="farm-container">
		<div>
			<slot></slot>
		</div>
	</section>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'farm-container',
	inheritAttrs: true,
});
</script>
<style lang="scss" scoped>
@import 'Container.scss';
</style>
