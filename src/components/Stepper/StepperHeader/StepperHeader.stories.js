import StepperHeader from './StepperHeader.vue';

export default {
	title: 'API/Stepper/StepperHeader',
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

Primary.storyName = 'Básico';

//
