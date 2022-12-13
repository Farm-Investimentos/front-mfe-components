import { shallowMount } from '@vue/test-utils';
import AlertBox from '../AlertBox';

describe('AlertBox component', () => {
	let wrapper;
	let component;

	beforeEach(() => {
		wrapper = shallowMount(AlertBox, {});
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
		describe('close', () => {
			it('should close the AlertBox', () => {
				expect(component.visible).toBeTruthy();
				component.close();
				expect(component.visible).toBeFalsy();
			});
		});
	});
});
