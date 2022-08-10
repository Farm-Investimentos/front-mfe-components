<template>
	<span :class="{ 'farm-chip': true }">
        <farm-typography tag="span" size="sm">
            <slot></slot>
        </farm-typography>
	</span>
</template>
<script lang="ts">
import Vue from 'vue';
import Typography from '../Typography';

export default Vue.extend({
	name: 'farm-chip',
    inheritAttrs: true,
	setup() {},
	components: {
		'farm-typography': Typography,
	},
});
</script>
<style lang="scss" scoped>
@import './Chip.scss';
</style>
