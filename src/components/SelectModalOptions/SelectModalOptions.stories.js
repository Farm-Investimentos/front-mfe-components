import SelectModalOptions from './SelectModalOptions';

export default {
	title: 'Interactions/SelectModalOptions',
	component: SelectModalOptions,
};

export const Primary = () => ({
	data() {
		return {
			items: [
				{ id: 1, name: 'name 1' },
				{ id: 2, name: 'name 2' },
			],
			selectedValue: null,
		};
	},
	template: `<div>
	<farm-select-modal-options
		:items="items"
		v-model="selectedValue"
		label="label"
		inputId="some-id" />
		<br />selected value: {{ selectedValue }}
	</div>`,
});

export const InitialValue = () => ({
	data() {
		return {
			items: [
				{ id: 1, name: 'name 1' },
				{ id: 2, name: 'name 2' },
			],
			selectedValue: 23123,
		};
	},
	template: `<div>
	<farm-select-modal-options
		:items="items"
		v-model="selectedValue"
		label="label"
		inputId="some-id" />
		<br />selected value: {{ selectedValue }}
	</div>`,
});
