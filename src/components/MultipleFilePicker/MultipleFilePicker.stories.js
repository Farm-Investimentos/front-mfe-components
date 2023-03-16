import MultipleFilePicker from './MultipleFilePicker.vue';

export default {
	title: 'Form/MultipleFilePicker',
	component: MultipleFilePicker,
	parameters: {
		docs: {
			description: {
				component: `Multiple File Picker<br />
				selector: <em>farm-multiple-filepicker</em>
				`,
			},
		},
		viewMode: 'docs',
	},
};

export const Primary = () => ({
	template: '<farm-multiple-filepicker />',
});

export const MaxFileSize = () => ({
	template: '<farm-multiple-filepicker :maxFileSize="5" />',
});

export const MaxFilesNumber = () => ({
	methods: {
		onMaxFilesNumberWarning() {
			alert('Max files count reached');
		},
	},
	template: `<div>
		<farm-multiple-filepicker :maxFileSize="5" :maxFilesNumber="2" @onMaxFilesNumberWarning="onMaxFilesNumberWarning" />
		max files allowed: 2
	</div>`,
});

export const Download = () => ({
	template:
		'<farm-multiple-filepicker :maxFileSize="5" :downloadFiles="[{ id: 1, name: `Arquivo 1`, size: 10000 }, { id: 2, name: `Arquivo 2`, size: 15000 }]" />',
});

export const InvalidFiles = () => ({
	data() {
		return {
			fileTypes:
				'.csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel',
		};
	},
	methods: {
		onInvalidFiles(files) {
			alert(`${files.length} invalid file(s)`);
		},
	},
	template: `<div>
		<farm-multiple-filepicker
			:maxFileSize="5"
			:maxFilesNumber="3"
			:acceptedFileTypes="fileTypes"
			@onInvalidFiles="onInvalidFiles" />
	</div>`,
});

export const Reset = () => ({
	methods: {
		onReset() {
			this.$refs.picker.reset();
		}
	},
	template: `<div>
		<farm-multiple-filepicker ref="picker" />
		<farm-btn @click="onReset" class="mt-1">reset</farm-btn>
	</div>`,
});