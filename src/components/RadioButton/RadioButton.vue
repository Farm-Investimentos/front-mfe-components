<template>
	<v-radio-group v-model="selectedVal" :column="isBlock">
		<v-radio
			color="secondary"
			v-for="(item, index) in items"
			:class="{ 'mx-3': !isBlock }"
			:key="index"
			:label="item.label"
			:value="item.value"
		>
		</v-radio>
	</v-radio-group>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { VRadioGroup, VRadio } from 'vuetify/lib/components/VRadioGroup';

interface RadioButtonItems {
	label: string;
	value: string | number;
}

export default Vue.extend({
	name: 'farm-radio-button',
	components: {
		VRadioGroup,
		VRadio,
	},
	props: {
		/**
		 * Value to change with v-model, if has some value it'ill be the *     initial selected value
		 *  */
		value: {
			required: true,
		},
		/**
		 * Items that contain label and value from each radio.
		 */
		items: {
			type: Array as PropType<Array<RadioButtonItems>>,
			required: true,
		},
		/**
		 * To change if is vertical or horizontal view
		 */
		isBlock: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		selectedVal: {
			get() {
				return this.value;
			},
			set(val) {
				this.$emit('input', val);
			},
		},
	},
});
</script>

<style lang="scss" scoped>
@import './RadioButton.scss';
</style>