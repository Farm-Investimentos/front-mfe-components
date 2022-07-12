<template>
	<v-text-field class="farm-textfield" v-on="{ ...$listeners }" v-bind="$attrs" outlined /> 
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	name: 'farm-textfield',
	inheritAttrs: true,
});
</script>
<style lang="scss" scoped>
@import 'TextField.scss';
</style>
