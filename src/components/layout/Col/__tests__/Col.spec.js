import { shallowMount } from '@vue/test-utils';
import Col from '../Col';

describe('Col component', () => {
	let wrapper;
	let component;

	beforeEach(() => {
		wrapper = shallowMount(Col);
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