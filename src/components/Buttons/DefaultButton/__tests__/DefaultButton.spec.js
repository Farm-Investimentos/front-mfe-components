import { shallowMount } from '@vue/test-utils';
import DefaultButton from '../DefaultButton';

describe('DefaultButton component', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallowMount(DefaultButton);
	});

	test('Created hook', () => {
		expect(wrapper).toBeDefined();
	});
});
