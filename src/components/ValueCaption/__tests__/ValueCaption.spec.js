import { shallowMount } from '@vue/test-utils';
import ValueCaption from '../ValueCaption.vue';

describe('ValueCaption component', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallowMount(ValueCaption);
	});

	test('Created hook', () => {
		expect(wrapper).toBeDefined();
	});
});
