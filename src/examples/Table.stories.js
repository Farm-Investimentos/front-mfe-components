import { withDesign } from 'storybook-addon-designs';
import { DataTableEmptyWrapper } from '../main';

const headers = [
	{
		text: 'ID',
		sortable: false,
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
	title: 'Examples/Table',
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
	components: {
		DataTableEmptyWrapper,
	},
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
	components: {
		DataTableEmptyWrapper,
	},
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

TableNoData.story = {
	name: 'No data',
};

TableSampleData.story = {
	name: 'With data',
};
