import DataTableEmptyWrapper from './DataTableEmptyWrapper.vue';

export default {
	title: 'Display/Table/DataTableEmptyWrapper',
	component: DataTableEmptyWrapper,
	parameters: {
		docs: {
			description: {
				component: `Message for empty list/data<br />
				selector: <em>farm-emptywrapper</em><br />
				<span style="color: var(--farm-primary-base);">ready for use</span>
				`,
			},
		},
		viewMode: 'docs',
	},
};

export const Primary = () => ({
	template: '<farm-emptywrapper />',
});

export const CustomTitles = () => ({
	template:
		'<farm-emptywrapper title="Título customizado" subtitle="Subtítulo customizado" />',
});

export const NoBorder = () => ({
	template: '<farm-emptywrapper :bordered="false" />',
});