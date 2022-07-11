<template>
	<div class="farm-switch" role="checkbox" @click="toggle" @keydown.space.prevent="toggle">
		<span class="farm-switch__background" :class="backgroundStyles" />
		<span class="farm-switch__indicator" :style="indicatorStyles" />
	</div>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	name: 'farm-switch',
	props: {
		value: {
			type: Boolean,
			required: true,
		},
	},
	computed: {
		backgroundStyles() {
			return {
				'farm-switch--selected': this.value,
				'farm-switch--idle': !this.value,
			};
		},
		indicatorStyles() {
			return { transform: this.value ? 'translateX(16px)' : 'translateX(0)' };
		},
	},
	methods: {
		toggle() {
			this.$emit('input', !this.value);
		},
	},
});
</script>
<style lang="scss" scoped>
@import 'Switch.scss';
</style>
