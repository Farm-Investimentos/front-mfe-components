import { shallowMount } from '@vue/test-utils';
import PromptUserToConfirm from '../PromptUserToConfirm';

describe('PromptUserToConfirm component', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallowMount(PromptUserToConfirm, {
			propsData: {
				value: false,
			},
		});
	});

	test('Created hook', () => {
		expect(wrapper).toBeDefined();
	});

	describe('mount component', () => {
		it('renders correctly', () => {
			expect(wrapper.element).toMatchSnapshot();
		});
	});
});
