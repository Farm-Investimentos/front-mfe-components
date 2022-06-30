<template>
	<button v-on="$listeners" v-bind="$attrs" :disabled="disabled" :type="type" :class="classes">
		<span class="farm-btn__content">
			<slot></slot>
		</span>
	</button>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	name: 'farm-btn',
	inheritAttrs: true,

	props: {
		color: { type: String, default: 'primary' },
		outlined: Boolean,
		plain: Boolean,
		disabled: Boolean,
		rounded: Boolean,
		icon: Boolean,
		type: {
			type: String,
			default: 'button',
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
				'farm-btn--elevated': this.isElevated,
				'farm-btn--round': this.isRound,
				'farm-btn--rounded': this.rounded,
				'farm-btn--icon': this.icon,
				['farm-btn--' + this.color]: true,
				...obj,
			};
		},
		isRound(): boolean {
			return Boolean(this.icon || this.fab);
		},
		isElevated(): boolean {
			return Boolean(
				!this.icon &&
					!this.text &&
					!this.outlined &&
					!this.depressed &&
					!this.disabled &&
					!this.plain &&
					(this.elevation == null || Number(this.elevation) > 0)
			);
		},
	},
});
</script>
<style lang="scss" scoped>
@import 'DefaultButton.scss';
</style>
