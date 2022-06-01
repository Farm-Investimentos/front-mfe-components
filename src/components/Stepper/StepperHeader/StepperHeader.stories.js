import StepperHeader from './StepperHeader.vue';

export default {
	title: 'API/Stepper/StepperHeader',
	component: StepperHeader,
};

export const Primary = () => ({
	components: { StepperHeader },
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
	template: '<StepperHeader :steps="steps" :currentStep="currentStep" />',
});

export const Error = () => ({
	components: { StepperHeader },
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
	template: '<StepperHeader :steps="steps" :currentStep="currentStep" :errorCurrentStepStatus="true" />',
});

export const Vertical = () => ({
	components: { StepperHeader },
	data() {
		return {
			steps: [
				{ label: 'Step 1', icon: '' },
				{ label: 'Step 2', icon: '' },
				{ label: 'Step 3', icon: '' },
			],
		};
	},
	template: '<StepperHeader :steps="steps" vertical />',
});

Primary.storyName = 'Básico';
Vertical.storyName = 'Vertical';
Error.storyName = 'Com Erro';
