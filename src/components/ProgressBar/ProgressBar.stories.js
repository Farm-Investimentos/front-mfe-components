// import { withDesign } from 'storybook-addon-designs';
import ProgressBar from './ProgressBar.vue';

export default {
	title: 'Feedback/ProgressBar',
	component: ProgressBar,
	// decorators: [withDesign],
	parameters: {
		viewMode: 'docs',
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/1f84J4m1IBghWhozQvdyyt/%E2%9C%85---Design-System-%7C-v1?node-id=1503%3A227',
		},
		docs: {
			description: {
				component: `ProgressBar<br />
				selector: <em>farm-progressbar</em><br />
				<span style="color: var(--farm-primary-base);">ready for use</span>`,
			},
		},
	},
};

export const Primary = () => ({
	data() {
		return {
			val: 35,
		};
	},
	template: '<farm-progressbar :value="val" />',
});

export const CustomColors = () => ({
	data() {
		return {
			val: 35,
		};
	},
	template: '<farm-progressbar :value="val" background-color="info" value-color="secondary" />',
});

export const CustomHexaColors = () => ({
	data() {
		return {
			val: 35,
		};
	},
	template: '<farm-progressbar :value="val" background-color="#FFFF00" value-color="#00FF00" />',
});
