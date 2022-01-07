import { shallowMount } from '@vue/test-utils';
import DataTablePaginator from '../DataTablePaginator';

describe('DataTablePaginator component', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallowMount(DataTablePaginator);
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
