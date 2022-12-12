import { shallowMount } from '@vue/test-utils';
import DataTablePaginator from '../DataTablePaginator';

describe('DataTablePaginator component', () => {
	let wrapper;
	let component;

	beforeEach(() => {
		wrapper = shallowMount(DataTablePaginator, {
			propsData: {
				title: '',
			},
		});
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

	describe('Methods', () => {
		it('Should build range of items', () => {
			expect(component.range(1, 7).length).toEqual(7);
		});
	});
});
