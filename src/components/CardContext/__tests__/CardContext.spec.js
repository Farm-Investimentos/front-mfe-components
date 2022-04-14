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
