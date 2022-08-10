import { shallowMount } from '@vue/test-utils';
import Chip from '../Chip';

describe('Chip component', () => {
	let wrapper;
	let component;

	beforeEach(() => {
		wrapper = shallowMount(Chip, {});
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
