import { shallowMount } from '@vue/test-utils';

import MultipleFilePicker from '../index';

describe('MultipleFilePicker component', () => {
	let wrapper;
	let component;

	beforeEach(() => {
		wrapper = shallowMount(MultipleFilePicker, {
			propsData: {
				maxFileSize: 1,
				maxFilesNumber: 10,
				downloadFiles: [],
				acceptedFileTypes: 'application/pdf,image/jpeg,image/jpg,image/png',
			},
		});
		component = wrapper.vm;
	});

	test('MultipleFilePicker created', () => {
		expect(wrapper).toBeDefined();
	});

	describe('Methods', () => {
		describe('handlerFunctionHighlight', () => {
			it('Should add class', () => {
				const spyObj = jest.spyOn(wrapper.vm.dropArea.classList, 'add');
				wrapper.vm.handlerFunctionHighlight();
				expect(spyObj).toHaveBeenCalled();
			});
		});

		describe('handlerFunctionUnhighlight', () => {
			it('Should add class', () => {
				const spyObj = jest.spyOn(wrapper.vm.dropArea.classList, 'remove');
				wrapper.vm.handlerFunctionUnhighlight();
				expect(spyObj).toHaveBeenCalled();
			});
		});

		describe('addListeners', () => {
			it('Should add listeners', () => {
				const spyObj = jest.spyOn(wrapper.vm.dropArea, 'addEventListener');
				wrapper.vm.addListeners();
				expect(spyObj).toHaveBeenCalled();
			});
		});
		describe('addMoreFiles', () => {
			it('should open file input', () => {
				const spy = jest.fn();
				component.$refs = {
					container: {
						querySelector() {
							return { click: spy };
						},
					},
				};
				component.addMoreFiles();
				expect(spy).toHaveBeenCalled();
			});
		});

		describe('fileChange', () => {
			it('should open file input', () => {
				const file = new File([], 'test');
				component.fileChange([file]);
				expect(component.files).toEqual([file]);
			});
		});

		describe('remove', () => {
			it('should remove an item and call reset method when files length is 1', () => {
				const spy = jest.spyOn(component, 'reset');
				const file = new File([], 'test');
				component.files = [file];
				component.remove(0);
				expect(component.files).toEqual([]);
				expect(spy).toHaveBeenCalled();
			});

			it('should remove an item', () => {
				const spy = jest.spyOn(component, 'reset');
				const file = new File([], 'test');
				const file2 = new File([], 'test2');
				component.files = [file, file2];
				component.remove(0);
				expect(component.files).toEqual([file2]);
				expect(spy).not.toHaveBeenCalled();
			});
		});
		describe('onDownload', () => {
			it('should remove an item', () => {
				component.onDownload(1);
				expect(wrapper.emitted().onDownload[0][0]).toBe(1);
			});
		});
	});

	describe('Computed', () => {
		describe('hasFiles', () => {
			it('should return false', () => {
				expect(component.hasFiles).toBeFalsy();
			});

			it('should return true when files length is more than zero', () => {
				component.files = [new File([], 'test')];
				expect(component.hasFiles).toBeTruthy();
			});

			it('should return true when files length is more than zero', async () => {
				await wrapper.setProps({
					downloadFiles: [new File([], 'test')],
				});
				expect(component.hasFiles).toBeTruthy();
			});
		});
		describe('filesLength', () => {
			it('should return files and downloadFiles length', async () => {
				await wrapper.setProps({
					downloadFiles: [new File([], 'test')],
				});
				component.files = [new File([], 'test2')];
				expect(component.filesLength).toBe(2);
			});
		});
		describe('disabledButton', () => {
			it('should return files and downloadFiles length', async () => {
				await wrapper.setProps({
					maxFilesNumber: 0,
				});

				expect(component.disabledButton).toBeFalsy();
			});

			it('should return files and downloadFiles length', async () => {
				await wrapper.setProps({
					maxFilesNumber: 2,
					downloadFiles: [new File([], 'test')],
				});
				component.files = [new File([], 'test2')];

				expect(component.disabledButton).toBeTruthy();
			});
		});
	});

	describe('Watch', () => {
		describe('files', () => {
			it('should emit an onMaxFilesNumberWarning event when there are more files added who maxFilesNumber', () => {
				wrapper.vm.$options.watch.files.call(
					component,
					Array.from(Array(11).keys()).map(() => ({ type: 'image/jpeg' }))
				);
				expect(wrapper.emitted().onMaxFilesNumberWarning).toBeDefined();
			});

			it('should emit an onMaxFileSizeWarning event when one file size is bigger than maxFileSize prop', async () => {
				await wrapper.setProps({
					maxFileSize: 3,
				});
				wrapper.vm.$options.watch.files.call(component, [
					{ size: 4145728, type: 'image/jpeg' },
				]);
				expect(wrapper.emitted().onMaxFileSizeWarning).toBeDefined();
			});

			it('should not add invalid types files', () => {
				wrapper.vm.$options.watch.files.call(
					component,
					Array.from(Array(1).keys()).map(() => ({ type: 'image/test' }))
				);
				expect(component.files).toEqual([]);
			});
		});
	});
});
