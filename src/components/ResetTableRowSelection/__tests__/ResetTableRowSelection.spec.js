import { shallowMount } from '@vue/test-utils';
import ResetTableRowSelection from '../ResetTableRowSelection';

describe('ResetTableRowSelection component', () => {
	let wrapper;
	let component;

	beforeEach(() => {
		wrapper = shallowMount(ResetTableRowSelection, {
			propsData: {
				length: 2,
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
			expect(wrapper.emitted().onReset).toBeDefined();
		});
	});
});
