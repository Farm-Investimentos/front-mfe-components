import { shallowMount } from '@vue/test-utils';
import List from '../List';

describe('List component', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallowMount(List);
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
