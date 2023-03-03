import { shallowMount } from '@vue/test-utils';
import Tabs from '../TabsV2';

describe('Tabs component', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallowMount(Tabs);
	});

	test('Created hook', () => {
		expect(wrapper).toBeDefined();
	});

	describe('methods', () => {
		it('Should check isSelected', () => {
			expect(wrapper.vm.isSelected(1)).toBeFalsy();
		});

		it('Should emit event when tab is changed', () => {
			wrapper.vm.changeTab();
			expect(wrapper.emitted().update).toBeTruthy();
		});

		it('Should emit event when next is triggered', () => {
			wrapper.vm.next();
			expect(wrapper.emitted().update).toBeTruthy();
		});

		it('Should emit event when previous is triggered', () => {
			wrapper.vm.previous();
			expect(wrapper.emitted().update).toBeTruthy();
		});

		it('Should emit event when toIndex is triggered', () => {
			wrapper.vm.toIndex(1);
			expect(wrapper.vm.selected).toEqual(1);
			expect(wrapper.emitted().update).toBeTruthy();
		});

		it('Should updateTab in parent and route', () => {
			const _component = {
				currentTab: '',
				$router: {
					history: {
						current: {
							path: 'some',
						},
					},
					push: () => {},
				},
			};
			const spyObj = jest.spyOn(_component.$router, 'push');
			wrapper.vm.updateTabRouting(_component, { path: 'desembolso' }, 'nextRoutePrefix');
			expect(_component.currentTab).toEqual('desembolso');
			expect(spyObj).toHaveBeenCalled();
		});
	});
});
