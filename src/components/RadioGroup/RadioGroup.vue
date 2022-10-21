<template>
	<div
		:class="{
			'farm-radio-group': true,
			'farm-radio-group--vertical': $props.vertical,
		}"
		:color="color"
	>
		<div
			class="farm-radio-group__item"
			v-for="(button, index) in buttons"
			:key="`farm-radio-group_` + index"
			@click="clicked(button.id)"
		>
			<input
				type="radio"
				name="radio"
				:checked="button.id === innerValue"
				:id="`farm-radio-group_` + index"
				:value="button.id"
				:class="{ checked: button.id === innerValue }"
			/>
			<label> {{ button.label }} </label>
		</div>
	</div>
</template>
<script lang="ts">
import Vue, { PropType, ref, watch } from 'vue';
import validateFormStateBuilder from '../../composition/validateFormStateBuilder';
import IRadioGroup from './IRadioGroup';
export default Vue.extend({
	name: 'farm-radio-group',
	props: {
		/**
		 * Array of buttons
		 */
		buttons: {
			type: Array as PropType<Array<IRadioGroup>>,
			default: [],
		},
		/**
		 * v-model
		 */
		value: {
			required: true,
		},
		/**
		 * Is vertical?
		 */
		vertical: {
			type: Boolean,
			default: false,
		},
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
				| 'gray'
			>,
			default: 'primary',
		}
	},
	setup(props, { emit }) {
		const innerValue = ref(props.value);
		const { errorBucket, valid, validatable } = validateFormStateBuilder();

		const reset = () => {
			innerValue.value = false;
			emit('input', innerValue.value);
		};

		watch(
			() => props.value,
			() => {
				innerValue.value = props.value;
			}
		);

		const clicked = value => {
			innerValue.value = value;
			emit('input', innerValue.value);
		};

		return {
			innerValue,
			errorBucket,
			valid,
			validatable,
			reset,
			clicked,
		};
	},
});
</script>
<style lang="scss" scoped>
@import './RadioGroup.scss';
</style>
