import { shallowMount } from '@vue/test-utils';
import FilePicker from '../FilePicker';

describe('FilePicker component', () => {
	let wrapper;
	let component;

	beforeEach(() => {
		wrapper = shallowMount(FilePicker);
		component = wrapper.vm;
	});

	test('Created hook', () => {
		expect(wrapper).toBeDefined();
	});

	describe('Component methods', () => {
		describe('fileChange', () => {
			it('Should emit event with a file', () => {
				component.fileChange([1]);
				expect(wrapper.emitted().onFileChange[0]).toBeDefined();
			});

			it('Should not emit', () => {
				component.fileChange([]);
				expect(wrapper.emitted().onFileChange).toBeUndefined();
			});

			it('Should handle max file size', async () => {
				await wrapper.setProps({
					maxFileSize: 5,
				});
				component.fileChange([{ size: 6 * 1024 * 1024 }]);
				expect(wrapper.vm.maxSizeReach).toBeTruthy();
			});
		});

		describe('handlerFunctionHighlight', () => {
			it('Should add class', () => {
				const spyObj = jest.spyOn(wrapper.vm.dropArea.classList, 'add');
				component.handlerFunctionHighlight();
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
	});

	describe('Computed properties', () => {
		it('Should return maxSizeReachMsg', () => {
			wrapper.setProps({
				maxFileSize: 5,
			});
			expect(wrapper.vm.maxSizeReachMsg).toContain('Arquivo ultrapassou o tamanho máximo');
		});

		it('Should have input element', () => {
			expect(component.inputEl).toBeDefined();
		});

		
	});
});
