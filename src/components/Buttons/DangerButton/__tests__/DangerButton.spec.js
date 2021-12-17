import { shallowMount } from '@vue/test-utils';
import DangerButton from '../DangerButton';

describe('DangerButton component', () => {
	let wrapper;
	let component;

	beforeEach(() => {
		wrapper = shallowMount(DangerButton);
		component = wrapper.vm;
	});

	test('Created hook', () => {
		expect(wrapper).toBeDefined();
	});

	describe('Computed properties', () => {
		it('Should return default icon', () => {
			wrapper.setProps({
				icon: true,
			});
			expect(component.iconPath).toEqual('mdi-trash-can');
		});

		it('Should return custom icon', async () => {
			await wrapper.setProps({
				icon: true,
				customIcon: 'information',
			});
			expect(component.iconPath).toEqual('mdi-information');
		});
	});
});
