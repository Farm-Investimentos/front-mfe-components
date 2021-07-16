import { shallowMount } from '@vue/test-utils';
import FilePicker from './FilePicker';

describe('FilePicker component', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(FilePicker);
    });

    test('Created hook', () => {
        expect(wrapper).toBeDefined();
    });

    describe('Component methods', () => {
        describe('fileChange', () => {
            it('Should emit event with a file', () => {
                wrapper.vm.fileChange([1]);
                expect(wrapper.emitted().onFileChange[0]).toBeDefined();
            });

            it('Should not emit', () => {
                wrapper.vm.fileChange([]);
                expect(wrapper.emitted().onFileChange).toBeUndefined();
            });
        });

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
    });
});
