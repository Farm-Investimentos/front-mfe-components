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
		title: {
			control: { type: 'text' },
			description: 'Título personalizado',
		},
		subtitle: {
			control: { type: 'text' },
			description: 'Subtítulo personalizado',
		},
	},
	args: {
		isEmpty: true,
		isNotFound: false,
	},
};

// Empty state image
export const EmptyStateImage = args => ({
	components: { FilterEmptyState },
	setup() {
		return { args };
	},
	template: '<farm-filter-empty-state v-bind="args" />',
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
	template: '<farm-filter-empty-state v-bind="args" />',
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
		<farm-filter-empty-state v-bind="args">
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

// Custom titles via props
export const CustomTitlesViaProps = args => ({
	components: { FilterEmptyState },
	setup() {
		return { args };
	},
	template: '<farm-filter-empty-state v-bind="args" />',
});
CustomTitlesViaProps.storyName = 'Custom titles via props';
CustomTitlesViaProps.args = {
	isEmpty: true,
	isNotFound: false,
	title: 'Nenhum resultado encontrado',
	subtitle: 'Tente ajustar os filtros ou realizar uma nova busca',
};

// Custom image for empty state
export const CustomImageEmptyState = args => ({
	components: { FilterEmptyState },
	setup() {
		return { args };
	},
	template: '<farm-filter-empty-state v-bind="args" />',
});
CustomImageEmptyState.storyName = 'Custom image - Empty state';
CustomImageEmptyState.args = {
	isEmpty: true,
	isNotFound: false,
	isEmptyImage: 'https://placehold.co/250x263/85D027/FFFFFF?text=Custom+Empty+Image',
	isEmptyImageAlt: 'Imagem customizada para estado vazio',
};

// Custom image for not found state
export const CustomImageNotFoundState = args => ({
	components: { FilterEmptyState },
	setup() {
		return { args };
	},
	template: '<farm-filter-empty-state v-bind="args" />',
});
CustomImageNotFoundState.storyName = 'Custom image - Not found state';
CustomImageNotFoundState.args = {
	isEmpty: false,
	isNotFound: true,
	isNotFoundImage: 'https://placehold.co/250x216/85D027/FFFFFF?text=Custom+Not+Found',
	isNotFoundImageAlt: 'Imagem customizada para estado não encontrado',
};

// Use case: Empty list (no data initially)
export const UseCaseEmptyList = args => ({
	components: { FilterEmptyState },
	setup() {
		return { args };
	},
	template: `
		<div style="border: 2px dashed #ccc; padding: 20px; border-radius: 8px;">
			<h3 style="margin-top: 0;">Lista de Produtos</h3>
			<farm-filter-empty-state v-bind="args" />
		</div>
	`,
});
UseCaseEmptyList.storyName = 'Use case: Empty list';
UseCaseEmptyList.parameters = {
	docs: {
		description: {
			story: 'Cenário: Lista inicial sem dados cadastrados',
		},
	},
};
UseCaseEmptyList.args = {
	isEmpty: true,
	isNotFound: false,
	title: 'Nenhum produto cadastrado',
	subtitle: 'Comece adicionando seu primeiro produto',
};

// Use case: Filter with no results
export const UseCaseFilterNoResults = args => ({
	components: { FilterEmptyState },
	setup() {
		return { args };
	},
	template: `
		<div style="border: 2px dashed #ccc; padding: 20px; border-radius: 8px;">
			<h3 style="margin-top: 0;">Resultados da Busca</h3>
			<div style="margin-bottom: 16px; padding: 8px; background: #f5f5f5; border-radius: 4px;">
				<strong>Filtros aplicados:</strong> Categoria: "Eletrônicos" | Status: "Ativo"
			</div>
			<farm-filter-empty-state v-bind="args" />
		</div>
	`,
});
UseCaseFilterNoResults.storyName = 'Use case: Filter no results';
UseCaseFilterNoResults.parameters = {
	docs: {
		description: {
			story: 'Cenário: Busca/filtro sem resultados correspondentes',
		},
	},
};
UseCaseFilterNoResults.args = {
	isEmpty: false,
	isNotFound: true,
	title: 'Nenhum resultado encontrado',
	subtitle: 'Tente remover alguns filtros ou ajustar sua busca',
};

// Use case: Search no results
export const UseCaseSearchNoResults = args => ({
	components: { FilterEmptyState },
	setup() {
		return { args };
	},
	template: `
		<div style="border: 2px dashed #ccc; padding: 20px; border-radius: 8px;">
			<h3 style="margin-top: 0;">Busca</h3>
			<div style="margin-bottom: 16px;">
				<input 
					type="text" 
					value="iPhone 15 Pro Max Ultra" 
					style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px;"
					disabled
				/>
			</div>
			<farm-filter-empty-state v-bind="args" />
		</div>
	`,
});
UseCaseSearchNoResults.storyName = 'Use case: Search no results';
UseCaseSearchNoResults.parameters = {
	docs: {
		description: {
			story: 'Cenário: Busca por texto sem resultados',
		},
	},
};
UseCaseSearchNoResults.args = {
	isEmpty: false,
	isNotFound: true,
	title: 'Nenhum item corresponde à sua busca',
	subtitle: 'Verifique a ortografia ou tente termos diferentes',
};

// Interactive playground
export const Playground = args => ({
	components: { FilterEmptyState },
	setup() {
		return { args };
	},
	template: '<farm-filter-empty-state v-bind="args" />',
});
Playground.storyName = 'Playground';
Playground.parameters = {
	docs: {
		description: {
			story: 'Experimente diferentes combinações de props usando os controles abaixo',
		},
	},
};
Playground.args = {
	isEmpty: true,
	isNotFound: false,
	title: '',
	subtitle: '',
};
