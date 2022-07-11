import { shallowMount } from '@vue/test-utils';
import Switcher from '../Switcher';

describe('Switcher component', () => {
	let wrapper;
	let component;

	beforeEach(() => {
		wrapper = shallowMount(Switcher, {
			propsData: {
				value: false,
			},
		});
		component = wrapper.vm;
	});

	test('Switch created', () => {
		expect(wrapper).toBeDefined();
	});

	describe('Computed properties', () => {
		it('Should check backgroundStyles', () => {
			expect(component.backgroundStyles).toBeDefined();
		});
	});
});
