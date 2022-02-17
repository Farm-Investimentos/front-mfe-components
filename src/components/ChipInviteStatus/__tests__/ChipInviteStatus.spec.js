import { shallowMount } from '@vue/test-utils';
import ChipInviteStatus from '../ChipInviteStatus.vue';
describe('ChipInviteStatus component', () => {
	let wrapper;
	let component;

	beforeEach(() => {
		wrapper = shallowMount(ChipInviteStatus, {
			propsData: {
				status: 'CONVIDAR',
			},
		});
		component = wrapper.vm;
	});
	test('ChipInviteStatus created', () => {
		expect(wrapper).toBeDefined();
	});

	describe('mount component', () => {
		it('renders correctly', () => {
			expect(wrapper.element).toMatchSnapshot();
		});
	});

	describe('Computed properties', () => {
		it('Should have text color', () => {
			expect(component.textColor).toBeDefined();
		});
		it('Should have color', () => {
			expect(component.color).toBeDefined();
		});
		it('Should have label', () => {
			expect(component.label).toBeDefined();
		});
	});
});
