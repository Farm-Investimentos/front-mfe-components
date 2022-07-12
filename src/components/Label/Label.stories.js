import Label from './Label.vue';

export default {
	title: 'API/Form/Label',
	component: Label,
};

export const Primary = () => ({
	components: { 'farm-label': Label },
	template: '<farm-label>Label</farm-label>',
});

Primary.storyName = 'Basic';
