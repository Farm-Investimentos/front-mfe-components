import MultipleFilePicker from '.';

export default {
	title: 'API/MultipleFilePicker',
	component: MultipleFilePicker,
};

export const Primary = () => ({
	components: { MultipleFilePicker },
	template:
		'<MultipleFilePicker :id="`fileInput-${1}`" :idTypeDocument="1" :idResponsible="1" :idProduct="1" :index="1" :maxFilesNumber="10" :maxFileSize="3145728" acceptTypes="application/pdf,image/jpeg,image/jpg,image/png" />',
});

Primary.storyName = 'Básico';
