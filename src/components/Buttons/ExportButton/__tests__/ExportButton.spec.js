import { shallowMount } from '@vue/test-utils';
import ExportButton from '../ExportButton';

describe('ExportButton component', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallowMount(ExportButton);
	});

	test('Created hook', () => {
		expect(wrapper).toBeDefined();
	});
});
