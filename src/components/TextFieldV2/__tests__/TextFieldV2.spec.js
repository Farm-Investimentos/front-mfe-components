import { shallowMount } from '@vue/test-utils';
import TextFieldV2 from '../TextFieldV2';

describe('TextFieldV2 component', () => {
	let wrapper;
	let component;

	beforeEach(() => {
		wrapper = shallowMount(TextFieldV2, {
			directives: {
				mask: () => {},
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
		it('reset', () => {
			component.reset();
			expect(component.isTouched).toBeTruthy();
			expect(component.innerValue).toEqual('');
		});

		it('onKeyUp', () => {
			component.onKeyUp();
			expect(component.isTouched).toBeTruthy();
		});

		it('onBlur', () => {
			component.onBlur();
			expect(component.isBlured).toBeTruthy();
		});

		it('makePristine', () => {
			component.isTouched = true;
			component.isBlured = true;
			component.makePristine();
			expect(component.isTouched).toBeFalsy();
			expect(component.isBlured).toBeFalsy();
		});
	});
});
