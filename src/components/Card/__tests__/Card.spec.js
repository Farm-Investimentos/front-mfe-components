import { shallowMount } from '@vue/test-utils';
import Card from '../Card';

describe('Card component', () => {
	let wrapper;
	let component;

	beforeEach(() => {
<<<<<<< HEAD
		wrapper = shallowMount(CardContext);
=======
		wrapper = shallowMount(Card);
>>>>>>> 38dc3bb9698df651e1adb50e862be215daf600a6
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
