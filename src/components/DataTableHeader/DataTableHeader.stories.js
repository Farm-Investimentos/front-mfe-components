import { withDesign } from 'storybook-addon-designs';
import DataTableHeader from './DataTableHeader.vue';

export default {
	title: 'Display/Table/DataTableHeader',
	component: DataTableHeader,
	decorators: [withDesign],
	parameters: {
		docs: {
			description: {
				component: `DataTable Header<br />
				selector: <em>farm-datatable-header</em><br />
				<span style="color: var(--farm-primary-base);">ready for use</span>
				`,
			},
		},
		viewMode: 'docs',
	},
};

export const Primary = () => ({
	data() {
		return {
			headers,
			sortClick: [],
			firstSelected: false,
		};
	},
	template: `<farm-datatable-header :headers="headers" :sortClick="sortClick" :showCheckbox="false" :firstSelected="firstSelected" />`,
});

export const CheckBox = () => ({
	data() {
		return {
			headers: [
				{
					text: 'check',
					sortable: true,
					value: 'data-table-select',
					align: 'left',
				},
				...headers,
			],
			headerProps,
			sortClick: [],
			firstSelected: false,
		};
	},
	template: `<farm-datatable-header :headers="headers" :headerProps="headerProps" :sortClick="sortClick" :firstSelected="firstSelected" :showCheckbox="true" :selectedIndex="1" />`,
});

const headerProps = { someItems: true, everyItem: true };

const headers = [
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
		width: 320,
	},
	{
		text: 'Disponível',
		sortable: false,
		value: 'availableAmount',
		align: 'center',
		width: 160,
	},
];
