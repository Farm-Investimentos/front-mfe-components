import { shallowMount } from '@vue/test-utils';
import Switch from '../Switch';

describe('Switch component', () => {
	let wrapper;
	let component;

	beforeEach(() => {
		wrapper = shallowMount(Switch, {
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
