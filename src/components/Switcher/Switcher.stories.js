import Switch from './Switcher';

export default {
	title: 'Form/Switcher',
	component: Switch,
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
