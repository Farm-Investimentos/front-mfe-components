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

export const Disabled = () => ({
	data() {
		return {
			selectedValue: false,
		};
	},
	template: `<div>
	<farm-switcher v-model="selectedValue" block :disabled="true" />
	</div>`,
});
