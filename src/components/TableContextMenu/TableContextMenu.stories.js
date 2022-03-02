import TableContextMenu from './TableContextMenu';
import { withDesign } from 'storybook-addon-designs';

export default {
	title: 'API/TableContextMenu',
	decorators: [withDesign],
	component: TableContextMenu,
};

export const Primary = () => ({
	components: { TableContextMenu },
	template: `<TableContextMenu :items="[{ label: 'Remover' }]" />`,
});

export const Icons = () => ({
	components: { TableContextMenu },
	template: `<TableContextMenu :items="[{ label: 'Remover', icon: { color: 'error', type: 'delete' } }]" />`,
});

export const Multi = () => ({
	components: { TableContextMenu },
	template: `<TableContextMenu :items="[{ label: 'Novo', icon: { color: 'grey', type: 'open-in-new' } }, { label: 'Editar', icon: { color: 'secondary', type: 'open-in-new' } }, { label: 'Remover', icon: { color: 'error', type: 'delete' } }]" />`,
});

Primary.storyName = 'Básico';
Icons.storyname = 'Ícone';

Multi.story = {
	name: 'Múltiplos Itens',
	parameters: {
		design: {
			type: 'figma',
			url:
				'https://www.figma.com/file/rkkAsX4IP0tzv1udIDXlqe/%E2%9C%8D---Onboarding---PJ?node-id=2293%3A9180',
		},
	},
};
