<template>
	<ul>
		<li v-for="(m, index) in managers" :key="index">
			{{ m }}
		</li>
	</ul>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
	name: 'farm-managers-list',
	props: {
		managersString: {
			type: String,
			required: true,
		},
	},
	computed: {
		managers() {
			return !this.managersString ? [] : this.managersString.split(',');
		},
	},
});
</script>
<style scoped lang="scss">
ul {
	list-style-type: none;
}
</style>
