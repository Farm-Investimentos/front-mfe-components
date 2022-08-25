import ExportButton from './ExportButton.vue';

export default {
	title: 'Buttons/Export',
	component: ExportButton,
};

export const Primary = () => ({
	template: '<farm-btn-export />',
});

export const Disabled = () => ({
	template: '<farm-btn-export :disabled="true" />',
});

export const List = () => ({
	template: `<farm-btn-export :optionsList="[{ key: 1, label: 'XLS teste'}, { key: 2, label: 'CSV teste novo'}]" />`,
});

Primary.storyName = 'Básico';
Disabled.storyName = 'Desabilitado';
List.storyName = 'Lista';
