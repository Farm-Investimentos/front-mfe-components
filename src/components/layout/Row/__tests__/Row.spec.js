import { shallowMount } from '@vue/test-utils';
import Row from '../Row';

describe('Row component', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallowMount(Row);
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
