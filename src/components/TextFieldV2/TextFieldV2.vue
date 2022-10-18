<template>
	<div
		class="farm-textfield"
		:class="{
			'touched-success': isSuccess,
			'touched-error': isError,
			'touched-disabled': disabled,
		}"
	>
		<div class="farm-textfield--input">
			<button v-if="iconLeft" @click="$emit('onClickIconLeft')">
				<farm-icon>{{ iconLeft }}</farm-icon>
			</button>

			<input v-bind="$attrs" v-model="innerValue" :disabled="disabled" />

			<button v-if="iconRight" @click="$emit('onClickIconRight')">
				<farm-icon>{{ iconRight }}</farm-icon>
			</button>
		</div>

		<span class="farm-textfield--text" v-if="errorMessage">{{ errorMessage }}</span>
		<span class="farm-textfield--text" v-if="hintText && !errorMessage">{{ hintText }}</span>
	</div>
</template>

<script lang="ts">
import Vue, { ref, watch } from 'vue';

export default Vue.extend({
	name: 'farm-textfield-v2',
	inheritAttrs: true,
	props: {
		/**
		 * v-model binding
		 */
		value: {},
		/**
		 * Show icon left
		 */
		iconLeft: String,
		/**
		 * Show icon right
		 */
		iconRight: String,
		/**
		 * Show hint text
		 */
		hintText: String,
		/**
		 * Show input disable
		 */
		disabled: {
			type: Boolean,
			default: false,
		},

		errorMessage: String,
	},
	setup(props, { emit }) {
		const innerValue = ref(props.value);

		watch(
			() => props.value,
			() => {
				innerValue.value = props.value;
			}
		);

		watch(
			() => innerValue.value,
			() => {
				emit('input', innerValue.value);
			}
		);

		return {
			innerValue,
		};
	},
});
</script>
<style lang="scss" scoped>
@import 'TextFieldV2';
</style>
