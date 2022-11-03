import { shallowMount } from '@vue/test-utils';
import DangerButton from '../DangerButton';

describe('DangerButton component', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallowMount(DangerButton);
	});

	test('Created hook', () => {
		expect(wrapper).toBeDefined();
	});
});
