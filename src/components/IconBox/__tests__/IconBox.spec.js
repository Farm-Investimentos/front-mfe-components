import { shallowMount } from '@vue/test-utils';
import IconBox from '../IconBox';

describe('IconBox component', () => {
	let wrapper;
	let component;

	beforeEach(() => {
		wrapper = shallowMount(IconBox, {
			propsData: {
				icon: 'mdi-book',
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

	describe('computed properties', () => {
		it('get iconParsed', () => {
			expect(component.iconParsed).toBeDefined();
			expect(component.iconParsed).toEqual('book');
		});

		it('get cssColorClass', () => {
			expect(component.cssColorClass).toEqual('farm-icon-box--secondary');
		});
	});
});
