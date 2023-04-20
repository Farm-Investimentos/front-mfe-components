<template>
	<ul>
		<li v-for="(m, index) in managers" :key="index">
			{{ m }}
		</li>
	</ul>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
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
