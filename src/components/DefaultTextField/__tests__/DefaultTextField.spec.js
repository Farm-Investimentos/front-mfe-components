import { shallowMount } from '@vue/test-utils';
import DefaultTextField from '../DefaultTextField';

describe('DefaultTextField component', () => {
	let wrapper;
	let component;

	beforeEach(() => {
		wrapper = shallowMount(DefaultTextField, {
			propsData: {
				item: { key: 'key' },
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

	describe('Computed properties', () => {
		it('Should have inputId', () => {
			expect(component.inputId).toEqual('form-key');
		});
	});
});
