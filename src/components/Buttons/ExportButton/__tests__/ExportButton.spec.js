import { shallowMount } from '@vue/test-utils';
import ExportButton from '../ExportButton';

describe('ExportButton component', () => {
	let wrapper;
	let component;

	beforeEach(() => {
		wrapper = shallowMount(ExportButton);
		component = wrapper.vm;
	});

	test('Created hook', () => {
		expect(wrapper).toBeDefined();
	});
});
