import DataTableEmptyWrapper from './DataTableEmptyWrapper.vue';

export default {
	title: 'Display/Table/DataTableEmptyWrapper',
	component: DataTableEmptyWrapper,
};

export const Primary = () => ({
	template: '<DataTableEmptyWrapper />',
});

export const CustomTitles = () => ({
	template:
		'<DataTableEmptyWrapper title="Título customizado" subtitle="Subtítulo customizado" />',
});
