import { shallowMount } from '@vue/test-utils';

import MultipleFilePicker from '@/components/MultipleFilePicker';

describe('MultipleFilePicker component', () => {
	let wrapper;
	let component;

	beforeEach(() => {
		wrapper = shallowMount(MultipleFilePicker, {
			propsData: {
				idTypeDocument: 1,
				idResponsible: 1,
				id: '1',
				idProduct: 1,
				index: 1,
				maxFilesNumber: 10,
				downloadFiles: [],
				acceptTypes: 'application/pdf,image/jpeg,image/jpg,image/png',
			},
		});
		component = wrapper.vm;
	});

	test('MultipleFilePicker created', () => {
		expect(wrapper).toBeDefined();
	});

	describe('Methods', () => {
		describe('openFileInput', () => {
			it('should open file input', () => {
				const spy = jest.fn();
				component.$refs = {
					upload: {
						$el: {
							querySelector() {
								return { click: spy };
							},
						},
					},
				};
				component.openFileInput();
				expect(spy).toHaveBeenCalled();
			});
		});

		describe('remove', () => {
			it('should remove an item', () => {
				const spy = jest.fn();
				component.$refs = {
					upload: {
						remove: spy,
					},
				};
				component.remove(new File([], 'test'));
				expect(spy).toHaveBeenCalled();
			});
		});
		describe('onDownload', () => {
			it('should remove an item', () => {
				component.onDownload(1);
				expect(wrapper.emitted().onDownload[0][0]).toBe(1);
			});
		});
	});

	describe('Watch', () => {
		describe('files', () => {
			it('should set flag true when files lenght is 0', () => {
				wrapper.vm.$options.watch.files.call(component, []);
				expect(component.flag).toBeTruthy();
			});

			it('should emit an onMaxFilesNumberWarning event when there are more files added who maxFilesNumber', () => {
				wrapper.vm.$options.watch.files.call(
					component,
					Array.from(Array(11).keys()).map(() => ({ type: 'image/jpeg' }))
				);
				expect(wrapper.emitted().onMaxFilesNumberWarning).toBeDefined();
			});

			it('should emit an onMaxFileSizeWarning event when one file size is bigger than maxFileSize prop', async () => {
				await wrapper.setProps({
					maxFileSize: 3145728,
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
