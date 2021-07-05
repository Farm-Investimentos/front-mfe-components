import DataTableEmptyWrapper from './DataTableEmptyWrapper.vue';

export default {
    title: 'Example/DataTableEmptyWrapper',
    component: DataTableEmptyWrapper,
};

export const Primary = () => ({
    components: { DataTableEmptyWrapper },
    template: '<DataTableEmptyWrapper />',
});

Primary.storyName = 'Básico';
