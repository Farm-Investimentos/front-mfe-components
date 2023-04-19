import { withDesign } from 'storybook-addon-designs';
import { VDataTable } from 'vuetify/lib/components';
import DataTableEmptyWrapper from '../components/DataTableEmptyWrapper';
import DataTablePaginator from '../components/DataTablePaginator';

const headers = [
	{
		text: 'ID',
		sortable: true,
		value: 'id',
		width: 80,
		align: 'left',
	},
	{
		text: 'Name',
		sortable: false,
		value: 'id',
		width: 160,
		align: 'left',
	},
];

export default {
	title: 'Display/Table/Examples',
	decorators: [withDesign],
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/1f84J4m1IBghWhozQvdyyt/%E2%9C%8D---Design-System?node-id=1505%3A372',
		},
		viewMode: 'docs',
		docs: {
			description: {
				component: `Data Table (inherit from Vuetify)`,
			},
		},
	},
};

export const TableNoData = () => ({
	components: { 'v-data-table': VDataTable },
	data() {
		return {
			headers,
		};
	},
	template: `<div>
	
	<v-data-table
        hide-default-footer
		id="v-data-table--default"
		:headers="headers"
	>
    <template slot="no-data">
        <DataTableEmptyWrapper
            subtitle="Tente filtrar novamente sua pesquisa"
        />
    </template>
    </v-data-table>
	</div>`,
});

export const TableSampleData = () => ({
	components: { 'v-data-table': VDataTable },
	data() {
		return {
			headers,
			items: [
				{ id: 1, name: 'name 1' },
				{ id: 2, name: 'name 2' },
				{ id: 3, name: 'name 3' },
			],
		};
	},
	template: `<div>
	<v-data-table
        hide-default-footer
		id="v-data-table--default"
		:headers="headers"
        :items="items"
	>
    
    </v-data-table>
	</div>`,
});

export const TableSampleDataWithCheckbox = () => ({
	components: { 'v-data-table': VDataTable },
	data() {
		return {
			headers,
			items: [
				{ id: 1, name: 'name 1' },
				{ id: 2, name: 'name 2' },
				{ id: 3, name: 'name 3' },
			],
			selectedItems: [],
		};
	},
	template: `<div>
	<v-data-table
        hide-default-footer
		id="v-data-table--default"
		:headers="headers"
        :items="items"
		show-select
		v-model="selectedItems"
	>
    </v-data-table>
	</div>`,
});

export const TableSampleLocalPagination = () => ({
	components: { 'v-data-table': VDataTable, DataTableEmptyWrapper, DataTablePaginator },
	data() {
		return {
			headers,
			items: [
				{ id: 1, name: 'name 1' },
				{ id: 2, name: 'name 2' },
				{ id: 3, name: 'name 3' },
				{ id: 4, name: 'name 4' },
				{ id: 5, name: 'name 5' },
				{ id: 6, name: 'name 6' },
				{ id: 7, name: 'name 7' },
				{ id: 8, name: 'name 8' },
				{ id: 9, name: 'name 9' },
				{ id: 10, name: 'name 10' },
				{ id: 11, name: 'name 11' },
				{ id: 12, name: 'name 12' },
			],
			pagination: {
				page: 1,
				itemsPerPage: 10,
				pages: 2,
			},
		};
	},
	methods: {
		onChangePage(newPage) {
			this.pagination.page = newPage;
		},
	},
	template: `<div>
	<v-data-table
        hide-default-footer
		id="v-data-table--default"
		:headers="headers"
        :items="items"
		:options.sync="pagination"
	>
    	<template v-slot:footer>
			<DataTablePaginator
				class="my-6"
				hidePerPageOptions
				:initialLimitPerPage="pagination.itemsPerPage"
				:page="pagination.page"
				:totalPages="pagination.pages"
				@onChangePage="onChangePage"
			/>
		</template>
    </v-data-table>
	</div>`,
});

export const TableSampleDataWithFarmCheckbox = () => ({
	components: { 'v-data-table': VDataTable },
	data() {
		return {
			headers,
			items: [
				{ id: 1, name: 'name 1' },
				{ id: 2, name: 'name 2' },
				{ id: 3, name: 'name 3' },
			],
			selectedItems: [],
		};
	},
	methods: {
		onSelect({ item }) {
			if (item.id === 2)
				this.selectedItems = [...this.selectedItems].filter(
					innerItem => innerItem.id !== 2
				);
		},
		isItemSelected(item) {
			return this.selectedItems.some(innerItem => innerItem.id === item.id);
		},
	},
	template: `<div>{{selectedItems}}
	<v-data-table
        hide-default-footer
		id="v-data-table--default"
		v-model="selectedItems"
		show-select
		:headers="headers"
        :items="items"
		@item-selected="onSelect"
	>
		<template v-slot:item.data-table-select="{ isSelected, select, item }">
			<farm-checkbox :value="item.id" :check="isItemSelected(item)" @input="select($event)"/>
		</template>
    </v-data-table>
	</div>`,
});
