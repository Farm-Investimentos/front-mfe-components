import { shallowMount } from '@vue/test-utils';
import Vue from 'vue';
import Typography from '../Typography';

describe('Typography component', () => {
	let wrapper;
	let component;

	beforeEach(() => {
		wrapper = shallowMount(Typography, {});
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

	describe('Computed properties', () => {
		it('Should have isSizeFromBreakpoints', () => {
			expect(component.isSizeFromBreakpoints).toBeFalsy();
		});

		it('Should have isSizeFromBreakpoints truthy', async () => {
			const wrapperTest = shallowMount(Typography, {
				propsData: {
					size: 'lg',
				},
			});
			expect(wrapperTest.vm.isSizeFromBreakpoints).toBeTruthy();
		});
	});
});
