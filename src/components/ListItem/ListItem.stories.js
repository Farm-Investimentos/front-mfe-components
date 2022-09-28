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
				selector: <em>farm-listitem</em>`,
			},
		},
	},
};

export const Primary = () => ({
	template: '<farm-listitem>aaa</farm-listitem>',
});

export const HoverColors = () => ({
	data() {
		return {
			colors,
			variations,
		};
	},
	template: `<div style="display: flex; flex-direction: row; flex-wrap: wrap;">
		<div class="chips-container" v-for="color in colors" :key="color" style="width: 33.3%; margin-bottom: 32px;">
			<h4>{{ color }}</h4>
			<farm-listitem
				v-for="variation in variations"
				:key="color + '_' + variation"
				:hoverColor="color"
				:hoverColorVariation="variation"
				>
				{{ color }} {{ variation }}
			</farm-listitem>
		</div>
	</div>`,
});

export const ClickableCursor = () => ({
	template: '<farm-listitem clickable>Clickable cursor</farm-listitem>',
});

export const testLink = () => ({
	template:
		'<farm-listitem to="/admin/xpto" hoverColor="error" hoverColorVariation="lighten">teste me</farm-listitem>',
});
