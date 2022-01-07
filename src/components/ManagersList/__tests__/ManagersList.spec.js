import { shallowMount } from '@vue/test-utils';
import ManagersList from '../ManagersList';

describe('ManagersList component', () => {
	let wrapper;
	let component;

	beforeEach(() => {
		wrapper = shallowMount(ManagersList, {
			propsData: {
				managersString: 'a,b,c',
			},
		});
		component = wrapper.vm;
	});

	test('Created hook', () => {
		expect(wrapper).toBeDefined();
	});

	describe('Computed properties', () => {
		it('Should have managers array', () => {
			expect(component.managers).toBeInstanceOf(Array);
			expect(component.managers.length).toEqual(3);
		});
	});
});
