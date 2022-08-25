import OriginatorLogo from './OriginatorLogo.vue';

export default {
	title: 'Display/Logos/OriginatorLogo',
	component: OriginatorLogo,
};

export const Primary = () => ({
	template: '<farm-imglogo-originator alt="primary" id="88001" />',
});

Primary.storyName = 'Básico';
