<template>
	<button
		v-if="!to"
		v-on="$listeners"
		v-bind="$attrs"
		:disabled="disabled"
		:type="type"
		:class="classes"
		:size="$props.size"
	>
		<span class="farm-btn__content">
			<slot></slot>
		</span>
	</button>
	<router-link :to="to" v-bind="$attrs" :disabled="disabled" :class="classes" v-else>
		<span class="farm-btn__content">
			<slot></slot>
		</span>
	</router-link>
</template>
<script lang="ts">
import Vue, { PropType } from 'vue';

export default Vue.extend({
	name: 'farm-btn',
	inheritAttrs: true,

	props: {
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
				| 'extra-1'
				| 'extra-2'
			>,
			default: 'primary',
		},
		/**
		 * Outlined
		 */
		outlined: { type: Boolean, default: false },
		/**
		 * Is plain
		 */
		plain: { type: Boolean, default: false },
		/**
		 * Is full
		 */
		full: { type: Boolean, default: false },
		/**
		 * Is disabled
		 */
		disabled: { type: Boolean, default: false },
		/**
		 * Is rounded
		 */
		rounded: { type: Boolean, default: false },
		icon: { type: Boolean, default: false },
		/**
		 * Has elevation
		 */
		elevated: { type: Boolean, default: false },
		type: {
			type: String,
			default: 'button',
		},
		/**
		 * Denotes the target route of the link
		 * Will transform button into a router-link
		 */
		to: {
			type: String,
			default: null,
		},
		/**
		 * Size
		 */
		size: {
			type: String as PropType<'xs' | 'sm' | 'md' | 'lg' | 'xl'>,
			default: 'default',
		},
	},

	computed: {
		classes() {
			const obj = {};
			['outlined', 'plain', 'disabled']
				.filter(key => this[key])
				.forEach(key => {
					obj['farm-btn--' + key] = this[key];
				});
			return {
				'farm-btn': true,
				'farm-btn--elevated': this.elevated,
				'farm-btn--round': this.isRound,
				'farm-btn--rounded': this.rounded,
				'farm-btn--icon': this.icon,
				'farm-btn--full': this.full,
				['farm-btn--' + this.color]: true,
				...obj,
			};
		},
		isRound(): boolean {
			return Boolean(this.icon || this.fab);
		},
	},
});
</script>
<style lang="scss" scoped>
@import 'DefaultButton';
</style>
