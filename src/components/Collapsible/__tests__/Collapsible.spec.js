import { shallowMount } from '@vue/test-utils';

import Collapsible from '../Collapsible';

describe('Collapsible component', () => {
	let wrapper;
	let component;

	beforeEach(() => {
		wrapper = shallowMount(Collapsible, {
			propsData: {
				title: 'test',
				icon: 'home',
			},
		});
		component = wrapper.vm;
	});

	test('Collapsible created', () => {
		expect(wrapper).toBeDefined();
	});

	describe('Methods', () => {
		describe('onToggleCollapsible', () => {
			it('should set status to inverse from status param', () => {
				component.onToggleCollapsible(false);
				expect(component.status).toBeTruthy();
			});
		});
	});
});
