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
	template: `<div>
		<h3>Colors & variations</h3>
		<div class="chips-container" v-for="color in colors" :key="color">
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
