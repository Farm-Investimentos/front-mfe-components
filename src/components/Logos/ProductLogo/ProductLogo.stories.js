import ProductLogo from './ProductLogo.vue';

export default {
	title: 'API/Logos/ProductLogo',
	component: ProductLogo,
};

export const Primary = () => ({
	components: { ProductLogo },
	template: '<ProductLogo alt="primary" id="1" />',
});

Primary.storyName = 'Básico';
