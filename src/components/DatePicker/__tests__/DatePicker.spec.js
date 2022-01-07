import { shallowMount } from '@vue/test-utils';
import DatePicker from '../DatePicker';

describe('DatePicker component', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallowMount(DatePicker, {
			propsData: {
				inputId: 'someid',
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
