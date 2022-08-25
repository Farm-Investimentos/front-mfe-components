import { withDesign } from 'storybook-addon-designs';
import Label from './Label.vue';

export default {
	title: 'Form/Label',
	component: Label,
	decorators: [withDesign],
	parameters: {
		viewMode: 'docs',
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/1f84J4m1IBghWhozQvdyyt/%E2%9C%85---Design-System-%7C-v1?node-id=1503%3A227',
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
	template: '<farm-label>Label</farm-label>',
});

export const Required = () => ({
	template: '<farm-label :required="true">Label</farm-label>',
});
