import MultipleFilePicker from '.';

export default {
	title: 'API/MultipleFilePicker2',
	component: MultipleFilePicker,
};

export const Primary = () => ({
	components: { MultipleFilePicker },
	template: '<MultipleFilePicker />',
});

export const MaxFileSize = () => ({
	components: { MultipleFilePicker },
	template: '<MultipleFilePicker maxFileSize="5" />',
});

Primary.storyName = 'Básico';
MaxFileSize.storyName = 'Max File Size';
