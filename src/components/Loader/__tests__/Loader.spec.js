import { shallowMount } from '@vue/test-utils';
import Loader from '../Loader';

describe('Loader component', () => {
	let wrapper;
	let component;

	beforeEach(() => {
		wrapper = shallowMount(Loader);
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
		it('Should calculate calculateSize for default size prop', () => {
			expect(component.calculateSize).toEqual('');
		});

		it('Should calculate calculateSize for small prop', async () => {
			await wrapper.setProps({
				size: 'small',
			});
			expect(component.calculateSize).toEqual('farm-loader--small');
		});
	});
});
