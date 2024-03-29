import { shallowMount } from '@vue/test-utils';
import RadioGroup from '../RadioGroup';

describe('RadioGroup component', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallowMount(RadioGroup, {
			propsData: {
				value: 1,
			},
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
