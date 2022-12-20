import Switch from './Switcher';

export default {
	title: 'Form/Switcher',
	component: Switch,
	parameters: {
		viewMode: 'docs',
		docs: {
			description: {
				component: `Switcher<br />
				selector: <em>farm-switcher</em><br />
				<span style="color: var(--farm-primary-base);">ready for use</span>`,
			},
		},
	},
};

export const Primary = () => ({
	data() {
		return {
			selectedValue: true,
		};
	},
	template: `<div>
	<farm-switcher v-model="selectedValue" block />
	</div>`,
});

export const OnDisabled = () => ({
	data() {
		return {
			selectedValue: true,
		};
	},
	template: `<div>
	<farm-switcher v-model="selectedValue" block :disabled="true" />
	</div>`,
});

export const Off = () => ({
	data() {
		return {
			selectedValue: false,
		};
	},
	template: `<div>
	<farm-switcher v-model="selectedValue" block :disabled="false" />
	</div>`,
});

export const OffDisabled = () => ({
	data() {
		return {
			selectedValue: false,
		};
	},
	template: `<div>
	<farm-switcher v-model="selectedValue" block :disabled="true" />
	</div>`,
});
