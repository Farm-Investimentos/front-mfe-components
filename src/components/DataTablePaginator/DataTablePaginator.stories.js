import DataTablePaginator from './DataTablePaginator.vue';

export default {
    title: 'Example/DataTablePaginator',
    component: DataTablePaginator,
};

export const Primary = () => ({
    components: { DataTablePaginator },
    template: '<DataTablePaginator :totalPages="6" :page="2" />',
});

export const Secondary = () => ({
    components: { DataTablePaginator },
    template: '<DataTablePaginator :hidePerPageOptions="true" :totalPages="6" :page="2" />',
});

Primary.storyName = 'Básico';
Secondary.storyName = 'Sem limite por páginas';
