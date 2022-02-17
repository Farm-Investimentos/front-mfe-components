import MultiImport from './MultiImportButton.vue';

export default {
	title: 'Example/Buttons/MultiImport',
	component: MultiImport,
};

export const Primary = () => ({
	components: { MultiImport },
	template: '<MultiImport />',
});

export const List = () => ({
	components: { MultiImport },
	template: `<MultiImport :optionsList="[{ listenerKey: 1, title: 'XLS teste'}, { listenerKey: 2, title: 'CSV teste novo'}]" />`,
});

Primary.storyName = 'Básico';
List.storyName = 'Lista';
