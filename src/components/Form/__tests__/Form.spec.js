import { shallowMount } from '@vue/test-utils';
import Form from '../Form';

describe('Form component', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallowMount(Form);
	});

	test('Created hook', () => {
		expect(wrapper).toBeDefined();
	});
});
