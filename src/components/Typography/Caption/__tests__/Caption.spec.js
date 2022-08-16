import { shallowMount } from '@vue/test-utils';
import Caption from '../Caption.vue';

describe('Caption component', () => {
	let wrapper;
	let component;

	beforeEach(() => {
		wrapper = shallowMount(Caption, {});
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
		it('Should return weight', async () => {
			await wrapper.setProps({
				variation: 'medium',
			});
			expect(component.weight).toEqual(500);
		});
	});
});
