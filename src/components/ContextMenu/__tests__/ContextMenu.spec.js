import { shallowMount } from '@vue/test-utils';
import ContextMenu from '../ContextMenu';

describe('ContextMenu component', () => {
	let wrapper;
	let component;

	beforeEach(() => {
		wrapper = shallowMount(ContextMenu, {});
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

	describe('Methods', () =>{
		it('Should handle click', () =>{
			component.click();
			expect(component.inputValue).toBeTruthy();
		})
	})
});
