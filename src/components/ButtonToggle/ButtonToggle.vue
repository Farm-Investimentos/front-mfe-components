<template>
	<div class="farm-button-toggle">
		<farm-btn
			v-for="(button, index) in buttons"
			:key="`button_toggle_` + index"
			:color="isSelected(index) ? 'secondary' : 'gray'"
			:outlined="!isSelected(index)"
			@click="setValue(index)"
		>
			{{ button.label }}
		</farm-btn>
	</div>
</template>
<script lang="ts">
import Vue, { PropType, ref } from 'vue';
import IButtonToggle from './IButtonToggle';
export default Vue.extend({
	name: 'farm-button-toggle',
	props: {
		/**
		 * Array of buttons
		 */
		buttons: {
			type: Array as PropType<Array<IButtonToggle>>,
			default: () => [],
		},
		/**
		 * v-model binding
		 */
		value: { default: null },
	},
	setup(props, { emit }) {
		const inputVal = ref(props.value);

		const setValue = (index: number) => {
			inputVal.value = index;
			emit('input', inputVal.value);
		};

		const isSelected = (index: number) => index === inputVal.value;

		return {
			inputVal,
			setValue,
			isSelected,
		};
	},
});
</script>
<style lang="scss" scoped>
@import './ButtonToggle';
</style>
