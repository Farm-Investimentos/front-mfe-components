import FilePicker from './FilePicker.vue';

export default {
	title: 'Form/FilePicker',
	component: FilePicker,
};

export const Primary = () => ({
	template: '<FilePicker />',
});

export const MaxFileSize = () => ({
	template: '<FilePicker maxFileSize="0.1" />',
});
