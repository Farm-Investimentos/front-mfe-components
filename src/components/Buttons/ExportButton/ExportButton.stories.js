import ExportButton from './ExportButton.vue';

export default {
	title: 'Buttons/Export',
	component: ExportButton,
	parameters: {
		docs: {
			description: {
				component: `Export Button<br />
				selector: <em>farm-btn-export</em><br />
				<span style="color: var(--farm-primary-base);">ready for use</span>
				`,
			},
		},
		viewMode: 'docs',
	},
};

export const Primary = () => ({
	template: '<farm-btn-export />',
});

export const Disabled = () => ({
	template: '<farm-btn-export :disabled="true" />',
});

export const List = () => ({
	template: `<farm-btn-export :optionsList="[{ key: 1, label: 'XLS teste'}, { key: 2, label: 'CSV teste novo'}]" />`,
});

export const CustomColor = () => ({
	template: `<div>
		<farm-btn-export color="info" />
		<farm-btn-export color="info" :optionsList="[{ key: 1, label: 'XLS teste'}, { key: 2, label: 'CSV teste novo'}]" />
	</div>`,
});
