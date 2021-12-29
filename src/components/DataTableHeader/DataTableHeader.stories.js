import DataTableHeader from './DataTableHeader.vue';

export default {
	title: 'Example/Table/DataTableHeader',
	component: DataTableHeader,
};

export const Primary = () => ({
	components: { DataTableHeader },
	data() {
		return {
			headers: [
				{
					text: 'Grupo',
					sortable: true,
					value: 'name',
					align: 'left',
				},
				{
					text: 'Aprovado',
					sortable: true,
					value: 'approvedAmount',
					align: 'center',
					width: 160,
				},
				{
					text: 'Disponível',
					sortable: false,
					value: 'availableAmount',
					align: 'center',
					width: 160,
				},
			],
			sortClick: [],
			firstSelected: false,
		};
	},
	template: `<DataTableHeader :headers="headers" :sortClick="sortClick" :firstSelected="firstSelected" />`,
});

Primary.storyName = 'Básico';
