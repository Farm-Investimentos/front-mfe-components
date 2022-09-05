import { shallowMount } from '@vue/test-utils';
import ButtonToggle from '../ButtonToggle.vue';

describe('ButtonToggle component', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallowMount(ButtonToggle, {
			propsData: {
				buttons: [],
			},
		});
	});

	test('Created hook', () => {
		expect(wrapper).toBeDefined();
	});
});
