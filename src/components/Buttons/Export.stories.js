import Export from './Export.vue';

export default {
	title: 'Example/Buttons/Export',
	component: Export,
};

export const Primary = () => ({
	components: { Export },
	template: '<Export />',
});

export const List = () => ({
	components: { Export },
	template: `<Export :optionsList="[{ key: 1, label: 'XLS teste'}, { key: 2, label: 'CSV teste novo'}]" />`,
});

Primary.storyName = 'Básico';

List.storyName = 'Lista';
