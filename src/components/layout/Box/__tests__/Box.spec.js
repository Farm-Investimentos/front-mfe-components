import { shallowMount } from '@vue/test-utils';
import Box from '../Box';

describe('Box component', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallowMount(Box);
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
