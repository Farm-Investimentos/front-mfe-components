<template>
	<div class="icon-box">
		<div class="icon">
			<v-icon color="secondary">{{ icon }}</v-icon>
		</div>
	</div>
</template>

<script>
import Vue from 'vue';
import VIcon from 'vuetify/lib/components/VIcon';

export default Vue.extend({
	name: 'farm-icon-box',
	components: {
		VIcon,
	},
	props: {
		icon: {
			type: String,
			require: true,
		},
	},
});
</script>

<style lang="sass" scoped>
@import './IconBox.scss'
</style>
