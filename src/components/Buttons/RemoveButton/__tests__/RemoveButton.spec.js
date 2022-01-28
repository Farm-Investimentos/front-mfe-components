import { shallowMount } from '@vue/test-utils';
import RemoveButton from '../RemoveButton';

describe('RemoveButton component', () => {
	let wrapper;
	let component;

	beforeEach(() => {
		wrapper = shallowMount(RemoveButton);
		component = wrapper.vm;
	});

	test('Created hook', () => {
		expect(wrapper).toBeDefined();
	});

	describe('Methods', () => {
		it('Should emit event', () => {
			component.onClick();
			expect(wrapper.emitted().onClick).toBeDefined();
		});
	});
});
