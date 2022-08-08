import { shallowMount } from '@vue/test-utils';
import ProductLogo from '../ProductLogo';

describe('ProductLogo component', () => {
	let wrapper;
	let component;

	beforeEach(() => {
		wrapper = shallowMount(ProductLogo, {
			propsData: {
				id: 10,
			},
		});
		component = wrapper.vm;
	});

	test('Created hook', () => {
		expect(wrapper).toBeDefined();
	});

	describe('mount component', () => {
		it('renders correctly', () => {
			expect(wrapper.element).toMatchSnapshot();
		});
	});

	describe('Computed properties', () => {
		it('Should have imgSrc', () => {
			expect(component.imgSrc).toContain('/public/logos/products/10/full.svg');
		});
	});
});
