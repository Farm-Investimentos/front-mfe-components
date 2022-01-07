import { shallowMount } from '@vue/test-utils';
import DataTableHeader from '../DataTableHeader';

describe('DataTableHeader component', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallowMount(DataTableHeader, {
			propsData: {
				headers: [],
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
