import FilePicker from './FilePicker.vue';

export default {
	title: 'API/FilePicker',
	component: FilePicker,
};

export const Primary = () => ({
	components: { FilePicker },
	template: '<FilePicker />',
});

export const MaxFileSize = () => ({
	components: { FilePicker },
	template: '<FilePicker maxFileSize="5" />',
});

Primary.storyName = 'Básico';
MaxFileSize.storyName =  'Max File Size';
