import { shallowMount } from '@vue/test-utils';
import CardContext from '../CardContext';

describe('CardContext component', () => {
	let wrapper;
	let component;

	beforeEach(() => {
		wrapper = shallowMount(CardContext);
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
		it('Should compute isBold for false', () => {
			expect(component.isBold).toEqual('card-context-title');
		});

		it('Should compute isBold for true', async () => {
			await wrapper.setProps({
				bold: true,
			});
			expect(component.isBold).toEqual('card-context-title bold');
		});

		it('Should compute isHeightFull for false', () => {
			expect(component.isHeightFull).toEqual('card-context');
		});

		it('Should compute isHeightFull for true', async () => {
			await wrapper.setProps({
				full: true,
			});
			expect(component.isHeightFull).toEqual('card-context height-full');
		});

		it('Should compute isLargeLoading for false', () => {
			expect(component.isLargeLoading).toEqual('small');
		});

		it('Should compute isLargeLoading for true', async () => {
			await wrapper.setProps({
				largeLoading: true,
			});
			expect(component.isLargeLoading).toEqual('normal');
		});
	});
});
