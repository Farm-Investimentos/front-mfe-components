import { shallowMount } from '@vue/test-utils';
import ProgressBar from '../ProgressBar';

describe('ProgressBar component', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallowMount(ProgressBar, {
			propsData: { value: 40 },
		});
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
