import { shallowMount } from '@vue/test-utils';
import CardContext from '../CardContext';

describe('CardContext component', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallowMount(CardContext);
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
