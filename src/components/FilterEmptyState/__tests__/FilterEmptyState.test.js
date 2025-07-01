import { mount } from '@vue/test-utils';
import FilterEmptyState from '../FilterEmptyState.vue';

const globalStubs = {
	'farm-box': { template: '<div><slot /></div>' },
	'farm-row': { template: '<div><slot /></div>' },
	'farm-bodytext': { template: '<div><slot /></div>' },
	'farm-caption': { template: '<div><slot /></div>' },
};

describe('FilterEmptyState', () => {
	it('renders empty state correctly', () => {
		const wrapper = mount(FilterEmptyState, {
			propsData: {
				isEmpty: true,
				isNotFound: false,
			},
			stubs: globalStubs,
		});

		expect(wrapper.find('.filter-empty-state__image').exists()).toBe(true);
		expect(wrapper.text()).toContain('Nenhuma informação para exibir aqui');
		expect(wrapper.text()).toContain('Tente filtrar novamente sua pesquisa.');
	});

	it('renders not found state correctly', () => {
		const wrapper = mount(FilterEmptyState, {
			propsData: {
				isEmpty: false,
				isNotFound: true,
			},
			stubs: globalStubs,
		});

		expect(wrapper.find('.filter-empty-state__image').exists()).toBe(true);
		expect(wrapper.text()).toContain('Nenhuma informação para exibir aqui');
		expect(wrapper.text()).toContain('Tente filtrar novamente sua pesquisa.');
	});

	it('renders custom title and subtitle', () => {
		const wrapper = mount(FilterEmptyState, {
			propsData: {
				isEmpty: true,
				title: 'Custom Title',
				subtitle: 'Custom Subtitle',
			},
			stubs: globalStubs,
		});

		expect(wrapper.text()).toContain('Custom Title');
		expect(wrapper.text()).toContain('Custom Subtitle');
	});

	it('uses custom images when provided', () => {
		const wrapper = mount(FilterEmptyState, {
			propsData: {
				isEmpty: true,
				isEmptyImage: 'custom-empty-image.svg',
				isEmptyImageAlt: 'Custom empty image',
			},
			stubs: globalStubs,
		});

		const img = wrapper.find('.filter-empty-state__image');
		expect(img.exists()).toBe(true);
		expect(img.attributes('src')).toBe('custom-empty-image.svg');
		expect(img.attributes('alt')).toBe('Custom empty image');
	});

	it('uses custom not found images when provided', () => {
		const wrapper = mount(FilterEmptyState, {
			propsData: {
				isNotFound: true,
				isNotFoundImage: 'custom-not-found-image.svg',
				isNotFoundImageAlt: 'Custom not found image',
			},
			stubs: globalStubs,
		});

		const img = wrapper.find('.filter-empty-state__image');
		expect(img.exists()).toBe(true);
		expect(img.attributes('src')).toBe('custom-not-found-image.svg');
		expect(img.attributes('alt')).toBe('Custom not found image');
	});

	it('has correct default props', () => {
		const wrapper = mount(FilterEmptyState, {
			stubs: globalStubs,
		});

		expect(wrapper.props('isEmpty')).toBe(true);
		expect(wrapper.props('isNotFound')).toBe(false);
		expect(wrapper.props('title')).toBe('');
		expect(wrapper.props('subtitle')).toBe('');
	});

	it('shows empty image by default when no props are provided', () => {
		const wrapper = mount(FilterEmptyState, {
			stubs: globalStubs,
		});

		expect(wrapper.find('.filter-empty-state__image').exists()).toBe(true);
	});

	it('shows empty image when isEmpty is false and isNotFound is false', () => {
		const wrapper = mount(FilterEmptyState, {
			propsData: {
				isEmpty: false,
				isNotFound: false,
			},
			stubs: globalStubs,
		});

		expect(wrapper.find('.filter-empty-state__image').exists()).toBe(true);
	});

	it('prioritizes isNotFound over isEmpty', () => {
		const wrapper = mount(FilterEmptyState, {
			propsData: {
				isEmpty: true,
				isNotFound: true,
			},
			stubs: globalStubs,
		});

		const img = wrapper.find('.filter-empty-state__image');
		expect(img.exists()).toBe(true);
		expect(img.attributes('alt')).toBe('Imagem referente a filtro vazio');
	});
});
