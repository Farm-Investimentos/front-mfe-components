import { shallowMount } from '@vue/test-utils';
import MainFilter from '../MainFilter';

describe('MainFilter component', () => {
	let wrapper;
	let component;

	beforeEach(() => {
		wrapper = shallowMount(MainFilter);
		component = wrapper.vm;
	});

	test('Created hook', () => {
		expect(wrapper).toBeDefined();
	});

	describe('methods', () => {
		it('Should emit event', () => {
			component.onFilterClick();
			expect(wrapper.emitted().onClick).toBeTruthy();
		});
	});

	describe('computed properties', () => {
		it('get extraFiltersBtnLabel', async () => {
			expect(component.extraFiltersBtnLabel).toEqual('Ver filtros');
			await wrapper.setProps({
				showFilters: true,
			});
			expect(component.extraFiltersBtnLabel).not.toEqual('Ver filtros');
		});

		it('get extraFiltersBtnIcon', async () => {
			expect(component.extraFiltersBtnIcon).toEqual('mdi-filter');
			await wrapper.setProps({
				showFilters: true,
			});
			expect(component.extraFiltersBtnIcon).toEqual('mdi-filter-off');
		});
	});
});
