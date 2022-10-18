<template>
	<farm-typography v-bind="$attrs" size="10px" class="farm-overlaytext" :weight="400">
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
