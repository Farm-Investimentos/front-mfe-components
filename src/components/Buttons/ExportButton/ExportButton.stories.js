import ExportButton from './ExportButton.vue';

export default {
	title: 'API/Buttons/Export',
	component: ExportButton,
};

export const Primary = () => ({
	components: { ExportButton },
	template: '<ExportButton />',
});

export const Disabled = () => ({
	components: { ExportButton },
	template: '<ExportButton :disabled="true" />',
});

export const List = () => ({
	components: { ExportButton },
	template: `<ExportButton :optionsList="[{ key: 1, label: 'XLS teste'}, { key: 2, label: 'CSV teste novo'}]" />`,
});

Primary.storyName = 'Básico';
Disabled.storyName = 'Desabilitado'
List.storyName = 'Lista';
