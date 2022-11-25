import ProductLogo from './ProductLogo.vue';

export default {
	title: 'Display/Logos/ProductLogo',
	component: ProductLogo,
};

export const Primary = () => ({
	data() {
		return {
			ids: [34, 31208, 31228, 31238, 80000, 90000, 110000, 116000, 118000, 119000],
		};
	},
	template: `<div>
	<farm-imglogo-product v-for="id in ids" :key="'logo_'+ id" alt="primary" :id="id" />
	</div>`,
});

Primary.storyName = 'Básico';
