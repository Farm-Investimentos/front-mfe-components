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

export const ClickListener = () => ({
	methods: {
		onClick() {
			alert('Clicked');
		}
	},
	template:
		`<farm-listitem
			clickable
			hoverColor="error"
			hoverColorVariation="lighten"
			@click="onClick"
		>
			try me
		</farm-listitem>`,
});
