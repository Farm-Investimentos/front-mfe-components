import { shallowMount } from '@vue/test-utils';
import Logger from '../Logger';

describe('Logger component', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallowMount(Logger, {
			propsData: {
				items: [
					{
						icon: 'book',
						message: 'Recusado entre as pré elegíveis',
						userName: 'Cleyton Rasta',
						formattedDate: '13/06/2022  20:40',
						status: 'error',
					},
				],
			},
		});
	});

	test('Logger created', () => {
		expect(wrapper).toBeDefined();
	});
});
