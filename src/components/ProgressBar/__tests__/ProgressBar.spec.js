import { shallowMount } from '@vue/test-utils';
import ProgressBar from '../ProgressBar';

describe('ProgressBar component', () => {
	let wrapper;
	let component;

	beforeEach(() => {
		wrapper = shallowMount(ProgressBar, {
			propsData: { value: 40 },
		});
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

	describe('computed properties', () => {
		it('classes', () => {
			expect(component.classes).toBeDefined();
			expect(component.classes).toHaveProperty('farm-progressbar');
		});
	});
});
