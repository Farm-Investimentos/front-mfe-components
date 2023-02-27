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
		it('isDisabled to be true when value is empty', async () => {
			await wrapper.setProps({
				value: [],
			});
			expect(component.isDisabled).toBe(true);
		});

		it('isDisabled to be true when value is null', async () => {
			await wrapper.setProps({
				value: null,
			});
			expect(component.isDisabled).toBe(true);
		});

		it('isDisabled to be false when value is valid', async () => {
			await wrapper.setProps({
				value: ['2023-02-02'],
			});
			expect(component.isDisabled).toBe(false);
		});

		it('isDateFieldDisabled to be true when dateField is empty', async () => {
			await wrapper.setProps({
				value: [],
			});
			expect(component.isDateFieldDisabled).toBe(true);
		});

		it('isDateFieldDisabled to be true when dateField is null', async () => {
			await wrapper.setProps({
				value: null,
			});
			expect(component.isDateFieldDisabled).toBe(true);
		});

		it('isDateFieldDisabled to be false when dateField is valid', async () => {
			await wrapper.setProps({
				value: ['2023-02-02'],
			});
			expect(component.isDateFieldDisabled).toBe(false);
		});

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

	describe('watchs', () => {
		it('should show dateField and fieldRange correctly when it has one date', () => {
			component.$options.watch.value.call(component, ['2023-02-27']);
			expect(component.dateField).toEqual(['2023-02-27', '2023-02-27']);
			expect(component.fieldRange).toEqual('27/02/2023 a 27/02/2023');
		});

		it('should show dateField and fieldRange correctly when it has two dates', () => {
			component.$options.watch.value.call(component, ['2023-02-27', '2023-02-28']);
			expect(component.dateField).toEqual(['2023-02-27', '2023-02-28']);
			expect(component.fieldRange).toEqual('27/02/2023 a 28/02/2023');
		});
	});
});
