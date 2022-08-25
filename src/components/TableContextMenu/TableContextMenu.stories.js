import TableContextMenu from './TableContextMenu';
import { withDesign } from 'storybook-addon-designs';

export default {
	title: 'Navigation/TableContextMenu',
	decorators: [withDesign],
	component: TableContextMenu,
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/rkkAsX4IP0tzv1udIDXlqe/%E2%9C%8D---Onboarding---PJ?node-id=3516%3A11516',
		},
	},
};

export const Primary = () => ({
	template: `<farm-context-menu :items="[{ label: 'Remover' }]" />`,
});

export const Icons = () => ({
	template: `<farm-context-menu
		:items="[{ label: 'Remover', icon: { color: 'error', type: 'delete' } }]" />`,
});

export const Multi = () => ({
	data() {
		return {
			items: [
				{ label: 'Novo', icon: { color: 'grey', type: 'open-in-new' } },
				{ label: 'Editar', icon: { color: 'secondary', type: 'open-in-new' } },
				{ label: 'Remover', icon: { color: 'error', type: 'delete' } },
			],
		};
	},
	template: `<farm-context-menu :items="items" />`,
});
