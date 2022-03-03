import { shallowMount } from '@vue/test-utils';
import ModalPromptUser from '../ModalPromptUser';

describe('ModalPromptUser component', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallowMount(ModalPromptUser, {
			propsData: {
				value: false,
				title: '',
				subtitle: '',
				match: 'CONFIRMAR',
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
