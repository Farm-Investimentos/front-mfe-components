import DataTablePaginator from './DataTablePaginator.vue';

export default {
	title: 'API/Table/DataTablePaginator',
	component: DataTablePaginator,
};

export const Primary = () => ({
	components: { DataTablePaginator },
	template: '<DataTablePaginator :totalPages="6" :page="2" />',
});

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

Primary.storyName = 'Básico';
Secondary.storyName = 'Sem limite por páginas';
Disabled.storyName = 'Desabilitado';
CustomPerPage.storyName = 'Lista de registros por página customizada';
