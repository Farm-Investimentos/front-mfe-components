import Switch from './Switcher';

export default {
	title: 'Form/Switcher',
	component: Switch,
};

export const Primary = () => ({
	data() {
		return {
			selectedValue: false,
		};
	},
	template: `<div>
	<farm-switcher v-model="selectedValue" block />
	</div>`,
});

export const DisabledOn = () => ({
	data() {
		return {
			selectedValue: true,
		};
	},
	template: `<div>
	<farm-switcher v-model="selectedValue" block :disabled="true" />
	</div>`,
});

export const DisabledOff = () => ({
	data() {
		return {
			selectedValue: false,
		};
	},
	template: `<div>
	<farm-switcher v-model="selectedValue" block :disabled="true" />
	</div>`,
});

export const Active = () => ({
	data() {
		return {
			selectedValue: true,
		};
	},
	template: `<div>
	<farm-switcher v-model="selectedValue" block :disabled="false" />
	</div>`,
});
