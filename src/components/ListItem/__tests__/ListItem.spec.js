import { shallowMount } from '@vue/test-utils';
import ListItem from '../ListItem';

describe('ListItem component', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallowMount(ListItem);
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
