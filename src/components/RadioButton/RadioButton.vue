<template>
	<v-radio-group v-model="selectedVal" :column="isBlock">
		<v-radio
			:class="`${isBlock ? '' : 'ml-3 mr-3'}`"
			v-for="(n, i) in labels"
			:key="i"
			:label="n"
			color="secondary"
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
		 * value to change with v-model
		 *  */
		value: {
			require: true,
		},
		/**
		 * labels to show radio buttons aside
		 */
		labels: {
			type: Array,
			require: true,
		},
		/**
		 * to change if is vertical or horizontal show
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
