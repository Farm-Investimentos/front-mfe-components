<template>
	<div
		:class="{
			'farm-alert-reload': true,
			'farm-alert-reload--vertical': $props.vertical,
		}"
	>
		<div>
			<farm-icon color="error">alert</farm-icon>
			<farm-typography tag="span" color="error" class="farm-alert-reload__label">
				{{ label }}
			</farm-typography>
		</div>
		<farm-btn alt="Recarregar" @click="$emit('onClick')">
			<farm-icon>refresh</farm-icon>
			Recarregar
		</farm-btn>
	</div>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	name: 'farm-alert-reload',
	props: {
		/**
		 * Label
		 */
		label: {
			type: String,
			default: '',
		},
		/**
		 * Vertical?
		 */
		vertical: {
			type: Boolean,
			default: false,
		},
	},
});
</script>

<style lang="scss" scoped>
@import 'AlertReload';
</style>
