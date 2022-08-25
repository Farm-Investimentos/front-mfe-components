<template>
	<div class="farm-checkbox__container">
		<span
			:class="{ 'farm-checkbox': true, 'farm-checkbox--checked': innerValue }"
			@click="toggleValue"
		>
			<farm-icon size="sm" v-if="innerValue">check</farm-icon>
		</span>
		<farm-label v-if="label">
            {{ label }}
        </farm-label>
	</div>
</template>
<script lang="ts">
import Vue, { ref } from 'vue';

export default Vue.extend({
	name: 'farm-checkbox',
	props: {
		/**
		 * v-model binding
		 */
		value: { type: Boolean, required: true },
		/**
		 * Label
		 */
		label: { type: String, default: null },
	},
	setup(props, { emit }) {
		const innerValue = ref(props.value);
		const { label } = props;

		const toggleValue = () => {
			innerValue.value = !innerValue.value;
			emit('input', innerValue.value);
		};

		return {
			innerValue,
			label,
			toggleValue,
		};
	},
});
</script>
<style lang="scss" scoped>
@import './Checkbox.scss';
</style>
