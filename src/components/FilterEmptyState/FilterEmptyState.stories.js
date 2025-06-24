import FilterEmptyState from './FilterEmptyState.vue';

export default {
	title: 'Display/FilterEmptyState',
	component: FilterEmptyState,
	parameters: {
		docs: {
			description: {
				component: `Componente para exibir estados vazios em filtros<br />
				selector: <em>farm-filter-empty-state</em><br />
				<span style="color: var(--farm-primary-base);">ready for use</span>
				`,
			},
		},
		viewMode: 'docs',
	},
	argTypes: {
		isEmpty: {
			control: { type: 'boolean' },
			description: 'Indica se o estado é vazio (sem dados)',
		},
		isNotFound: {
			control: { type: 'boolean' },
			description: 'Indica se o estado é não encontrado (sem resultados do filtro)',
		},
		isEmptyImage: {
			control: { type: 'text' },
			description: 'URL da imagem personalizada para estado vazio',
		},
		isEmptyImageAlt: {
			control: { type: 'text' },
			description: 'Texto alternativo da imagem para estado vazio',
		},
		isNotFoundImage: {
			control: { type: 'text' },
			description: 'URL da imagem personalizada para estado não encontrado',
		},
		isNotFoundImageAlt: {
			control: { type: 'text' },
			description: 'Texto alternativo da imagem para estado não encontrado',
		},
		title: { table: { disable: true } },
		subtitle: { table: { disable: true } },
	},
};

// Empty state image
export const EmptyStateImage = args => ({
	components: { FilterEmptyState },
	setup() {
		return { args };
	},
	template: '<farm-filter-empty-state v-bind="args" :isEmpty="true" />',
});
EmptyStateImage.storyName = 'Empty state image';
EmptyStateImage.args = {
	isEmpty: true,
	isNotFound: false,
};

// Not found state image
export const NotFoundStateImage = args => ({
	components: { FilterEmptyState },
	setup() {
		return { args };
	},
	template: '<farm-filter-empty-state v-bind="args" :isNotFound="true" />',
});
NotFoundStateImage.storyName = 'Not found state image';
NotFoundStateImage.args = {
	isEmpty: false,
	isNotFound: true,
};

// Custom titles and subtitles (slot)
export const CustomTitlesAndSubtitles = args => ({
	components: { FilterEmptyState },
	setup() {
		return { args };
	},
	template: `
		<farm-filter-empty-state v-bind="args" :isEmpty="true">
			<template #title>
				<span style="color: #4f8406;">Título customizado via slot</span>
			</template>
			<template #subtitle>
				<span>Subtítulo <b>com HTML</b> via slot</span>
			</template>
		</farm-filter-empty-state>
	`,
});
CustomTitlesAndSubtitles.storyName = 'Custom titles and subtitles (slot)';
CustomTitlesAndSubtitles.args = {
	isEmpty: true,
	isNotFound: false,
};
