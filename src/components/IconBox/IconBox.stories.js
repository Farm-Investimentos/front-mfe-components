import IconBox from './IconBox.vue';

export default {
	title: 'API/IconBox',
	component: IconBox,
};

export const Primary = () => ({
	components: { IconBox },
	template: '<IconBox icon="mdi-currency-usd" />',
});

Primary.storyName = 'Básico';
