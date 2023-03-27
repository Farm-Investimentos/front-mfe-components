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
import Vue, { PropType, computed, ref, watch } from 'vue';

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
				| 'gray'
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
	setup(props, { emit }) {
		const isDisabled = ref(props.disabled);

		const backgroundStyles = computed(() => ({
			'farm-switch--selected': props.value && !isDisabled.value,
			'farm-switch--idle': !props.value && !isDisabled.value,
			'farm-switch--disabled-on': props.value && isDisabled.value,
			'farm-switch--disabled-off': !props.value && isDisabled.value,
		}));

		const indicatorStyles = computed(() => ({
			transform: props.value ? 'translateX(16px)' : 'translateX(0)',
		}));

		watch(
			() => props.disabled,
			newValue => {
				isDisabled.value = newValue;
			}
		);

		const toggle = () => {
			if (isDisabled.value) {
				return false;
			}
			emit('input', !props.value);
		};

		return { isDisabled, backgroundStyles, indicatorStyles, toggle };
	},
});
</script>
<style lang="scss" scoped>
@import 'Switcher';
</style>
