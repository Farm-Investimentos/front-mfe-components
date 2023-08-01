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
		it('isDisabled to be true when value is empty', async () => {
			await wrapper.setProps({
				value: '',
			});
			expect(component.isDisabled).toBe(true);
		});

		it('isDisabled to be true when value is empty', async () => {
			await wrapper.setProps({
				value: null,
			});
			expect(component.isDisabled).toBe(true);
		});
		it('isDisabled to be false when value is valid', async () => {
			await wrapper.setProps({
				value: '2023-02-02',
			});
			expect(component.isDisabled).toBe(false);
		});

		it('isDateFieldDisabled to be true when dateField is empty', async () => {
			await wrapper.setProps({
				value: '',
			});
			expect(component.isDateFieldDisabled).toBe(true);
		});

		it('isDateFieldDisabled to be true when dateField is empty', async () => {
			await wrapper.setProps({
				value: null,
			});
			expect(component.isDateFieldDisabled).toBe(true);
		});

		it('isDateFieldDisabled to be false when dateField is valid', async () => {
			await wrapper.setProps({
				value: '2023-02-02',
			});
			expect(component.isDateFieldDisabled).toBe(false);
		});

		it('should allow all dates', async () => {
			await wrapper.setProps({
				allowedDates: () => true
			});
			expect(component.checkIsInAllowedDates('2023-07-03')).toBe(true);
			expect(component.checkIsInAllowedDates('2099-12-20')).toBe(true);
			expect(component.checkIsInAllowedDates('1985-01-23')).toBe(true);
		});

		it('should allow only dates in year 2077', async () => {
			await wrapper.setProps({
				allowedDates: (value) => new Date(value).getFullYear() === 2077
			});
			expect(component.checkIsInAllowedDates('2077-05-03')).toBe(true);
			expect(component.checkIsInAllowedDates('2023-05-03')).toBe('Data inválida');
		});
	});

	describe('methods', () => {
		it('openDatepicker', () => {
			component.openDatepicker({ stopPropagation: jest.fn() });
			expect(component.menuField).toBeTruthy();
		});

		it('closeDatepicker', () => {
			component.closeDatepicker();
			expect(component.menuField).toBeFalsy();
		});
	});
});
