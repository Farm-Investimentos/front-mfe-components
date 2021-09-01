import MainFilter from './MainFilter.vue';

export default {
	title: 'Example/MainFilter',
	component: MainFilter,
};

export const Primary = () => ({
	components: { MainFilter },
	template: '<MainFilter />',
});

export const Secondary = () => ({
	components: { MainFilter },
	template: '<MainFilter :hasExtraFilters="false" />',
});

export const CustomLabel = () => ({
	components: { MainFilter },
	template: '<MainFilter label="Custom" />',
});

Primary.storyName = 'Básico';
Secondary.storyName = 'Apenas input';
CustomLabel.storyName = 'Custom Label';