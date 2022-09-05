<template>
	<div class="farm-button-toggle">
		<farm-btn
			v-for="(button, index) in buttons"
			:key="`button_toggle_` + index"
			color="gray"
			outlined
			@click="setValue(index)"
		>
			{{ button.label }}
		</farm-btn>
	</div>
</template>
<script lang="ts">
import Vue, { PropType, ref } from 'vue';
export default Vue.extend({
	name: 'farm-button-toggle',
	props: {
		buttons: {
			type: Array as PropType<Array<IButtonToggle>>,
			default: () => [],
		},
		input: { type: Number, default: null },
	},
	setup(props, { emit }) {
		const inputVal = ref(props.input);

		const setValue = (index: number) => {
			inputVal.value = index;
			emit('input', inputVal.value);
		};

		return {
			inputVal,
			setValue,
		};
	},
});

interface IButtonToggle {
	label: String;
}
</script>
<style lang="scss" scoped>
@import './ButtonToggle';
</style>
