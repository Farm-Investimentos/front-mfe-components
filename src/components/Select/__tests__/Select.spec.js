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

		describe('isChecked', () => {
			it('should return false when multiple is false', async () => {
				component.multipleValues = [0, 1, 2];
				const result = component.isChecked({ value: 1 });
				expect(result).toBe(false);
			});
			it('should return true when multiple is true and item is checked', async () => {
				await wrapper.setProps({
					multiple: true,
				});
				component.multipleValues = [0, 1, 2];
				const result = component.isChecked({ value: 1 });
				expect(result).toBe(true);
			});
			it('should return false when item is not checked', async () => {
				await wrapper.setProps({
					multiple: true,
				});
				component.multipleValues = [0, 1, 2];
				const result = component.isChecked({ value: 3 });
				expect(result).toBe(false);
			});
		});
		describe('addLabelToMultiple', () => {
			it('should not do anything when multiple is false', async () => {
				component.addLabelToMultiple();

				expect(component.selectedText).toBe('');
			});
			it('should return a selectedText to a selected item', async () => {
				await wrapper.setProps({
					multiple: true,
					items: [
						{ value: 0, text: 'value 0' },
						{ value: 1, text: 'value 1' },
						{ value: 2, text: 'value 2' },
						{ value: 3, text: 'value 3' },
					],
					value: [0],
				});

				component.addLabelToMultiple();
				expect(component.selectedText).toBe('value 0');
			});
			it('should return a selectedText to two selected item', async () => {
				await wrapper.setProps({
					multiple: true,
					items: [
						{ value: 0, text: 'value 0' },
						{ value: 1, text: 'value 1' },
						{ value: 2, text: 'value 2' },
						{ value: 3, text: 'value 3' },
					],
					value: [0, 1],
				});

				component.addLabelToMultiple();
				expect(component.selectedText).toBe('value 0 (+1 outro)');
			});

			it('should return a selectedText to three or more selected item', async () => {
				await wrapper.setProps({
					multiple: true,
					items: [
						{ value: 0, text: 'value 0' },
						{ value: 1, text: 'value 1' },
						{ value: 2, text: 'value 2' },
						{ value: 3, text: 'value 3' },
					],
					value: [0, 1, 2],
				});

				component.addLabelToMultiple();
				expect(component.selectedText).toBe('value 0 (+2 outros)');
			});
		});
	});
});
