import { shallowMount } from '@vue/test-utils';
import ConfirmButton from '../ConfirmButton';

describe('ConfirmButton component', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallowMount(ConfirmButton);
	});

	test('Created hook', () => {
		expect(wrapper).toBeDefined();
	});
});
