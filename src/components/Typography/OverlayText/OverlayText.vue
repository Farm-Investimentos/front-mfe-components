<template>
	<farm-typography
		:weight="400"
		size="sm"
		:class="{ [`farm-overlaytext`]: true }"
		v-bind="$attrs"
	>
		<slot></slot>
	</farm-typography>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	inheritAttrs: true,
	name: 'farm-overlaytext',
});
</script>
<style lang="scss" scoped>
@import 'OverlayText';
</style>
