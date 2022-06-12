import { shallowMount } from '@vue/test-utils';
import LoggerItem from '../LoggerItem';

describe('LoggerItem component', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallowMount(LoggerItem, {
			propsData: {
				item: {
					icon: 'book',
					message: 'Recusado entre as pré elegíveis',
					userName: 'Cleyton Rasta',
					formattedDate: '13/06/2022  20:40',
					status: 'error',
				},
			},
		});
	});

	test('LoggerItem created', () => {
		expect(wrapper).toBeDefined();
	});
});
