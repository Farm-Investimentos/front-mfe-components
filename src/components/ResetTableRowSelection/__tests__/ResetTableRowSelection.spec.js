import { shallowMount } from '@vue/test-utils';
import ResetTableRowSelection from '../ResetTableRowSelection';
const items = [1, 2, 3];

describe('ResetTableRowSelection component', () => {
	let wrapper;
	let component;

	beforeEach(() => {
		wrapper = shallowMount(ResetTableRowSelection, {
			propsData: {
				value: items,
			},
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

	describe('methods', () => {
		it('Should reset', () => {
			component.reset();
			expect(wrapper.emitted().input).toBeDefined();
		});
	});
});
