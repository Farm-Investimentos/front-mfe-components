import { shallowMount } from '@vue/test-utils';
import Heading from '../Heading.vue';

describe('Heading component', () => {
	let wrapper;
	let component;

	beforeEach(() => {
		wrapper = shallowMount(Heading, {});
		component = wrapper.vm;
	});

	test('Created hook', () => {
		expect(wrapper).toBeDefined();
	});

	describe('mount component', () => {
		it('renders correctly', () => {
			expect(wrapper.element).toMatchSnapshot();
			expect(component.tag).toEqual('h1');
		});
	});

	describe('Computed properties', () => {
		it('Should return tag', async () => {
			await wrapper.setProps({
				type: 5,
			});
			expect(component.tag).toEqual('h5');
		});
		it('Should return size', async () => {
			await wrapper.setProps({
				type: 5,
			});
			expect(component.size).toEqual('xl');
		});
	});
});
