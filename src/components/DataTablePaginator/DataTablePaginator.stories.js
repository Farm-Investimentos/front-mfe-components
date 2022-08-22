import { withDesign } from 'storybook-addon-designs';
import DataTablePaginator from './DataTablePaginator.vue';

export default {
	title: 'API/Table/DataTablePaginator',
	component: DataTablePaginator,
	decorators: [withDesign],
	parameters: {
		docs: {
			description: {
				component: `Paginator with items per page select<br />
				selector: <em>farm-datatable-paginator</em>
				`,
			},
		},
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/1f84J4m1IBghWhozQvdyyt/%E2%9C%8D---Design-System?node-id=1503%3A921',
		},
		viewMode: 'docs',
	},
};

export const Primary = () => ({
	components: { DataTablePaginator },
	data() {
		return {
			totalPages: null
		}
	},
	template: '<DataTablePaginator :totalPages="totalPages" :page="1" />',
	mounted() {
		setTimeout(() => {
			this.totalPages = 2;
		}, 1000)
	}
});

/*
export const Secondary = () => ({
	components: { DataTablePaginator },
	template: '<DataTablePaginator :hidePerPageOptions="true" :totalPages="19" :page="1" />',
});

export const Disabled = () => ({
	components: { DataTablePaginator },
	template: '<DataTablePaginator :disabled="true":totalPages="19" :page="1" />',
});

export const CustomPerPage = () => ({
	components: { DataTablePaginator },
	template:
		'<DataTablePaginator :perPageOptions="[1, 2, 4, 12, 27]" :totalPages="19" :page="1" />',
});

const parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/1f84J4m1IBghWhozQvdyyt/%E2%9C%8D---Design-System?node-id=1503%3A921',
	},
};

Primary.story = {
	name: 'Básico',
	parameters,
};
Secondary.story = {
	name: 'Sem limite por páginas',
	parameters,
};
Disabled.story = {
	name: 'Desabilitado',
	parameters,
};
CustomPerPage.story = {
	name: 'Lista de registros por página customizada',
	parameters,
};
*/
