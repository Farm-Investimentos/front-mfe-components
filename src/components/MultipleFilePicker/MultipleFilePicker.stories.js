import MultipleFilePicker from './MultipleFilePicker.vue';

export default {
	title: 'Form/MultipleFilePicker',
	component: MultipleFilePicker,
};

export const Primary = () => ({
	template: '<MultipleFilePicker />',
});

export const MaxFileSize = () => ({
	template: '<MultipleFilePicker :maxFileSize="5" />',
});

export const MaxFilesNumber = () => ({
	template: '<MultipleFilePicker :maxFileSize="5" :maxFilesNumber="1" />',
});

export const Download = () => ({
	template:
		'<MultipleFilePicker :maxFileSize="5" :downloadFiles="[{ id: 1, name: `Arquivo 1`, size: 10000 }, { id: 2, name: `Arquivo 2`, size: 15000 }]" />',
});
