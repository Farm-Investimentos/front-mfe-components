import ProductLogo from './ProductLogo.vue';

export default {
	title: 'Display/Logos/ProductLogo',
	component: ProductLogo,
};

export const Primary = () => ({
	template: '<farm-imglogo-product alt="primary" id="34" />',
});

Primary.storyName = 'Básico';
