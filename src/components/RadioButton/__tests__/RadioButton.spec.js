import { shallowMount } from '@vue/test-utils';
import RadioButton from '../RadioButton.vue';

describe('RadioButton component', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallowMount(RadioButton, {
			propsData: {
				value: 2,
				label: ['teste', 'teste', 'teste', 'teste'],
				isBlock: true,
				items: [],
			},
		});
	});

	test('Created hook', () => {
		expect(wrapper).toBeDefined();
	});
});
