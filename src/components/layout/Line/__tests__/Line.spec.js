import { shallowMount } from '@vue/test-utils';
import Line from '../Line';

describe('Line component', () => {
	let wrapper;
	let component;

	beforeEach(() => {
		wrapper = shallowMount(Line, {
			propsData: {},
		});
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
