import { shallowMount } from '@vue/test-utils';
import Checkbox from '../Checkbox';

describe('Checkbox component', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallowMount(Checkbox, {
			propsData: {
				value: false,
			},
		});
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
