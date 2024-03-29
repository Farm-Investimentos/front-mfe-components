import { shallowMount } from '@vue/test-utils';
import LoggerItem from '../LoggerItem';

describe('LoggerItem component', () => {
	let wrapper;
	let component;

	beforeEach(() => {
		wrapper = shallowMount(LoggerItem, {
			propsData: {
				item: {},
			},
		});
		component = wrapper.vm;
	});

	test('LoggerItem created', () => {
		expect(wrapper).toBeDefined();
	});

	describe('Computed properties', () => {
		it('Should return custom icon', async () => {
			await wrapper.setProps({
				item: {
					message: 'Recusado entre as pré elegíveis',
					userName: 'Cleyton Rasta',
					formattedDate: '13/06/2022  20:40',
					icon: 'aaa',
				},
			});
			expect(component.mdiIconName).toEqual('aaa');
		});

		it('Should return success icon', async () => {
			await wrapper.setProps({
				item: {
					status: 'success',
				},
			});
			expect(component.mdiIconName).toEqual('check');
		});

		it('Should return success icon', async () => {
			await wrapper.setProps({
				item: {
					status: 'error',
				},
			});
			expect(component.mdiIconName).toEqual('close');
		});

		it('Should return success button color', async () => {
			await wrapper.setProps({
				item: {
					status: 'success',
				},
			});
			expect(component.buttonColor).toEqual('success');
		});

		it('Should return error button color', async () => {
			await wrapper.setProps({
				item: {
					status: 'error',
				},
			});
			expect(component.buttonColor).toEqual('error');
		});

		it('Should return default button color', async () => {
			await wrapper.setProps({
				item: {
					status: 'primary',
				},
			});
			expect(component.buttonColor).toEqual('primary');
		});

		it('Should not have a detail button', async () => {
			await wrapper.setProps({
				item: {
					details: () => {},
				},
			});

			expect(component.hasDetails).toBeTruthy();
		});

		it('Should not have a detail button', () => {
			expect(component.hasDetails).toBeFalsy();
		});
	});
});
