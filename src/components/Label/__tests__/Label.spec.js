import { shallowMount } from '@vue/test-utils';
import Label from '../Label';

describe('Label component', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallowMount(Label);
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
