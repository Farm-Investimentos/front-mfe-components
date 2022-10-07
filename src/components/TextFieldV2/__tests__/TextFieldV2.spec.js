import { shallowMount } from '@vue/test-utils';
import TextFieldV2 from '../TextFieldV2';

describe('TextFieldV2 component', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallowMount(TextFieldV2);
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
