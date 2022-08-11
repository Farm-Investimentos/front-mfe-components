import { shallowMount } from '@vue/test-utils';
import BodyText from '../BodyText.vue';

describe('BodyText component', () => {
	let wrapper;
	let component;

	beforeEach(() => {
		wrapper = shallowMount(BodyText, {});
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
				type: 2,
			});
			expect(component.weight).toEqual(500);
		});
	});
});
