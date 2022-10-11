import { shallowMount } from '@vue/test-utils';
import AlertBox from '../AlertBox';

describe('AlertBox component', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallowMount(AlertBox, {});
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
