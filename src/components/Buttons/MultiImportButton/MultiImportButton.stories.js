import MultiImport from './MultiImportButton.vue';

export default {
	title: 'Buttons/MultiImport',
	component: MultiImport,
};

export const Primary = () => ({
	template: '<farm-btn-multipleimport />',
});

export const List = () => ({
	methods: {
		listener(key) {
			alert('Handler for item ' + key);
		},
	},
	template: `<farm-btn-multipleimport
			:optionsList="[{ listenerKey: 1, title: 'XLS teste'}, { listenerKey: 2, title: 'CSV teste novo'}]"
			@onClick="listener"
		/>`,
});

export const CustomColor = () => ({
	methods: {
		listener(key) {
			alert('Handler for item ' + key);
		},
	},
	template: `<farm-btn-multipleimport
			color="info"
			:optionsList="[{ listenerKey: 1, title: 'XLS teste'}, { listenerKey: 2, title: 'CSV teste novo'}]"
			@onClick="listener"
		/>`,
});
