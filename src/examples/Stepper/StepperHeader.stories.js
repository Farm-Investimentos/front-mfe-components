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

export const VerticalError = () => ({
	components: { StepperHeader },
	data() {
		return {
			steps,
			currentStep: 3,
		};
	},
	template: '<StepperHeader :steps="steps" :currentStep="currentStep" vertical :errorCurrentStepStatus="true" />',
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