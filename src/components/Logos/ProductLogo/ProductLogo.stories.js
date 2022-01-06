import ProductLogo from './ProductLogo.vue';

export default {
	title: 'Example/Logos/ProductLogo',
	component: ProductLogo,
};

export const Primary = () => ({
	components: { ProductLogo },
	template: '<ProductLogo alt="primary" id="1" />',
});

Primary.storyName = 'Básico';
