import { shallowMount } from '@vue/test-utils';
import SelectModalOptions from '../SelectModalOptions';

describe('SelectModalOptions component', () => {
	let wrapper;
	let component;

	beforeEach(() => {
		wrapper = shallowMount(SelectModalOptions, {
			propsData: {
				value: 1,
				inputId: 'some-id',
				label: '',
				pagination: {
					page: 1,
					itemsPerPage: 10,
					pages: 0,
				},
			},
		});
		component = wrapper.vm;
	});

	test('SelectModalOptions created', () => {
		expect(wrapper).toBeDefined();
		expect(component.selectedValueText).toEqual(1);
	});

	describe('Methods', () => {
		it('Should open modal', () => {
			component.openModal();
			expect(component.showModal).toBeTruthy();
		});

		it('Should close close', () => {
			component.closeModal();
			expect(component.showModal).toBeFalsy();
		});

		it('Should get item value', async () => {
			expect(component.getItemLabel({ name: 'a' })).toEqual('a');

			await wrapper.setProps({ itemLabelFormatter: item => item.name + ' ' + item.id });
			expect(component.getItemLabel({ name: 'a', id: 'b' })).toEqual('a b');
		});

		it('Should handle click', () => {
			component.handleClick({ name: 'a', id: 1 });
			expect(component.inputVal).toEqual(1);
			expect(component.selectedItem.id).toEqual(1);
		});
	});

	describe('Computed properties', () => {
		it('Should check if is loading', () => {
			expect(component.isLoading).toBeFalsy();
		});

		it('Should return 0 when items are empty', () => {
			expect(component.totalPages).toBe(0);
		});

		it('Should return 0 when items are empty', async () => {
			await wrapper.setProps({
				items: new Array(30).fill(0),
			});
			expect(component.totalPages).toBe(3);
		});

		it('Should return 0 when items are empty', async () => {
			await wrapper.setProps({
				items: new Array(30).fill(0),
			});
			expect(component.totalPages).toBe(3);
		});
	});

	describe('Watch methods', () => {
		it('Should reset selectedItem', () => {
			component.$options.watch.value.call(component, undefined);
			expect(component.selectedItem).toEqual(null);
		});
		it('Should reset selectedItem', () => {
			component.$options.watch.items.call(component, new Array(50));

			expect(component.pagination.pages).toBe(5);
		});
		it('Should change pagination', () => {
			expect(component.pagination).toEqual({
				page: 1,
				itemsPerPage: 10,
				pages: 0,
			});
			component.handlePagination({
				page: 1,
				itemsLength: 1,
			});
			expect(component.pagination).toEqual({
				page: 1,
				itemsPerPage: 10,
				pages: 1,
			});
		});
		it('Should not change pagination', () => {
			expect(component.pagination).toEqual({
				page: 1,
				itemsPerPage: 10,
				pages: 0,
			});
			component.handlePagination({
				page: 2,
				itemsLength: 30,
			});
			expect(component.pagination).toEqual({
				page: 1,
				itemsPerPage: 10,
				pages: 0,
			});
		});

		it('Should change page', () => {
			component.onChangePage(2);
			expect(component.pagination.page).toBe(2);
		});

		it('Should do customFilter', () => {
			expect(component.customFilter({}, 'key', { name: '21321' })).toBeFalsy();
			expect(component.customFilter({}, 'key', { name: 'aS KEY SDSA' })).toBeTruthy();
		});
	});
});
