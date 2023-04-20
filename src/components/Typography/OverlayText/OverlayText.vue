<template>
	<farm-typography
		v-bind="$attrs"
		v-on="$listeners"
		size="10px"
		class="farm-overlaytext"
		:weight="400"
	>
		<slot></slot>
	</farm-typography>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	inheritAttrs: true,
	name: 'farm-overlaytext',
});
</script>
<style lang="scss" scoped>
@import 'OverlayText';
</style>
