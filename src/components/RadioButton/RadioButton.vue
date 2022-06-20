<template>
	<v-radio-group v-model="selectedVal" :column="isBlock">
		<v-radio
			color="secondary"
			v-for="(item, index) in labels"
			:class="{ 'ml-3': isBlock, 'mr-3': isBlock }"
			:key="index"
			:label="item"
		>
		</v-radio>
	</v-radio-group>
</template>

<script>
import Vue from 'vue';
import { VRadioGroup, VRadio } from 'vuetify/lib/components/VRadioGroup';

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
			require: true,
		},
		/**
		 * Labels to show aside radio buttons
		 */
		labels: {
			type: Array,
			require: true,
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
