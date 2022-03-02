import TableContextMenu from './TableContextMenu';

export default {
	title: 'API/TableContextMenu',
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

Primary.storyName = 'Básico';
Icons.storyname = 'Ícone';
