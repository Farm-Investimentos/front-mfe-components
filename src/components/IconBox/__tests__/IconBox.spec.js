import { shallowMount } from '@vue/test-utils';
import IconBox from '../IconBox';

describe('IconBox component', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallowMount(IconBox);
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
