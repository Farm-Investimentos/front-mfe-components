import Line from './Line.vue';
import baseThemeColors from '../../../configurations/_theme-colors-base.scss';
const colors = Object.keys(baseThemeColors);

export default {
	title: 'Layout/Line',
	component: Line,
	parameters: {
		docs: {
			description: {
				component: `Line<br />
				selector: <em>farm-line</em><br />
				<span style="color: var(--farm-primary-base);">ready for use</span>
				`,
			},
		},
		viewMode: 'docs',
	},
};

export const Primary = () => ({
	template: '<farm-line />',
});

export const NoSpacing = () => ({
	template: '<farm-line :noSpacing="true" />',
});

export const Colors = () => ({
	data() {
		return {
			colors,
		};
	},
	template: `<div>
		<farm-line />
		<farm-line v-for="color of colors":key="'hr_' + color" :color="color" />
	</div>`,
});