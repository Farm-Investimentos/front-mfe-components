import ImportButton from './ImportButton.vue';

export default {
	title: 'Buttons/Import',
	component: ImportButton,
};

export const Primary = () => ({
	template: '<farm-btn-import />',
});

export const CustomLabel = () => ({
	components: { ImportButton },
	template: '<farm-btn-import label="Label custom" />',
});
