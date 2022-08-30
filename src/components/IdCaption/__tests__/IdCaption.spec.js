import { shallowMount } from '@vue/test-utils';
import IdCaption from '../IdCaption.vue';

describe('FilePicker component', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallowMount(IdCaption);
	});

	test('Created hook', () => {
		expect(wrapper).toBeDefined();
	});
});
