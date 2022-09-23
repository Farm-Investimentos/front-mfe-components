import { shallowMount } from '@vue/test-utils';
import Row from '../Row';

describe('Row component', () => {
	let wrapper;
	let component;

	beforeEach(() => {
		wrapper = shallowMount(Row);
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
