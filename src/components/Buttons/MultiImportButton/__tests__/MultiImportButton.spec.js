import { shallowMount } from '@vue/test-utils';
import MultiImportButton from '../MultiImportButton';

describe('MultiImportButton component', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallowMount(MultiImportButton);
	});

	test('Created hook', () => {
		expect(wrapper).toBeDefined();
	});
});
