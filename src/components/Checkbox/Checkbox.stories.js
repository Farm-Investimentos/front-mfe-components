import Checkbox from './Checkbox';

export default {
	title: 'Form/Checkbox',
	component: Checkbox,
	parameters: {
		docs: {
			description: {
				component: `Checkbox<br />
				selector: <em>farm-checkbox</em>
				`,
			},
		},
		viewMode: 'docs',
	},
};

export const Primary = () => ({
	data() {
		return {
			isChecked: false,
		};
	},
	template: `<div>
		<farm-checkbox v-model="isChecked" />
	</div>`,
});

export const DefaultTrue = () => ({
	data() {
		return {
			isChecked: true,
		};
	},
	template: `<div>
		<farm-checkbox v-model="isChecked" />
	</div>`,
});

export const WithLabel = () => ({
	data() {
		return {
			isChecked: false,
		};
	},
	template: `<div>
		<farm-checkbox v-model="isChecked" label="custom label" />
	</div>`,
});

export const Disabled = () => ({
	data() {
		return {
			isChecked: true,
			notIsChecked: false,
		};
	},
	template: `<div>
		<farm-checkbox v-model="isChecked" :disabled="true" /><br />
		<farm-checkbox v-model="notIsChecked" :disabled="true" />
	</div>`,
});
