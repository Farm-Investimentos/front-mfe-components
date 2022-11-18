import { shallowMount } from '@vue/test-utils';

import Radio from '../Radio.vue';

describe('Radio component', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallowMount(Radio, {
			propsData: {},
		});
	});

	test('Radio created', () => {
		expect(wrapper).toBeDefined();
	});
});
