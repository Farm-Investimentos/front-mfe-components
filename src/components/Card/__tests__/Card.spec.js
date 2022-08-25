import { shallowMount } from '@vue/test-utils';
import Card from '../Card';

describe('Card component', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallowMount(Card);
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
