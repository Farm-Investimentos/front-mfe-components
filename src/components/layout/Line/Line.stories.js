import Line from './Line.vue';
import baseThemeColors from '../../../configurations/_theme-colors-base.module.scss';
const colors = Object.keys(baseThemeColors);
const variations = ['base', 'lighten', 'darken'];

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
			variations,
		};
	},
	template: `
	<farm-row>
		<farm-col cols="12">
			<h4 style="margin-top:15px">Default</h4>
			<farm-line />
		</farm-col>
		<farm-col cols="12" v-for="color in colors" :key="'color_' + color">
			<h4 style="margin-top:15px">{{ color }}</h4>
			<farm-line 
				v-for="variation in variations"
				:key="color + '_' + variation"
				:color="color"
				:variation="variation" 
			/>
		</farm-col>
	</farm-row>`,
});
