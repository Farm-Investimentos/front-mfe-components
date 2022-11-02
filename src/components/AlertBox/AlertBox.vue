<template>
	<div :class="{ 'alert-box': true, 'alert-box--dense': dense }">
		<farm-icon v-if="icon" class="alert-box__icon" size="md">{{ icon }}</farm-icon>
		<!--
			@slot Use this slot for the content
		-->
		<div class="alert-box__content">
			<slot></slot>
		</div>
		<farm-icon v-if="dismissable" class="alert-box__close" size="md">close</farm-icon>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Icon from '../Icon';

export default Vue.extend({
	name: 'farm-alertbox',
	components: {
		'farm-icon': Icon,
	},
	props: {
		icon: {
			type: String,
			default: null,
		},
		dismissable: {
			type: Boolean,
			default: false,
		},
		dense: {
			type: Boolean,
			default: false,
		},
	},
	setup() {},
});
</script>
<style lang="scss" scoped>
@import './AlertBox';
</style>
