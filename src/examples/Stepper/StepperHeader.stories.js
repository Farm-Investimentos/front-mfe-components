import { StepperHeader } from '../../main';

const steps = [
	{ label: 'Solicitação de limite', icon: 'book' },
	{ label: 'Lista impeditiva', icon: 'monitor' },
	{ label: 'Lista pré-elegíveis', icon: 'book' },
	{ label: 'Fila de compliance', icon: 'logout' },
];

export default {
	title: 'Examples/Stepper/StepperHeader',
	component: StepperHeader,
	parameters: {
		viewMode: 'docs',
		docs: {
			description: {
				component: `StepperHeader`,
			},
		},
	},
};

export const Primary = () => ({
	components: { 'farm-stepper-header': StepperHeader },
	data() {
		return {
			steps,
			currentStep: 3,
		};
	},
	template: '<farm-stepper-header :steps="steps" :currentStep="currentStep" />',
});

export const Error = () => ({
	components: { 'farm-stepper-header': StepperHeader },
	data() {
		return {
			steps,
			currentStep: 3,
		};
	},
	template:
		'<farm-stepper-header :steps="steps" :currentStep="currentStep" :errorCurrentStepStatus="true" />',
});

export const Vertical = () => ({
	components: { 'farm-stepper-header': StepperHeader },
	data() {
		return {
			steps,
			currentStep: 3,
		};
	},
	template: '<farm-stepper-header :steps="steps" :currentStep="currentStep" vertical />',
});

export const VerticalError = () => ({
	components: { 'farm-stepper-header': StepperHeader },
	data() {
		return {
			steps,
			currentStep: 3,
		};
	},
	template:
		'<farm-stepper-header :steps="steps" :currentStep="currentStep" vertical :errorCurrentStepStatus="true" />',
});

export const Numbers = () => ({
	components: { 'farm-stepper-header': StepperHeader },
	data() {
		return {
			steps: [
				{ label: 'Solicitação de limite' },
				{ label: 'Lista impeditiva' },
				{ label: 'Lista pré-elegíveis' },
				{ label: 'Fila de compliance' },
			],
			currentStep: 2,
		};
	},
	template: '<farm-stepper-header :steps="steps" :currentStep="currentStep" />',
});

Primary.story = {
	name: 'Básico',
};
Vertical.story = {
	name: 'Vertical',
};
Error.story = {
	name: 'Error',
};
VerticalError.story = {
	name: 'Vertical Error',
};
Numbers.story = {
	name: 'Numbers',
};
