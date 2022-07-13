import { withDesign } from 'storybook-addon-designs';
import ProgressBar from '../components/ProgressBar';

export default {
	title: 'Examples/ProgressBar',
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

export const CustomColors = () => ({
	components: { 'farm-progressbar': ProgressBar },
	data() {
		return {
			val: 35,
		};
	},
	template: '<farm-progressbar :value="val" backgroundColor="accent" valueColor="secondary" />',
});

export const CustomHexaColors = () => ({
	components: { 'farm-progressbar': ProgressBar },
	data() {
		return {
			val: 35,
		};
	},
	template: '<farm-progressbar :value="val" backgroundColor="#FFFF00" valueColor="#00FF00" />',
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
CustomColors.story = {
	name: 'Custom Colors',
	parameters,
};
CustomHexaColors.story = {
	name: 'Custom Hexadecimals Colors',
	parameters,
};
