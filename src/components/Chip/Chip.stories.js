import Chip from './Chip.vue';
import baseThemeColors from '../../configurations/_theme-colors-base.module.scss';
import('./Chip.stories.scss');

const colors = Object.keys(baseThemeColors);
const variations = ['', 'darken', 'lighten'];

export default {
	title: 'Display/Chips',
	component: Chip,
	parameters: {
		docs: {
			description: {
				component: `Chip<br />
				selector: <em>farm-chip</em><br />
				<span style="color: var(--farm-primary-base);">ready for use</span>
				`,
			},
		},
		viewMode: 'docs',
	},
};

export const Primary = () => ({
	template: `<farm-box>
		<farm-chip color="primary">Chip (100% width)</farm-chip>
	</farm-box>`,
});

export const Dense = () => ({
	template: `<div>
		<farm-chip color="primary" :dense="true">prop</farm-chip>
		<farm-chip color="secondary" dense>attribute</farm-chip>
	</div>`,
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
		<farm-col cols="12" md="4" class="chips-container" v-for="color in colors" :key="'color_' + color">
			<h4>{{ color }}</h4>
			<farm-chip 
				v-for="variation in variations"
				:key="color + '_' + variation"
				:color="color"
				:variation="variation">
					{{ variation || 'base' }}
			</farm-chip>
		</farm-col>

	</farm-row>`,
});

export const ColorsOutlined = () => ({
	data() {
		return {
			colors,
			variations,
		};
	},
	template: `
	<farm-row>
		<farm-col cols="12" md="4" class="chips-container" v-for="color in colors">
			<h4>{{ color }}</h4>
			<farm-chip 
				v-for="variation in variations"
				:key="color + '_' + variation"
				:color="color"
				:outlined="true"
				:variation="variation">
					{{ variation || 'base' }}
			</farm-chip>
		</farm-col>

	</arm-row>`,
});

export const CustomTypography = () => ({
	template: `<div>
		<farm-chip color="primary" dense>
			<farm-bodytext :type="2">BodyText 2</farm-bodytext>
		</farm-chip>
	</div>`,
});

export const Ellipsis = () => ({
	template: `<div style="width: 100px;">
		<farm-chip color="primary">Very long text here</farm-chip>
	</div>`,
});