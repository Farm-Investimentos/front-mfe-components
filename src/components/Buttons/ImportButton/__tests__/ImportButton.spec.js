import { shallowMount } from '@vue/test-utils';
import ImportButton from '../ImportButton';

describe('ImportButton component', () => {
	let wrapper;
	let component;

	beforeEach(() => {
		wrapper = shallowMount(ImportButton);
		component = wrapper.vm;
	});

	test('Created hook', () => {
		expect(wrapper).toBeDefined();
	});
});
