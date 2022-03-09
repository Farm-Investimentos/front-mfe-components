import { shallowMount } from '@vue/test-utils';
import DatePicker from '../DatePicker';

describe('DatePicker component', () => {
	let wrapper;
	let component;

	beforeEach(() => {
		wrapper = shallowMount(DatePicker, {
			propsData: {
				inputId: 'someid',
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

	describe('computed properties', () => {
		it('get inputVal', () => {
			expect(component.inputVal).toBeFalsy();
		});

		it('get inputVal', () => {
			component.inputVal = 'teste';
			expect(wrapper.emitted().input).toBeDefined();
		});
	});
});
