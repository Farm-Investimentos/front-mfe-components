import { mount } from '@vue/test-utils';
import FilterEmptyState from '../FilterEmptyState.vue';

describe('FilterEmptyState', () => {
	it('renders empty state correctly', () => {
		const wrapper = mount(FilterEmptyState, {
			props: {
				isEmpty: true,
				isNotFound: false,
			},
		});

		expect(wrapper.find('.filter-empty-state__image').exists()).toBe(true);
		expect(wrapper.text()).toContain('Nenhuma informação para exibir aqui');
		expect(wrapper.text()).toContain('Tente filtrar novamente sua pesquisa.');
	});

	it('renders not found state correctly', () => {
		const wrapper = mount(FilterEmptyState, {
			props: {
				isEmpty: false,
				isNotFound: true,
			},
		});

		expect(wrapper.find('.filter-empty-state__image').exists()).toBe(true);
		expect(wrapper.text()).toContain('Nenhuma informação para exibir aqui');
		expect(wrapper.text()).toContain('Tente filtrar novamente sua pesquisa.');
	});

	it('renders custom title and subtitle', () => {
		const wrapper = mount(FilterEmptyState, {
			props: {
				isEmpty: true,
				title: 'Custom Title',
				subtitle: 'Custom Subtitle',
			},
		});

		expect(wrapper.text()).toContain('Custom Title');
		expect(wrapper.text()).toContain('Custom Subtitle');
	});

	it('uses custom images when provided', () => {
		const wrapper = mount(FilterEmptyState, {
			props: {
				isEmpty: true,
				isEmptyImage: 'custom-empty-image.svg',
				isEmptyImageAlt: 'Custom empty image',
			},
		});

		const img = wrapper.find('.filter-empty-state__image');
		expect(img.attributes('src')).toBe('custom-empty-image.svg');
		expect(img.attributes('alt')).toBe('Custom empty image');
	});

	it('uses custom not found images when provided', () => {
		const wrapper = mount(FilterEmptyState, {
			props: {
				isNotFound: true,
				isNotFoundImage: 'custom-not-found-image.svg',
				isNotFoundImageAlt: 'Custom not found image',
			},
		});

		const img = wrapper.find('.filter-empty-state__image');
		expect(img.attributes('src')).toBe('custom-not-found-image.svg');
		expect(img.attributes('alt')).toBe('Custom not found image');
	});

	it('has correct default props', () => {
		const wrapper = mount(FilterEmptyState);

		expect(wrapper.props('isEmpty')).toBe(false);
		expect(wrapper.props('isNotFound')).toBe(false);
		expect(wrapper.props('title')).toBe('Nenhuma informação para exibir aqui');
		expect(wrapper.props('subtitle')).toBe('Tente filtrar novamente sua pesquisa.');
	});
});
