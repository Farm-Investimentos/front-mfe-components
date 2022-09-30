import { shallowMount } from '@vue/test-utils';
import Col from '../Col';

describe('Col component', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallowMount(Col);
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
