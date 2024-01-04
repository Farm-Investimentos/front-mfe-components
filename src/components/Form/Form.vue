<template>
	<form class="farm-form"><slot></slot></form>
</template>
<script lang="ts">
import { onMounted, ref, getCurrentInstance, defineComponent } from 'vue';

type ErrorsBag = Record<number, boolean>;

export default defineComponent({
	name: 'farm-form',
	props: {
		value: { type: [Boolean] },
	},
	inheritAttrs: true,
	setup(props, { emit }) {
		const innerValue = ref(props.value);
		let errorsBag = ref({} as ErrorsBag);
		let validationFields = [];
		const instance = getCurrentInstance().proxy;

		const dispatchError = () => {
			const keys = Object.keys(errorsBag.value);
			const errorsIds = keys.filter(key => !errorsBag.value[key]);
			emit('input', errorsIds.length === 0);
		};

		const watchInput = (field: any) => {
			field.$watch(
				'hasError',
				() => {
					errorsBag.value[field._uid] = field.valid;
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
			errorsBag.value = {};
			recursiveFormField(instance);
			validationFields.forEach(field => {
				watchInput(field);
				field.validate(field.value);
				if (field.makePristine) field.makePristine();
			});
		};

		const restart = () => {
			validationFields = [];
			errorsBag.value = {};

			instance.$nextTick(() => {
				recursiveFormField(instance);

				validationFields.forEach(field => {
					watchInput(field);
				});
			});
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
