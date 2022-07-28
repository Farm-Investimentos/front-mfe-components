import MultipleFilePicker from './MultipleFilePicker.vue';

export default {
	title: 'API/MultipleFilePicker3',
	component: MultipleFilePicker,
};

export const Primary = () => ({
	components: { MultipleFilePicker },
	template: '<MultipleFilePicker />',
});

export const MaxFileSize = () => ({
	components: { MultipleFilePicker },
	template: '<MultipleFilePicker :maxFileSize="5" />',
});

export const MaxFilesNumber = () => ({
	components: { MultipleFilePicker },
	template: '<MultipleFilePicker :maxFileSize="5" :maxFilesNumber="1" />',
});

export const Download = () => ({
	components: { MultipleFilePicker },
	template:
		'<MultipleFilePicker :maxFileSize="5" :downloadFiles="[{ id: 1, name: `Arquivo 1`, size: 10000 }, { id: 2, name: `Arquivo 2`, size: 15000 }]" />',
});

Primary.storyName = 'Básico';
MaxFileSize.storyName = 'Max File Size';
MaxFilesNumber.storyName = 'Max Files Number';
Download.storyName = 'Download Files';
