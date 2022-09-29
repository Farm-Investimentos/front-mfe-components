import { shallowMount } from '@vue/test-utils';
import Box from '../Box';

describe('Box component', () => {
	let wrapper;
	let component;

	beforeEach(() => {
		wrapper = shallowMount(Box);
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
});
