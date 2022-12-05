import { shallowMount } from '@vue/test-utils';
import Logger from '../Logger';

describe('Logger component', () => {
	let wrapper;
	let component;

	beforeEach(() => {
		wrapper = shallowMount(Logger, {
			propsData: {
				items: [
					{
						icon: 'book',
						message: 'Recusado entre as pré elegíveis',
						userName: 'Cleyton Rasta',
						formattedDate: '13/06/2022  20:40',
						status: 'error',
					},
					{
						icon: 'book',
						message: 'Recusado entre as pré elegíveis',
						userName: 'Cleyton Rasta',
						formattedDate: '13/06/2022  20:40',
						status: 'error',
					},
					{
						icon: 'book',
						message: 'Aceito entre as pré elegíveis',
						userName: 'Cleyton Rasta',
						formattedDate: '13/06/2022  20:40',
						status: 'success',
					},
					{
						icon: 'book',
						message: 'Aceito entre as pré elegíveis',
						userName: 'Cleyton Rasta',
						formattedDate: '13/06/2022  20:40',
						status: 'success',
					},
					{
						icon: 'book',
						message: 'Recusado entre as pré elegíveis',
						userName: 'Cleyton Rasta',
						formattedDate: '13/06/2022  20:40',
						status: 'error',
					},
				],
			},
		});
		component = wrapper.vm;
	});

	test('Logger created', () => {
		expect(wrapper).toBeDefined();
	});

	describe('Methods', () => {
		describe('hasDivider', () => {
			it('should return true when it has a next item', () => {
				expect(component.hasDivider(0)).toBeTruthy();
			});

			it('should return false when it has not a next item', () => {
				expect(component.hasDivider(4)).toBeFalsy();
			});
		});

		describe('dividerCssClass', () => {
			it('should return true', () => {
				expect(component.dividerCssClass(0)).toEqual('logger__divider--error-to-error');
				expect(component.dividerCssClass(1)).toEqual('logger__divider--error-to-success');
			});
		});
	});
});
