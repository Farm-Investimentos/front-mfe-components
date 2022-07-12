import { withDesign } from 'storybook-addon-designs';
import { Label } from '../main.ts';

export default {
	title: 'Examples/Form/Label',
	decorators: [withDesign],
	component: Label,
	parameters: {
		viewMode: 'docs',
		design: {
			type: 'figma',
			url:
				'https://www.figma.com/file/1f84J4m1IBghWhozQvdyyt/%E2%9C%85---Design-System-%7C-v1?node-id=1503%3A227',
		},
		docs: {
			description: {
				component: `Label<br />
				selector: <em>farm-label</em>`,
			},
		},
	},
};

export const Primary = () => ({
	components: { 'farm-label': Label },
	template: '<farm-label>Label</farm-label>',
});
export const Required = () => ({
	components: { 'farm-label': Label },
	template: '<farm-label :required="true">Label</farm-label>',
});

Primary.storyName = 'Basic';
Required.storyName = 'Required';
