import { shallowMount } from '@vue/test-utils';
import TextField from '../TextField';

describe('TextField component', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallowMount(TextField);
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
