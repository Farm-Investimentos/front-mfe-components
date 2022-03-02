import ResetTableRowSelection from './ResetTableRowSelection';

export default {
	title: 'API/ResetTableRowSelection',
	component: ResetTableRowSelection,
};

export const Primary = () => ({
	components: { ResetTableRowSelection },
	data() {
		return {
			items: [1, 2, 3],
		};
	},
	template: `<ResetTableRowSelection v-model="items" />`,
});

Primary.storyName = 'Básico';
