import { shallowMount } from '@vue/test-utils';
import ResourceMetaInfo from '../ResourceMetaInfo.vue';

describe('ResourceMetaInfo component', () => {
	let wrapper;
	let component;

	beforeEach(() => {
		wrapper = shallowMount(ResourceMetaInfo, {
			propsData: {
				infos: {
					createdAt: '21/10/2022',
					createdBy: 'Test User',
					updatedAt: '21/10/2022',
					username: 'Test User',
					updatedHours: '10:10:10',
					createdHours: '10:10:10',
				},
			},
		});

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

	describe('Computed', () => {
		describe('showUpdate', () => {
			it('should return true when it has an update date', () => {
				expect(component.showUpdate).toBeTruthy();
			});

			it('should return false when it has not an update date', async () => {
				await wrapper.setProps({
					infos: { updatedAt: null },
				});
				expect(component.showUpdate).toBeFalsy();
			});

			it('should return true when it has not an update date but showEmptyUpdate is true', async () => {
				await wrapper.setProps({
					infos: { updatedAt: null },
					showEmptyUpdate: true,
				});
				expect(component.showUpdate).toBeTruthy();
			});
		});

		describe('showCreate', () => {
			it('should return true when it has an create date', () => {
				expect(component.showCreate).toBeTruthy();
			});

			it('should return false when it has not an create date', async () => {
				await wrapper.setProps({
					infos: { createAt: null },
				});
				expect(component.showCreate).toBeFalsy();
			});

			it('should return true when it has not an update date but showEmptyCreate is true', async () => {
				await wrapper.setProps({
					infos: { createAt: null },
					showEmptyCreate: true,
				});
				expect(component.showCreate).toBeTruthy();
			});
		});

		describe('showCreateBy', () => {
			it('should return true when it has an createby date', () => {
				expect(component.showCreatedBy).toBeTruthy();
			});

			it('should return false when it has not an createdby date', async () => {
				await wrapper.setProps({
					infos: { createdBy: null },
				});
				expect(component.showCreatedBy).toBeFalsy();
			});
		});

		describe('showCreatedHours', () => {
			it('should return true when it has an createdHours', () => {
				expect(component.showCreatedHours).toBeTruthy();
			});

			it('should return false when it has not an createdHours', async () => {
				await wrapper.setProps({
					infos: { createdHours: null },
				});
				expect(component.showCreatedHours).toBeFalsy();
			});
		});

		describe('formattedCreatedAt', () => {
			it('should return infos createdAt', () => {
				expect(component.formattedCreatedAt).toBe('21/10/2022');
			});

			it('should return N/A when infos createdAt is empty', async () => {
				await wrapper.setProps({
					infos: { createAt: null },
				});
				expect(component.formattedCreatedAt).toBe('N/A');
			});
		});

		describe('formattedCreatedBy', () => {
			it('should return infos createdBy', () => {
				expect(component.formattedCreatedBy).toBe('Test User');
			});

			it('should return N/A when infos createdBy is empty', async () => {
				await wrapper.setProps({
					infos: { createdBy: null },
				});
				expect(component.formattedCreatedBy).toBe('N/A');
			});
		});

		describe('formattedUpdatedAt', () => {
			it('should return infos updatedAt', () => {
				expect(component.formattedUpdatedAt).toBe('21/10/2022');
			});

			it('should return N/A when infos updatedAt is empty', async () => {
				await wrapper.setProps({
					infos: { updatedAt: null },
				});
				expect(component.formattedUpdatedAt).toBe('N/A');
			});
		});

		describe('formattedUsername', () => {
			it('should return infos updatedAt', () => {
				expect(component.formattedUsername).toBe('Test User');
			});

			it('should return N/A when infos username is empty', async () => {
				await wrapper.setProps({
					infos: { username: null },
				});
				expect(component.formattedUsername).toBe('N/A');
			});
		});

		describe('formattedUpdatedHours', () => {
			it('should return infos updatedHours', () => {
				expect(component.formattedUpdatedHours).toBe('10:10:10');
			});

			it('should return N/A when infos updatedHours is empty', async () => {
				await wrapper.setProps({
					infos: { updatedHours: null },
				});
				expect(component.formattedUpdatedHours).toBe('N/A');
			});
		});

		describe('formattedCreatedHours', () => {
			it('should return infos createdHours', () => {
				expect(component.formattedCreatedHours).toBe('10:10:10');
			});

			it('should return N/A when infos createdHours is empty', async () => {
				await wrapper.setProps({
					infos: { createdHours: null },
				});
				expect(component.formattedCreatedHours).toBe('N/A');
			});
		});
	});
});
