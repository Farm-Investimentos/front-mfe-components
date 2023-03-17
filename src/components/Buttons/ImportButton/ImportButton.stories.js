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

export const CustomColors = () => ({
	components: { ImportButton },
	template: `<div>
		<farm-btn-import color="info" variation="lighten" />
		<farm-btn-import color="info" variation="darken" />
	</div>`,
});
