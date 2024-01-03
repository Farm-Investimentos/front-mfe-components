<template>
	<form class="farm-form"><slot></slot></form>
</template>
<script lang="ts">
import { onMounted, reactive, ref, getCurrentInstance, defineComponent } from 'vue';

type ErrorsBag = Record<number, boolean>;

export default defineComponent({
	name: 'farm-form',
	props: {
		value: { type: [Boolean] },
	},
	inheritAttrs: true,
	setup(props, { emit }) {
		const innerValue = ref(props.value);
		let errorsBag = reactive({} as ErrorsBag);
		let validationFields = [];
		const instance = getCurrentInstance().proxy;

		const dispatchError = () => {
			const keys = Object.keys(errorsBag);
			const errorsIds = keys.filter(key => !errorsBag[key]);
			emit('input', errorsIds.length === 0);
		};

		const watchInput = (field: any) => {
			field.$watch(
				'hasError',
				() => {
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
				if ($leaf.validate) {
					validationFields.push($leaf);
				} else if ($leaf.$children.length > 1) {
					recursiveFormField($leaf);
				} else if ($leaf.$children[0] && $leaf.$children[0].validate) {
					validationFields.push($leaf.$children[0]);
				} else if ($leaf.validatable) {
					validationFields.push($leaf);
				} else {
					recursiveFormField($leaf);
				}
			});
		};

		onMounted(() => {
			validationFields = [];
			recursiveFormField(instance);
			validationFields.forEach(field => {
				watchInput(field);
			});
		});

		const restartValidation = () => {
			validationFields = [];
			errorsBag = {};
			recursiveFormField(instance);
			validationFields.forEach(field => {
				watchInput(field);
				field.validate(field.value);
				if (field.makePristine) field.makePristine();
			});
		};

		const restart = () => {
			validationFields = [];
			errorsBag = {};
			recursiveFormField(instance);
			validationFields.forEach(field => {
				watchInput(field);
			});
			instance.$nextTick(() => {});
		};

		return {
			innerValue,
			errorsBag,
			reset,
			restartValidation,
			restart,
		};
	},
});
</script>
