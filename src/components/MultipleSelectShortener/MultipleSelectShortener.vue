<template>
	<div class="align-center">
		<div>
			<span class="mr-1" v-if="index === 0">{{ item[labelKey] }}</span>
			<span v-if="index === 1">
				(+{{ itemsLength - 1 }} {{ itemsLength > 2 ? 'outros' : 'outro' }} )
			</span>
		</div>
	</div>
</template>

<script>
import Vue from 'vue';
export default Vue.extend({
	name: 'farm-multiple-select-shortener',
	props: {
		labelKey: {
			type: String,
			default: 'label',
		},
		item: {
			type: Object,
		},
		index: {
			type: Number,
		},
		itemsLength: {
			type: Number,
		},
	},
});
</script>
