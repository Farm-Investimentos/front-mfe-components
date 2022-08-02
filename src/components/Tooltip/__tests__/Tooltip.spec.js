import { shallowMount } from '@vue/test-utils';
import Tooltip from '../Tooltip';

describe('Tooltip component', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallowMount(Tooltip, {});
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
