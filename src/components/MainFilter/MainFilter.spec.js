import { shallowMount } from '@vue/test-utils';
import MainFilter from './MainFilter';

describe('MainFilter component', () => {
    let wrapper;
    let component;

    beforeEach(() => {
        wrapper = shallowMount(MainFilter);
        component = wrapper.vm;
    });

    test('Created hook', () => {
        expect(wrapper).toBeDefined();
    });

    describe('methods', () => {
        describe('onKeyUp', () => {
            it('Should change value after throttle', done => {
                const mockEvent = { target: { value: 'some value' } };
                const spy = jest.spyOn(component, '$emit');
                component.onKeyUp(mockEvent);
                setTimeout(() => {
                    expect(spy).toHaveBeenCalledWith('onInputChange', 'some value');
                    done();
                }, 300);
            });

            it('Should clear timer', async () => {
                await wrapper.setData({ timer: true });
                const mockEvent = { target: { value: 'some value' } };
                const spy = jest.spyOn(window, 'clearTimeout');
                component.onKeyUp(mockEvent);
                expect(spy).toHaveBeenCalled();
            });
        });

        it('Should emit event', () => {
            component.onFilterClick();
            expect(wrapper.emitted().onClick).toBeTruthy();
        });
    });
});
