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
});
