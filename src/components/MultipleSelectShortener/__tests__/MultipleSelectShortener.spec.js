import { shallowMount } from '@vue/test-utils';
import MultipleSelectShortener from '../index';

describe('MultipleSelectShortener component', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallowMount(MultipleSelectShortener, {
			propsData: {
				item: {},
				index: 0,
				labelKey: '',
				itemsLength: 0,
			},
		});
	});

	test('Created hook', () => {
		expect(wrapper).toBeDefined();
	});
});
