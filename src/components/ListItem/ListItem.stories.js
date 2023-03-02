import { withDesign } from 'storybook-addon-designs';
import ListItem from './ListItem.vue';

import baseThemeColors from '../../configurations/_theme-colors-base.scss';

const colors = Object.keys(baseThemeColors);
const variations = ['base', 'darken', 'lighten'];

export default {
	title: 'Display/List/ListItem',
	component: ListItem,
	decorators: [withDesign],
	parameters: {
		viewMode: 'docs',
		docs: {
			description: {
				component: `ListItem<br />
				selector: <em>farm-listitem</em><br />
				<span style="color: var(--farm-primary-base);">ready for use</span>`,
			},
		},
	},
};

export const Primary = () => ({
	template: `<farm-listitem>
	Item
	</farm-listitem>`,
});

export const HoverColors = () => ({
	data() {
		return {
			colors,
			variations,
		};
	},
	methods: {
		getIconVariation(variation) {
			if (variation === 'base' || variation === 'lighten') {
				return 'darken';
			}
			return 'base';
		},
	},
	template: `<farm-row>
		<farm-col v-for="color in colors" :key="color" cols="12" md="4" class="mb-4">
			<h4>{{ color }}</h4>
			<farm-listitem
				v-for="variation in variations"
				:key="color + '_' + variation"
				:hoverColor="color"
				:hoverColorVariation="variation"
				>
				<farm-icon
					:color="color"
					:variation="getIconVariation(variation)"
				>
					book
				</farm-icon>
				{{ color }} {{ variation }}
			</farm-listitem>
		</farm-col>
	</farm-row>`,
});

export const Clickable = () => ({
	methods: {
		onClick() {
			alert('Clicked');
		},
	},
	template: `<farm-listitem
			clickable
			hoverColor="error"
			hoverColorVariation="lighten"
			@click="onClick"
		>
			try me
		</farm-listitem>`,
});
