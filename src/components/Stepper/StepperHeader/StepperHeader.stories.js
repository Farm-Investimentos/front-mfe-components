import StepperHeader from './StepperHeader.vue';

export default {
	title: 'Navigation/StepperHeader',
	component: StepperHeader,
	parameters: {
		docs: {
			description: {
				component: `Stepper Header<br />
				selector: <em>farm-stepper-header</em>
				`,
			},
		},
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/XDwOALFs1s9uXPFVE7BP9B/%E2%9C%8D---Cr%C3%A9dito?node-id=4029%3A28672',
		},
		viewMode: 'docs',
	},
};

const steps = [
	{ label: 'Solicitação de limite', icon: 'book' },
	{ label: 'Lista impeditiva', icon: 'monitor' },
	{ label: 'Lista pré-elegíveis', icon: 'book' },
	{ label: 'Fila de compliance', icon: 'logout' },
];

export const Primary = () => ({
	data() {
		return {
			steps: [
				{ label: 'Step 1', icon: '' },
				{ label: 'Step 2', icon: 'monitor' },
				{ label: 'Step 3', icon: 'book' },
				{ label: 'Step 4', icon: '' },
			],
			currentStep: 3,
		};
	},
	template: '<farm-stepper-header :steps="steps" :currentStep="currentStep" />',
});

export const Error = () => ({
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
	data() {
		return {
			steps,
			currentStep: 3,
		};
	},
	template: '<farm-stepper-header :steps="steps" :currentStep="currentStep" vertical />',
});

export const VerticalError = () => ({
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
