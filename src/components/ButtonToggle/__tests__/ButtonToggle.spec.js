import { shallowMount } from '@vue/test-utils';
import ButtonToggle from '../ButtonToggle.vue';

describe('ButtonToggle component', () => {
	let wrapper;
	let component;

	beforeEach(() => {
		wrapper = shallowMount(ButtonToggle, {
			propsData: {
				buttons: [],
			},
		});
		component = wrapper.vm;
	});

	test('Created hook', () => {
		expect(wrapper).toBeDefined();
	});

	test('Default buttons value', () => {
		const wrapper1 = shallowMount(ButtonToggle, {});
		expect(wrapper1.vm.buttons.length).toEqual(0);
	});

	describe('Methods', () => {
		describe('setValue', () => {
			it('Should set value', () => {
				component.setValue(3);
				expect(component.inputVal).toEqual(3);
				expect(wrapper.emitted('input')[0]).toEqual([3]);
			});
		});
	});
});
