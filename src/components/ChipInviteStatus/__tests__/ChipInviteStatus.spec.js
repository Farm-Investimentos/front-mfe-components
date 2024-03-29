import { shallowMount } from '@vue/test-utils';
import ChipInviteStatus from '../ChipInviteStatus.vue';
describe('ChipInviteStatus component', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallowMount(ChipInviteStatus, {
			propsData: {
				status: 10,
			},
		});
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
