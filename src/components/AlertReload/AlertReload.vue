<template>
	<div
		:class="{
			'farm-alert-reload': true,
			'farm-alert-reload--vertical': $props.vertical,
		}"
	>
		<div>
			<farm-icon color="error">alert</farm-icon>
			<farm-typography tag="span" color="error" class="farm-alert-reload--label">
				{{ label }}
			</farm-typography>
		</div>
		<farm-btn color="secondary" class="ml-3" alt="Recarregar" @click="$emit('onClick')">
			<farm-icon>refresh</farm-icon>
			Recarregar
		</farm-btn>
	</div>
</template>
<script lang="ts">
import DefaultButton from '../Buttons/DefaultButton';
import Icon from '../Icon';
import Typography from '../Typography';

export default {
	name: 'farm-alert-reload',
	components: {
		'farm-btn': DefaultButton,
		'farm-icon': Icon,
		'farm-typography': Typography,
	},
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
};
</script>

<style lang="scss" scoped>
@import 'AlertReload';
</style>
