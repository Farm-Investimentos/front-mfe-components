import { shallowMount } from '@vue/test-utils';
import Checkbox from '../Checkbox';

describe('Checkbox component', () => {
	let wrapper;
	let component;

	beforeEach(() => {
		wrapper = shallowMount(Checkbox, {
			propsData: {
				value: false,
			},
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

	describe('methods', () => {
		it('makePristine', () => {
			component.isTouched = true;
			component.makePristine();
			expect(component.isTouched).toBeFalsy();
		});
	});
});
