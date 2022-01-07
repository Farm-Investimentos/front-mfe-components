import { shallowMount } from '@vue/test-utils';
import AlertReload from '../AlertReload';

describe('AlertReload component', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallowMount(AlertReload, {
			propsData: {
				managersString: 'a,b,c',
			},
		});
	});

	test('Created hook', () => {
		expect(wrapper).toBeDefined();
	});
});
