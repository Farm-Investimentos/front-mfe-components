<template>
	<transition name="fade">
		<div v-if="visible" :class="{ 'alert-box': true, 'alert-box--dense': dense }">
			<farm-icon v-if="icon" class="alert-box__icon" color="primary" size="md">{{
				icon
			}}</farm-icon>
			<!--
			@slot Use this slot for the content
		-->
			<div class="alert-box__content">
				<farm-bodytext
					:type="1"
					variation="regular"
					color="primary"
					color-variation="darken"
				>
					<slot></slot>
				</farm-bodytext>
			</div>
			<farm-icon
				v-if="dismissable"
				class="alert-box__close"
				color="primary"
				size="md"
				@click="close"
				>close</farm-icon
			>
		</div>
	</transition>
</template>

<script lang="ts">
import Vue, { ref } from 'vue';
import Icon from '../Icon';
import { BodyText } from '../Typography';

export default Vue.extend({
	name: 'farm-alertbox',
	components: {
		'farm-icon': Icon,
		'farm-bodytext': BodyText,
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
	setup() {
		const visible = ref(true);

		function close() {
			visible.value = false;
		}

		return {
			visible,
			close,
		};
	},
});
</script>
<style lang="scss" scoped>
@import './AlertBox';
</style>
