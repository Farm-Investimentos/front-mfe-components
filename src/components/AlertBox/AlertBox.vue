<template>
	<transition name="fade">
		<div
			v-if="visible"
			:color="color"
			:class="{ 'farm-alert-box': true, 'farm-alert-box--dense': dense }"
		>
			<farm-icon
				v-if="icon"
				class="farm-alert-box__icon"
				:color="color"
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
					:color="color"
					color-variation="darken"
				>
					<slot></slot>
				</farm-bodytext>
			</div>
			<farm-btn
				class="farm-alert-box__close"
				v-if="dismissable"
				icon
				size="md"
				:color="color"
				@click="close"
			>
				<farm-icon variation="darken" size="md" :color="color">close</farm-icon>
			</farm-btn>
		</div>
	</transition>
</template>

<script lang="ts">
import Vue, { ref, PropType } from 'vue';

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
		/**
		 * Color
		 */
		color: {
			type: String as PropType<
				| 'primary'
				| 'secondary'
				| 'neutral'
				| 'info'
				| 'success'
				| 'error'
				| 'warning'
				| 'success'
				| 'extra-1'
				| 'extra-2'
			>,
			default: 'primary',
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
