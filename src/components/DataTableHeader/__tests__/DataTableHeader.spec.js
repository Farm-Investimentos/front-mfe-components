import { shallowMount } from '@vue/test-utils';
import DataTableHeader from '../DataTableHeader';

describe('DataTableHeader component', () => {
	let wrapper;
	let component;

	beforeEach(() => {
		wrapper = shallowMount(DataTableHeader, {
			propsData: {
				headers: [
					{
						value: 'A',
					},
				],
				sortClick: [
					{
						clicked: true,
						show: true,
					},
					{
						clicked: false,
						show: false,
					},
				],
				selectedIndex: 0,
				firstSelected: true,
				value: false,
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
			expect(component.thWidth({ value: 'data-table-select' })).toEqual('72px');
			expect(component.thWidth({ width: 24 })).toEqual('24px');
			expect(component.thWidth({})).toEqual('auto');
		});

		it('Should remove clicked', () => {
			component.removeClicked();
			expect(component.sortClick[0].clicked).toBeFalsy();
			expect(component.sortClick[0].show).toBeFalsy();
		});

		it('Should check first selected', () => {
			expect(component.checkFirstSelected(999)).toBeFalsy();
			expect(component.checkFirstSelected(0)).toBeTruthy();
		});

		it('Should emit event when clickSort', () => {
			component.clickSort('A', 0);
			expect(wrapper.emitted().onClickSort).toBeDefined();
		});

		it('Should get type sort', () => {
			expect(component.getTypeSort(false)).toEqual('ASC');
			expect(component.getTypeSort(true)).toEqual('DESC');
		});

		it('Should change show', async () => {
			component.changeShow(0);
			await new Promise(r => setTimeout(r, 20));
			expect(component.sortClick[0].show).toBeTruthy();
		});

		it('Should change show', async () => {
			component.changeHidden(0);
			component.changeHidden(1);
			await new Promise(r => setTimeout(r, 30));
			expect(component.sortClick[1].show).toBeFalsy();
		});

		it('Should emit new value when selectAll checkbox is clicked', () => {
			component.selectAll(true);
			expect(wrapper.emitted().toggleSelectAll).toBeDefined();
		});
	});
});
