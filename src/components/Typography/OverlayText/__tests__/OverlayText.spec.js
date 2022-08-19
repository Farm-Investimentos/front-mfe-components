import { shallowMount } from '@vue/test-utils';
import OverlayText from '../OverlayText.vue';

describe('OverlayText component', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallowMount(OverlayText, {});
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
