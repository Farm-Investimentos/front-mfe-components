import { Container, ContainerFooter, StepperHeader } from '../../main.ts';

export default {
	title: 'Examples/Container',
	parameters: {
		docs: {
			description: {
				component: `Container<br />
selector: <em>farm-container</em>
`,
			},
		},
		viewMode: 'docs',
	},
};

export const Primary = () => ({
	components: { 'farm-container': Container },
	template: '<farm-container>content</farm-container>',
});

export const Secondary = () => ({
	components: { 'farm-container': Container, 'farm-container-footer': ContainerFooter },
	template: `
	<farm-container>
		Content
		<farm-container-footer>
			Footer content
		</farm-container-footer>
	</farm-container>
`,
});

export const Tertiary = () => ({
	components: {
		'farm-container': Container,
		'farm-container-footer': ContainerFooter,
		'farm-stepper-header': StepperHeader,
	},
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
	template: `
	<farm-container>
		<farm-stepper-header :steps="steps" :currentStep="currentStep" />
	</farm-container>
`,
});

Primary.storyName = 'Básico';

Secondary.storyName = 'Footer';

Tertiary.storyName = 'Stepper';
