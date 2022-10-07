<template>
	<farm-chip
		:color="obj.color"
		:outlined="obj.outlined"
		:variation="obj.variation"
		:dense="!isFull"
	>
		{{ obj.label }}
	</farm-chip>
</template>
<script lang="ts">
import Vue from 'vue';
import keys from './keys';
export default Vue.extend({
	name: 'farm-chip-invite',
	props: {
		/**
		 * Invite status
		 */
		status: {
			type: Number,
			default: 10,
		},
		/**
		 * Full width (from parent)
		 */
		isFull: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		obj() {
			return keys[this.status];
		},
	},
});
</script>
