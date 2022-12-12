import { shallowMount } from '@vue/test-utils';

import Radio from '../Radio.vue';

describe('Radio component', () => {
	let wrapper;
	let component;

	beforeEach(() => {
		wrapper = shallowMount(Radio, {
			propsData: {
				value: 1,
			},
		});
		component = wrapper.vm;
	});

	test('Radio created', () => {
		expect(wrapper).toBeDefined();
	});

	describe('computed properties', () => {
		it('get isRound false', () => {
			expect(component.isChecked).toBeFalsy();
		});
	});
});
