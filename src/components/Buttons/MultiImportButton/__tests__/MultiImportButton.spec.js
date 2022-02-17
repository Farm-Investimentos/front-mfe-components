import { shallowMount } from '@vue/test-utils';
import MultiImportButton from '../MultiImportButton';

describe('MultiImportButton component', () => {
	let wrapper;
	let component;

	beforeEach(() => {
		wrapper = shallowMount(MultiImportButton);
		component = wrapper.vm;
	});

	test('Created hook', () => {
		expect(wrapper).toBeDefined();
	});
});
