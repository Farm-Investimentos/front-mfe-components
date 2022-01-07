import { shallowMount } from '@vue/test-utils';
import DialogHeader from '../DialogHeader';

describe('DialogHeader component', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallowMount(DialogHeader, {
			propsData: {
				title: ''
			}
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
