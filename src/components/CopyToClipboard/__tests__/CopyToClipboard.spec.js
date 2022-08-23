import { shallowMount } from '@vue/test-utils';
import CopyToClipboard from '../CopyToClipboard';

describe('CopyToClipboard component', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallowMount(CopyToClipboard);
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
