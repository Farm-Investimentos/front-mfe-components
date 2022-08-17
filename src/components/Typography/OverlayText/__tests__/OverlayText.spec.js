import { shallowMount } from '@vue/test-utils';
import OverlayText from '../OverlayText.vue';

describe('OverlayText component', () => {
	let wrapper;
	let component;

	beforeEach(() => {
		wrapper = shallowMount(OverlayText, {});
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
});
