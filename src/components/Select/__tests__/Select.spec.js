import { shallowMount } from '@vue/test-utils';
import Select from '../Select';

describe('Select component', () => {
	let wrapper;
	let component;

	beforeEach(() => {
		wrapper = shallowMount(Select);
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
		it('reset', () => {
			component.reset();
			expect(component.isTouched).toBeTruthy();
			expect(component.innerValue).toEqual(null);
		});

		it('onBlur', () => {
			component.onBlur();
			expect(component.isBlured).toBeTruthy();
		});

		it('clickInput', () => {
			component.clickInput();
			expect(component.isTouched).toBeTruthy();
		});

		it('updateSelectedTextValue', () => {
			component.updateSelectedTextValue();
			expect(component.selectedText).toBeDefined();
		});

		it('makePristine', () => {
			component.isTouched = true;
			component.makePristine();
			expect(component.isTouched).toBeFalsy();
		});
	});
});