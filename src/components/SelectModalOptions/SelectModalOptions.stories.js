import SelectModalOptions from './SelectModalOptions';

export default {
	title: 'API/SelectModalOptions',
	component: SelectModalOptions,
};

export const Primary = () => ({
	components: { SelectModalOptions },
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
	<SelectModalOptions
		:items="items"
		v-model="selectedValue"
		label="label"
		inputId="some-id" />
		<br />selected value: {{ selectedValue }}
	</div>`,
});

Primary.storyName = 'Básico';
