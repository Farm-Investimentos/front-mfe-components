import { shallowMount } from '@vue/test-utils';
import CardContent from '../CardContent';

describe('CardContent component', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallowMount(CardContent);
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
