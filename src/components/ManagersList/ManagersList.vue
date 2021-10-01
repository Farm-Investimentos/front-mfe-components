<template>
	<ul>
		<li v-for="(m, index) in managers" :key="index">
			{{ m }}
		</li>
	</ul>
</template>
<script>
export default {
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
};
</script>
<style scoped lang="scss">
ul {
	list-style-type: none;
	padding-left: 0;
}
</style>
