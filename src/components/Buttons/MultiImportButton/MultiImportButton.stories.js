import MultiImport from './MultiImportButton.vue';

export default {
	title: 'Buttons/MultiImport',
	component: MultiImport,
};

export const Primary = () => ({
	template: '<farm-btn-multipleimport />',
});

export const List = () => ({
	template: `<farm-btn-multipleimport :optionsList="[{ listenerKey: 1, title: 'XLS teste'}, { listenerKey: 2, title: 'CSV teste novo'}]" />`,
});

List.storyName = 'Lista';
