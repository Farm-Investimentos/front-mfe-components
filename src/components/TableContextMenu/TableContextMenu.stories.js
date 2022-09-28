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
		docs: {
			description: {
				component: `TableContextMenu<br />
				selector: <em>farm-context-menu</em><br />
				<span style="color: green;">ready for use</span>
				`,
			},
		},
		viewMode: 'docs',
	},
};

export const Primary = () => ({
	template: `<div>
		<farm-context-menu :items="[{ label: 'Remover', icon: { color: 'error', type: 'open-in-new' } }]" />
	</div>`,
});

export const Icons = () => ({
	template: `<div>
		<farm-context-menu
			ref="icons"
			:items="[{ label: 'Remover', icon: { color: 'error', type: 'delete' } }]"
		/>
	</div>`,
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
	template: `<div>
		<farm-context-menu ref="multi" :items="items" />
	</div>`,
});
