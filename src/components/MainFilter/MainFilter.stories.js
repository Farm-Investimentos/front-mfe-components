import MainFilter from './MainFilter.vue';

export default {
	title: 'Form/MainFilter',
	component: MainFilter,
	parameters: {
		docs: {
			description: {
				component: `Main Filter<br />
				selector: <em>farm-form-mainfilter</em><br />
				<span style="color: var(--farm-primary-base);">ready for use</span>
				`,
			},
		},
		viewMode: 'docs',
	},
};

export const Primary = () => ({
	template: '<farm-form-mainfilter />',
});

export const Secondary = () => ({
	template: '<farm-form-mainfilter :hasExtraFilters="false" />',
});

export const CustomLabel = () => ({
	template: '<farm-form-mainfilter label="Custom" />',
});

export const WithSlot = () => ({
	template: '<farm-form-mainfilter>With Slot</farm-form-mainfilter>',
});

export const Tooltip = () => ({
	data() {
		return {
			text: 'Some long tooltip text to be placed here!',
		};
	},
	template: `
	<div style="max-width: 480px; padding-top: 32px; margin-left: 32px;">
		<farm-form-mainfilter label="Label" :tooltip="text" />
	</div>`,
});

export const Application = () => ({
	data() {
		return {
			showFilters: true,
		};
	},
	template: `<div>
		<farm-row>
			<farm-col md="6">
				<farm-form-mainfilter @onClick="showFilters = !showFilters" :showFilters="showFilters" />
			</farm-col>
		</farm-row>
		<farm-row v-if="showFilters">
			<farm-col cols="12">
			Extra filters
			</farm-col>
			<farm-col cols="12" md="3">
				<farm-textfield />
			</farm-col>
			<farm-col cols="12" md="3">
				<farm-textfield />
			</farm-col>
			<farm-col cols="12" md="3">
				<farm-textfield />
			</farm-col>
			<farm-col cols="12" md="3">
				<farm-textfield />
			</farm-col>
		</farm-row>
	</div>`,
});