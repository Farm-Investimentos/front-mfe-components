import { shallowMount } from '@vue/test-utils';
import RangeDatePicker from '../RangeDatePicker';

describe('RangeDatePicker component', () => {
	let wrapper;
	let component;

	beforeEach(() => {
		wrapper = shallowMount(RangeDatePicker, {
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

	describe('computed values', () => {
		it('min max correctly', async () => {
			await wrapper.setProps({
				inputId: 'someid',
				min: '2022-01-17',
				max: '2022-01-31',
			});
			expect(component.inputId).toBe('someid');
			expect(component.min).toBe('2022-01-17');
			expect(component.max).toBe('2022-01-31');
		});
	});

	describe('methods', () => {
		it('openDatepicker', () => {
			component.openDatepicker();
			expect(component.menuField).toBeTruthy();
		});

		it('closeDatepicker', () => {
			component.closeDatepicker();
			expect(component.menuField).toBeFalsy();
		});
	});
});
