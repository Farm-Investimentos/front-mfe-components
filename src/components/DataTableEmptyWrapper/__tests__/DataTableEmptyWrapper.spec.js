import { shallowMount } from '@vue/test-utils';
import DataTableEmptyWrapper from '../DataTableEmptyWrapper';

describe('DataTableEmptyWrapper component', () => {
	let wrapper;
	let component;

	beforeEach(() => {
		wrapper = shallowMount(DataTableEmptyWrapper, {});
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
