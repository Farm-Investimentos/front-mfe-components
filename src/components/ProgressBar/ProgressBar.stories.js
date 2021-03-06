import { withDesign } from 'storybook-addon-designs';
import ProgressBar from './ProgressBar.vue';

export default {
	title: 'API/ProgressBar',
	component: ProgressBar,
	decorators: [withDesign],
	parameters: {
		viewMode: 'docs',
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/1f84J4m1IBghWhozQvdyyt/%E2%9C%85---Design-System-%7C-v1?node-id=1503%3A227',
		},
		docs: {
			description: {
				component: `ProgressBar<br />
				selector: <em>farm-progressbar</em>`,
			},
		},
	},
};

export const Primary = () => ({
	components: { 'farm-progressbar': ProgressBar },
	data() {
		return {
			val: 35,
		};
	},
	template: '<farm-progressbar :value="val" />',
});

const parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/1f84J4m1IBghWhozQvdyyt/%E2%9C%85---Design-System-%7C-v1?node-id=1503%3A227',
	},
};

Primary.story = {
	name: 'Basic',
	parameters,
};
