import { shallowMount } from '@vue/test-utils';
import TableContextMenu from '../TableContextMenu';
import VListItem from 'vuetify/lib/components/VList/VListItem';
const items = [{ label: 'Remover', icon: { color: 'error', type: 'delete' }, handler: 'test' }];

describe('TableContextMenu component', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallowMount(TableContextMenu, {
			propsData: {
				items,
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

	describe('computed values', () => {
		it('should items to be created correctly', async () => {
			expect(wrapper.vm.items).toBeInstanceOf(Array);
			expect(wrapper.vm.items).toEqual(items);
		});
	});

	describe('emitted', () => {
		it('should emit event', async () => {
			wrapper.vm.onClick('test');
			await wrapper.vm.$nextTick();
			expect(wrapper.emitted().test).toBeTruthy();
		});
		it('should not emit click event without value', async () => {
			wrapper.vm.onClick();
			await wrapper.vm.$nextTick();
			expect(wrapper.emitted()).toEqual({});
		});
	});
});
