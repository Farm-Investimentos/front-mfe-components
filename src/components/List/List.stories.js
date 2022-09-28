import { withDesign } from 'storybook-addon-designs';
import List from './List.vue';

export default {
	title: 'Display/List/List',
	component: List,
	decorators: [withDesign],
	parameters: {
		viewMode: 'docs',

		docs: {
			description: {
				component: `List<br />
				selector: <em>farm-list</em>`,
			},
		},
	},
};

export const Primary = () => ({
	template: `<farm-list>
		<farm-listitem clickable hoverColor="primary">primary</farm-listitem>
		<farm-listitem clickable hoverColor="extra-1" hoverColorVariation="lighten">extra 1 lighten</farm-listitem>
		<farm-listitem clickable hoverColor="error" hoverColorVariation="lighten">
			<farm-icon size="sm" color="error">trash-can</farm-icon>
			<farm-typography color="error" tag="span">Error</farm-typography>
		</farm-listitem>
	</farm-list>`,
});
