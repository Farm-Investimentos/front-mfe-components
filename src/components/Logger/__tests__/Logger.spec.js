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

		describe('isPreviousLogAndCurrentLogError', () => {
			it('should return true', () => {
				expect(component.isPreviousLogAndCurrentLogError(0)).toBeTruthy();
			});

			it('should return false', () => {
				expect(component.isPreviousLogAndCurrentLogError(1)).toBeFalsy();
			});
		});

		describe('isPreviousLogAndCurrentLogSuccess', () => {
			it('should return true', () => {
				expect(component.isPreviousLogAndCurrentLogSuccess(2)).toBeTruthy();
			});
			it('should return false', () => {
				expect(component.isPreviousLogAndCurrentLogSuccess(0)).toBeFalsy();
			});
		});

		describe('isPreviousLogErrorAndCurrentLogSuccess', () => {
			it('should return true', () => {
				expect(component.isPreviousLogErrorAndCurrentLogSuccess(3)).toBeTruthy();
			});
			it('should return false', () => {
				expect(component.isPreviousLogErrorAndCurrentLogSuccess(2)).toBeFalsy();
			});
		});
		describe('isPreviousLogSuccessAndCurrentLogError', () => {
			it('should return true', () => {
				expect(component.isPreviousLogSuccessAndCurrentLogError(1)).toBeTruthy();
			});
			it('should false', () => {
				expect(component.isPreviousLogSuccessAndCurrentLogError(2)).toBeFalsy();
			});
		});

		describe('isError', () => {
			it('should true when the status is error', () => {
				expect(component.isError(1)).toBeTruthy();
			});
			it('should false when the status is success', () => {
				expect(component.isError(2)).toBeFalsy();
			});
		});

		describe('isSuccess', () => {
			it('should return true when the status is success', () => {
				expect(component.isSuccess(2)).toBeTruthy();
			});
			it('should false when the status is error', () => {
				expect(component.isSuccess(1)).toBeFalsy();
			});
		});
	});
});
