<template>
	<v-btn v-bind="$attrs" v-on="$listeners">
		<slot></slot>
	</v-btn>
</template>
<script>
import Vue from 'vue';
import VBtn from 'vuetify/lib/components/VBtn';

export default Vue.extend({
	name: 'farm-btn',
	inheritAttrs: true, 
	props: ['props'],

	components: {
		VBtn,
	},
});
</script>
