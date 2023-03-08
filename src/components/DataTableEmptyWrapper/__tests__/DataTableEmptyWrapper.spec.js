import { shallowMount } from '@vue/test-utils';
import DataTableEmptyWrapper from '../DataTableEmptyWrapper';

describe('DataTableEmptyWrapper component', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallowMount(DataTableEmptyWrapper, {});
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
