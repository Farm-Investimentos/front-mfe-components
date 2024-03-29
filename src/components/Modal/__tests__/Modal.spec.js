import { shallowMount } from '@vue/test-utils';

import Modal from '../index';

describe('Modal component', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallowMount(Modal, {
			propsData: {
				value: false,
			},
		});
	});

	test('Modal created', () => {
		expect(wrapper).toBeDefined();
	});
});
