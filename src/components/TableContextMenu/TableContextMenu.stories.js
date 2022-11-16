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
				<span style="color: var(--farm-primary-base);">ready for use</span>
				`,
			},
		},
		viewMode: 'docs',
	},
};

export const Primary = () => ({
	template: `<div style="padding-left: 80px">
		<farm-context-menu :items="[{ label: 'Remover', icon: { color: 'error', type: 'open-in-new' } }]" />
	</div>`,
});

export const Disabled = () => ({
	template: `<div style="padding-left: 80px">
		<farm-context-menu disabled :items="[{ label: 'Remover', icon: { color: 'error', type: 'open-in-new' } }]" />
	</div>`,
});

export const Icons = () => ({
	template: `<div style="padding-left: 80px">
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
				{ label: 'Novo', icon: { type: 'open-in-new' } },
				{ label: 'Editar', icon: { color: 'secondary', type: 'open-in-new' } },
				{ label: 'Remover', icon: { color: 'error', type: 'delete' } },
			],
		};
	},
	template: `<div style="padding-left: 80px">
		<farm-context-menu ref="multi" :items="items" />
	</div>`,
});

export const ClickHandler = () => ({
	data() {
		return {
			editItem: () => {
				alert('Click handler');
			},
		};
	},
	template: `<div style="padding-left: 80px">
		<farm-context-menu :items="[{ label: 'Click me', icon: { type: 'open-in-new' }, handler: 'edit' }]" @edit="editItem()" />
	</div>`,
});

export const OnRightSide = () => ({
	data() {
		return {
			items: [
				{ label: 'Novo', icon: { type: 'open-in-new' } },
				{
					label: 'Nome bem longo sem quebrar linha',
					icon: { color: 'secondary', type: 'open-in-new' },
				},
				{ label: 'Remover', icon: { color: 'error', type: 'delete' } },
			],
		};
	},
	template: `<div style="padding-left: 80px; display: flex; justify-content: end;">
		<farm-context-menu ref="multi" :items="items" />
	</div>`,
});
