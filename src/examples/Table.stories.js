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
];

export default {
	title: 'Examples/Table',
	decorators: [withDesign],
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
			items: [{ id: 1 }, { id: 2 }, { id: 3 }],
		};
	},
	template: `<div>
	<v-data-table
        hide-default-footer
		:headers="headers"
        :items="items"
	>
    
    </v-data-table>
	</div>`,
});

TableNoData.story = {
	name: 'No data',
	parameters: {
		design: {
			type: 'figma',
			url:
				'https://www.figma.com/file/rkkAsX4IP0tzv1udIDXlqe/%E2%9C%8D---Onboarding---PJ?node-id=2867%3A10594',
		},
	},
};

TableSampleData.story = {
	name: 'With data',
	parameters: {
		design: {
			type: 'figma',
			url:
				'https://www.figma.com/file/rkkAsX4IP0tzv1udIDXlqe/%E2%9C%8D---Onboarding---PJ?node-id=2867%3A10594',
		},
	},
};

