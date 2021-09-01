import DataTableEmptyWrapper from './DataTableEmptyWrapper.vue';

export default {
    title: 'Example/Table/DataTableEmptyWrapper',
    component: DataTableEmptyWrapper,
};

export const Primary = () => ({
    components: { DataTableEmptyWrapper },
    template: '<DataTableEmptyWrapper />',
});


export const CustomTitles = () => ({
    components: { DataTableEmptyWrapper },
    template: '<DataTableEmptyWrapper title="Título customizado" subtitle="Subtítulo customizado" />',
});


Primary.storyName = 'Básico';
CustomTitles.storyName = "Títulos"
