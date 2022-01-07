import { shallowMount } from '@vue/test-utils';
import ToggleButton from '../ToggleButton';

describe('ToggleButton component', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallowMount(ToggleButton);
	});

	test('Created hook', () => {
		expect(wrapper).toBeDefined();
	});
});
