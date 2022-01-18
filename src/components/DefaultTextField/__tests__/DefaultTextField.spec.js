import { shallowMount } from '@vue/test-utils';
import DefaultTextField from '../DefaultTextField';

describe('DefaultTextField component', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallowMount(DefaultTextField, {
			propsData: {
				item: {},
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
