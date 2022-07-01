import { shallowMount } from '@vue/test-utils';
import Icon from '../Icon';

describe('Icon component', () => {
	let wrapper;
	let component;

	beforeEach(() => {
		wrapper = shallowMount(Icon);
		component = wrapper.vm;
	});

	test('Created hook', () => {
		expect(wrapper).toBeDefined();
	});

	describe('computed properties', () => {
		it('get classes', () => {
			expect(component.classes).toBeDefined();
		});
	});
});
