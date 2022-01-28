<template>
	<div class="align-center">
		<span class="mr-1 label" v-if="index === 0">{{ item[labelKey] }}</span>
		<span class="label" v-if="index === 1">
			(+{{ itemsLength - 1 }} {{ itemsLength > 2 ? 'outros' : 'outro' }} )
		</span>
	</div>
</template>

<script>
import Vue from 'vue';
export default Vue.extend({
	name: 'farm-multiple-select-shortener',
	props: {
		/**
		 * Key used to get value from item
		 */
		labelKey: {
			type: String,
			default: 'label',
		},
		/**
		 * Item from v-select
		 */
		item: {
			type: Object,
		},
		/**
		 * Index from slot
		 */
		index: {
			type: Number,
		},
		/**
		 * Items count
		 */
		itemsLength: {
			type: Number,
		},
	},
});
</script>

<style scoped>
.label {
	font-size: small;
}
</style>
