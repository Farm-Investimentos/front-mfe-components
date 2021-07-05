import DataTablePaginator from './DataTablePaginator.vue';

export default {
    title: 'Example/DataTablePaginator',
    component: DataTablePaginator,
};

export const Primary = () => ({
    components: { DataTablePaginator },
    template: '<DataTablePaginator :totalPages="6" />',
});

Primary.storyName = 'Básico';
