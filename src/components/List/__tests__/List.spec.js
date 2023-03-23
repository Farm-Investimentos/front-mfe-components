import { shallowMount } from '@vue/test-utils';
import List from '../List';

describe('List component', () => {
	let wrapper;
	let component;

	beforeEach(() => {
		wrapper = shallowMount(List);
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
		it('should isFocused be true when call onFocusin', () => {
			component.onFocusin();
			expect(component.isFocused).toBeTruthy();
		});

		it('should isFocused be false when call onFocusout', () => {
			component.onFocusout();
			expect(component.isFocused).toBeFalsy();
		});
	});
});
