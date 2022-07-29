import { shallowMount } from '@vue/test-utils';
import Line from '../Line';

describe('Line component', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallowMount(Line, {
			propsData: {},
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
