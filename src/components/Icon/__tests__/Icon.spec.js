import { shallowMount } from '@vue/test-utils';
import Icon from '../Icon';

describe('Icon component', () => {
	let wrapper;
	let component;

	beforeEach(() => {
		wrapper = shallowMount(Icon, {
			slots: {
				default: '  book ',
			},
		});
		component = wrapper.vm;
	});

	test('Created hook', () => {
		expect(wrapper).toBeDefined();
	});

	describe('computed properties', () => {
		it('get classes', () => {
			expect(component.classes).toBeDefined();
		});

		it('get icon', () => {
			expect(component.icon).toEqual('book');
		});

		it('get fontSize', () => {
			expect(component.fontSize).toEqual('default');
		});
	});
});
