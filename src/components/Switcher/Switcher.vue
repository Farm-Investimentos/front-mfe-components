<template>
	<div
		:class="{ 'farm-switch': true }"
		role="checkbox"
		v-bind="$props"
		@click="toggle"
		@keydown.space.prevent="toggle"
	>
		<span class="farm-switch__background" :class="backgroundStyles" />
		<span class="farm-switch__indicator" :style="indicatorStyles" />
	</div>
</template>
<script lang="ts">
import Vue, { PropType } from 'vue';

export default Vue.extend({
	name: 'farm-switcher',
	props: {
		/**
		 * Color
		 */
		 color: {
			type: String as PropType<
				| 'primary'
				| 'secondary'
				| 'secondary-green'
				| 'secondary-golden'
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
		 * v-model binding
		 */
		value: {
			type: Boolean,
			required: true,
		},
		/**
		 * Is disabled?
		 */
		disabled: { type: Boolean, default: false },
	},
	data() {
		return {
			isDisabled: this.disabled,
		};
	},
	computed: {
		backgroundStyles() {
			return {
				'farm-switch--selected': this.value && !this.isDisabled,
				'farm-switch--idle': !this.value && !this.isDisabled,
				'farm-switch--disabled-on': this.value && this.isDisabled,   
				'farm-switch--disabled-off': !this.value && this.isDisabled,   
			};
		},
		indicatorStyles() {
			return { transform: this.value ? 'translateX(16px)' : 'translateX(0)' };
		},
	},
	watch: {
		disabled(newValue: boolean) {
			this.isDisabled = newValue;
		},
	},
	methods: {
		toggle() {
			if (this.isDisabled) {
				return false;
			}
			this.$emit('input', !this.value);
		},
	},
});
</script>
<style lang="scss" scoped>
@import 'Switcher';
</style>
