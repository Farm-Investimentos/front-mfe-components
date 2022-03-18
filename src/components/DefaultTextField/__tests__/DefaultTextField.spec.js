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

		it('Should have default inputRules', () => {
			expect(component.inputRules).toEqual([]);
		});

		it('Should have inputRules from prop', async () => {
			expect(component.inputRules).toEqual([]);
			await wrapper.setProps({
				rules: [jest.fn()],
			});
			expect(component.inputRules.length).toEqual(1);
		});

		it('Should not have inputRules if disabled', async () => {
			expect(component.inputRules).toEqual([]);
			await wrapper.setProps({
				rules: [jest.fn()],
				disabled: true,
			});
			expect(component.inputRules.length).toEqual(0);
		});
	});
});
