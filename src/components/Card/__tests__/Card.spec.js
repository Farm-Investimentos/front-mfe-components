import { shallowMount } from '@vue/test-utils';
import Card from '../Card';

describe('Card component', () => {
	let wrapper;
	let component;

	beforeEach(() => {
		wrapper = shallowMount(Card);
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
