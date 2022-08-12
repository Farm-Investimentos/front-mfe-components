import { shallowMount } from '@vue/test-utils';
import CardContent from '../CardContent';

describe('CardContent component', () => {
	let wrapper;
	let component;

	beforeEach(() => {
		wrapper = shallowMount(CardContent);
		component = wrapper.vm;
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
