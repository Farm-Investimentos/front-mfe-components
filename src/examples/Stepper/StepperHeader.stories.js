import { StepperHeader } from '../../main';

const steps = [
	{ label: 'Step 1', icon: '' },
	{ label: 'Step 2', icon: 'monitor' },
	{ label: 'Step 3', icon: 'book' },
	{ label: 'Step 4', icon: '' },
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
	components: { StepperHeader },
	data() {
		return {
			steps,
			currentStep: 3,
		};
	},
	template: '<StepperHeader :steps="steps" :currentStep="currentStep" />',
});

export const Error = () => ({
	components: { StepperHeader },
	data() {
		return {
			steps,
			currentStep: 3,
		};
	},
	template:
		'<StepperHeader :steps="steps" :currentStep="currentStep" :errorCurrentStepStatus="true" />',
});

export const Vertical = () => ({
	components: { StepperHeader },
	data() {
		return {
			steps,
			currentStep: 3,
		};
	},
	template: '<StepperHeader :steps="steps" :currentStep="currentStep" vertical />',
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
