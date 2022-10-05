import { shallowMount } from '@vue/test-utils';
import ContextMenu from '../ContextMenu';

describe('ContextMenu component', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallowMount(ContextMenu, {});
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
