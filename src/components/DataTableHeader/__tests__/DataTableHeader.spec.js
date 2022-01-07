import { shallowMount } from '@vue/test-utils';
import DataTableHeader from '../DataTableHeader';

describe('DataTableHeader component', () => {
	let wrapper;
	let component;

	beforeEach(() => {
		wrapper = shallowMount(DataTableHeader, {
			propsData: {
				headers: [],
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
		it('Should check if item is data-table-select column', () => {
			expect(component.isTHDataTableSelect({ value: 'data-table-select' })).toBeTruthy();
			expect(component.isTHDataTableSelect({ value: 'anything else' })).toBeFalsy();
		});

		it('Should get th width', () => {
			expect(component.thWidth({ value: 'data-table-select' })).toEqual('64px');
			expect(component.thWidth({ width: 24 })).toEqual('24px');
			expect(component.thWidth({})).toEqual('auto');
		});
	});
});
