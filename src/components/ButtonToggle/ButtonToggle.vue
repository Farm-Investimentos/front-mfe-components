<template>
	<div class="farm-button-toggle">
		<farm-btn
			v-for="(button, index) in buttons"
			:key="`button_toggle_` + index"
			color="gray"
			outlined
		>
			{{ button.label }}
		</farm-btn>
	</div>
</template>
<script lang="ts">
import Vue, { PropType } from 'vue';
export default Vue.extend({
	name: 'farm-button-toggle',
	props: {
		buttons: {
			type: Array as PropType<Array<IButtonToggle>>,
			default: () => [],
		},
	},
	setup() {},
});

interface IButtonToggle {
	label: String;
}
</script>
<style lang="scss" scoped>
@import './ButtonToggle';
</style>
