import { shallowMount } from '@vue/test-utils';
import Select from '../Select';

/* jest.spyOn(global, 'setTimeout').mockImplementation(fn => {
	fn();
	return setTimeout(() => 1, 0);
}); */

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
		describe('disabled items', () => {
			it('should not select a disabled item', async () => {
				const items = [
					{ value: 0, text: 'value 0', disabled: true },
					{ value: 1, text: 'value 1' },
					{ value: 2, text: 'value 2' },
					{ value: 3, text: 'value 3' },
				];

				await wrapper.setProps({
					items,
					value: 1,
				});

				expect(component.innerValue).toBe(1);
				expect(component.selectedText).toBe('value 1');
				component.selectItem(items[2]);
				setTimeout(() => {
					expect(component.innerValue).toBe(2);
					expect(component.selectedText).toBe('value 2');
				}, 150);
				component.selectItem(items[0]);
				setTimeout(() => {
					expect(component.innerValue).toBe(2);
					expect(component.selectedText).toBe('value 2');
				}, 150);
				component.selectItem(items[3]);
				setTimeout(() => {
					expect(component.innerValue).toBe(3);
					expect(component.selectedText).toBe('value 3');
				}, 150);
			});
			it('should not select a disabled item if is multiple', async () => {
				const items = [
					{ value: 0, text: 'value 0' },
					{ value: 1, text: 'value 1', disabled: true },
					{ value: 2, text: 'value 2' },
					{ value: 3, text: 'value 3', disabled: true },
				];

				await wrapper.setProps({
					multiple: true,
					items,
					value: [0],
				});

				expect(component.innerValue).toEqual([0]);
				expect(component.selectedText).toBe('value 0');
				component.selectItem(items[2]);
				setTimeout(() => {
					expect(component.innerValue).toEqual([0, 2]);
					expect(component.selectedText).toBe('value 0 (+1 outro)');
				}, 150);
				component.selectItem(items[1]);
				setTimeout(() => {
					expect(component.innerValue).toEqual([0, 2]);
					expect(component.selectedText).toBe('value 0 (+1 outro)');
				}, 150);
			});
		});

		describe('onKeyDown', () => {
			it('should open the ContextMenu and click on current element', () => {
				const event = {
					code: 'Space',
					preventDefault: jest.fn(),
					currentTarget: {
						click: jest.fn(),
					},
				};
				component.onKeyDown(event);

				expect(component.isVisible).toBeTruthy();
				expect(event.currentTarget.click).toHaveBeenCalled();
				expect(event.preventDefault).toHaveBeenCalled();
			});
			it('should open the ContextMenu and click on current element when prop readonly is true', async () => {
				await wrapper.setProps({
					readonly: true,
				});
				const event = {
					code: 'Space',
					preventDefault: jest.fn(),
					currentTarget: {
						click: jest.fn(),
					},
				};
				component.onKeyDown(event);

				expect(component.isVisible).toBeFalsy();
				expect(event.currentTarget.click).not.toHaveBeenCalled();
				expect(event.preventDefault).not.toHaveBeenCalled();
			});

			it('should close the ContextMenu', () => {
				const event = {
					code: 'Escape',
					preventDefault: jest.fn(),
				};
				component.onKeyDown(event);

				expect(component.isVisible).toBeFalsy();

				expect(event.preventDefault).toHaveBeenCalled();
			});
		});
	});
});
