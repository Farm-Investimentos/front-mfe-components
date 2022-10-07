import { shallowMount } from '@vue/test-utils';
import ChipInviteStatus from '../ChipInviteStatus.vue';
describe('ChipInviteStatus component', () => {
	let wrapper;
	let component;

	beforeEach(() => {
		wrapper = shallowMount(ChipInviteStatus, {
			propsData: {
				status: 10,
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
});
