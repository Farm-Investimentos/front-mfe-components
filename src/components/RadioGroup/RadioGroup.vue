<template>
	<div
		:class="{
			'farm-radio-group': true,
			'farm-radio-group--column': $props.column,
		}"
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
				:style="cssVars"
				:value="button.id"
				:class="{ checked: button.id === innerValue }"
			/>
			<label> {{ button.label }} </label>
		</div>
	</div>
</template>
<script lang="ts">
import validateFormStateBuilder from '../../composition/validateFormStateBuilder';
import Vue, { PropType, ref, watch } from 'vue';
import IRadioGroup from './IRadioGroup';
export default Vue.extend({
	name: 'farm-radio-group',
	props: {
		/**
		 * Array of buttons
		 */
		buttons: {
			type: Array as PropType<Array<IRadioGroup>>,
			default: () => [],
		},
		/**
		 * v-model
		 */
		value: {
			required: true,
		},
		column: {
			type: Boolean,
			default: false,
		},
		color: {
			type: String,
			default: '#00B493',
		},
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
	computed: {
		cssVars() {
			return {
				'--radio-group-color': this.color,
			};
		},
	},
});
</script>
<style lang="scss" scoped>
@import './RadioGroup.scss';
</style>
