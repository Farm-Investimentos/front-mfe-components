import { shallowMount } from '@vue/test-utils';
import Small from '../Small.vue';

describe('Small component', () => {
	let wrapper;
	let component;

	beforeEach(() => {
		wrapper = shallowMount(Small, {});
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
		it('Should return weight 500', async () => {
			await wrapper.setProps({
				variation: 'medium',
			});
			expect(component.weight).toEqual(500);
		});
	});
});
