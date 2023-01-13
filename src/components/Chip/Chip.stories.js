import Chip from './Chip.vue';
import baseThemeColors from '../../configurations/_theme-colors-base.scss';
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
	template: `<div class="chips-container chips-container-full-example">
		<farm-chip color="primary">Chip (100% width)</farm-chip>
	</div>`,
});

export const Dense = () => ({
	template: `<div class="chips-container">
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
	<div class="grid">
		<div class="chips-container" v-for="color in colors">
			<h4>{{ color }}</h4>
			<farm-chip 
				v-for="variation in variations"
				:key="color + '_' + variation"
				:color="color"
				:variation="variation">
					{{ variation || 'base' }}
			</farm-chip>
		</div>

	</div>`,
});

export const ColorsOutlined = () => ({
	data() {
		return {
			colors,
			variations,
		};
	},
	template: `
	<div class="grid">
		<div class="chips-container" v-for="color in colors">
			<h4>{{ color }}</h4>
			<farm-chip 
				v-for="variation in variations"
				:key="color + '_' + variation"
				:color="color"
				:outlined="true"
				:variation="variation">
					{{ variation || 'base' }}
			</farm-chip>
		</div>

	</div>`,
});

export const CustomTypography = () => ({
	template: `<div class="chips-container">
		<farm-chip color="primary">
			<farm-bodytext :type="2">BodyText 2</farm-bodytext>
		</farm-chip>
	</div>`,
});

export const Ellipsis = () => ({
	template: `<div style="width: 100px;">
		<farm-chip color="primary">Very long text here</farm-chip>
	</div>`,
});