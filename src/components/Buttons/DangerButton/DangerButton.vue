<template>
	<farm-btn v-bind="$attrs" v-on="$listeners" color="error">
		<farm-icon v-if="icon" class="'mr-3">
			{{ customIcon }}
		</farm-icon>
		<slot></slot>
	</farm-btn>
</template>
<script lang="ts">


export default {
	name: 'farm-btn-danger',
	inheritAttrs: true,
	props: {
		/**
		 * Show icon
		 */
		icon: {
			type: Boolean,
			default: false,
		},
		/**
		 * Custom icon
		 */
		customIcon: {
			type: String,
			default: '',
		},
	},
};
</script>
