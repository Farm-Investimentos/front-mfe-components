import { shallowMount } from '@vue/test-utils';
import DialogFooter from '../DialogFooter';

describe('DialogFooter component', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallowMount(DialogFooter);
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
