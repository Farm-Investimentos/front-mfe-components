import { shallowMount } from '@vue/test-utils';
import DefaultButton from '../DefaultButton';

describe('DefaultButton component', () => {
	let wrapper;
	let component;

	beforeEach(() => {
		wrapper = shallowMount(DefaultButton);
		component = wrapper.vm;
	});

	test('Created hook', () => {
		expect(wrapper).toBeDefined();
	});

	describe('computed properties', () => {
		it('get isRound false', () => {
			expect(component.isRound).toBeFalsy();
		});

		it('get isRound false', async () => {
			await wrapper.setProps({ icon: true });
			expect(component.isRound).toBeTruthy();
		});

		it('get isElevated false', () => {
			expect(component.isElevated).toBeTruthy();
		});

		it('get classes', () => {
			expect(component.classes).toBeDefined();
		});

	});
});
