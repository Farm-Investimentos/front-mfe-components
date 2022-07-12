<template>
	<v-text-field class="farm-textfield" v-on="{ ...$listeners }" v-bind="$attrs" outlined />
</template>
<script lang="ts">
import Vue from 'vue';
import { VTextField } from 'vuetify/lib/components/VTextField';

export default Vue.extend({
	name: 'farm-textfield',
	inheritAttrs: true,
	components: {
		VTextField,
	},
});
</script>
<style lang="scss" scoped>
@import 'TextField.scss';
</style>
