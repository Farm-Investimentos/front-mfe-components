import ResetTableRowSelection from './ResetTableRowSelection';

export default {
	title: 'Interactions/ResetTableRowSelection',
	component: ResetTableRowSelection,
};

export const Primary = () => ({
	data() {
		return {
			items: [1, 2, 3],
		};
	},
	template: `<ResetTableRowSelection v-model="items" />`,
});
