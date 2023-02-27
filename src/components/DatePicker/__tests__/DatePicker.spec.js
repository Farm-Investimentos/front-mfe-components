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
