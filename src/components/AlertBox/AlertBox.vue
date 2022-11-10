<template>
	<transition name="fade">
		<div v-if="visible" :class="{ 'farm-alert-box': true, 'farm-alert-box--dense': dense }">
			<farm-icon
				v-if="icon"
				class="farm-alert-box__icon"
				color="primary"
				variation="darken"
				size="md"
				>{{ icon }}</farm-icon
			>
			<div
				:class="{
					'farm-alert-box__content': true,
					'farm-alert-box__content--with-dismissable': dismissable,
				}"
			>
				<farm-bodytext
					:type="1"
					variation="regular"
					color="primary"
					color-variation="darken"
				>
					<slot></slot>
				</farm-bodytext>
			</div>
			<farm-btn class="farm-alert-box__close" v-if="dismissable" icon size="md">
				<farm-icon color="primary" variation="darken" size="md">close</farm-icon>
			</farm-btn>
		</div>
	</transition>
</template>

<script lang="ts">
import Vue, { ref } from 'vue';

export default Vue.extend({
	name: 'farm-alertbox',
	props: {
		/**
		 * Left Icon?
		 */
		icon: {
			type: String,
			default: null,
		},
		/**
		 * Close icon and option to close AlertBox?
		 */
		dismissable: {
			type: Boolean,
			default: false,
		},
		/**
		 * Dense?
		 */
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
