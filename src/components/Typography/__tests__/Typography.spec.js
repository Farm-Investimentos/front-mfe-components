import { shallowMount } from '@vue/test-utils';
import Typography from '../Typography';

describe('Typography component', () => {
	let wrapper;
	let component;

	beforeEach(() => {
		wrapper = shallowMount(Typography, {
			propsData: {
				tag: 'li',
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

		it('Should have style', () => {
			expect(component.style).toBeDefined();
		});
	});

	describe('Prop data', () => {
		it('Should have li tag', async () => {
			expect(component.tag).toEqual('li');
		});

		it('Should not allow invalid html tag', async () => {
			const wrapperTest = shallowMount(Typography, {
				propsData: {
					tag: 'section',
				},
			});
			expect(wrapperTest.vm.tag).toEqual('p');
		});
	});
});
