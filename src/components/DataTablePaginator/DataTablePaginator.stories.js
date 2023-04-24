// import { withDesign } from 'storybook-addon-designs';
import DataTablePaginator from './DataTablePaginator.vue';

export default {
	title: 'Display/Table/DataTablePaginator',
	component: DataTablePaginator,
	// decorators: [withDesign],
	parameters: {
		docs: {
			description: {
				component: `Paginator with items per page select<br />
				selector: <em>farm-datatable-paginator</em><br />
				<span style="color: var(--farm-primary-base);">ready for use</span>
				`,
			},
		},
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/1f84J4m1IBghWhozQvdyyt/%E2%9C%8D---Design-System?node-id=1503%3A921',
		},
		viewMode: 'docs',
	},
};

export const Primary = () => ({
	template: '<farm-datatable-paginator :totalPages="190000" :page="1" />',
});

export const HidePerPageOptions = () => ({
	template: '<farm-datatable-paginator :hidePerPageOptions="true" :totalPages="190000" :page="1" />',
});

export const Disabled = () => ({
	template: '<farm-datatable-paginator :disabled="true" :totalPages="19" :page="1" />',
});

export const CustomPerPage = () => ({
	template:
		'<farm-datatable-paginator :perPageOptions="[1, 2, 4, 12, 27]" :initialLimitPerPage="2" :totalPages="19" :page="1" />',
});

export const OnChangeLimitPerPage = () => ({
	methods: {
		onChangeLimitPerPage: (newValue) => {
			alert(newValue);
		}
	},
	template: '<farm-datatable-paginator :totalPages="19" :page="1" @onChangeLimitPerPage="onChangeLimitPerPage" />',
});
