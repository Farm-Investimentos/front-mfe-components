import OriginatorLogo from './OriginatorLogo.vue';

export default {
	title: 'Example/Logos/OriginatorLogo',
	component: OriginatorLogo,
};

export const Primary = () => ({
	components: { OriginatorLogo },
	template: '<OriginatorLogo alt="primary" id="1" />',
});

Primary.storyName = 'Básico';
