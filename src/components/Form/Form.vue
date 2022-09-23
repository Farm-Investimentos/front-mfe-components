<template>
	<form class="farm-form"><slot></slot></form>
</template>
<script lang="ts">
import Vue, { onMounted, reactive, ref, getCurrentInstance } from 'vue';

type ErrorsBag = Record<number, boolean>;

export default Vue.extend({
	name: 'farm-form',
	props: {
		value: { type: [Array, Boolean], required: true },
	},
	inheritAttrs: true,
	setup(props, { emit }) {
		const innerValue = ref(props.value);
		const errorsBag = reactive({} as ErrorsBag);
		let validationFields = [];

		const dispatchError = () => {
			const keys = Object.keys(errorsBag);
			const errorsIds = keys.filter(key => !errorsBag[key]);
			emit('input', errorsIds.length === 0);
		};

		const watchInput = (field: any) => {
			field.$watch(
				'hasError',
				_ => {
					errorsBag[field._uid] = field.valid;
					dispatchError();
				},
				{ immediate: true }
			);
		};

		const reset = () => {
			validationFields.forEach(field => {
				field.reset();
			});
		};

		const recursiveFormField = $node => {
			$node.$children.forEach($leaf => {
				if ($leaf.$children.length > 1) {
					recursiveFormField($leaf);
				} else if ($leaf.$children[0] && $leaf.$children[0].validate) {
					validationFields.push($leaf.$children[0]);
				}
			});
		};

		onMounted(() => {
			recursiveFormField(getCurrentInstance().proxy);
			validationFields.forEach(field => {
				watchInput(field);
			});
		});

		return {
			innerValue,
			errorsBag,
			reset,
		};
	},
});
</script>
