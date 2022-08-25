import CardContext from './CardContext.vue';

export default {
	title: 'Surfaces/CardContext',
	component: CardContext,
	parameters: {
		docs: {
			description: {
				component: `Card Context<br />
				selector: <em>farm-card-context</em>
				`,
			},
		},
		viewMode: 'docs',
	},
};

export const Primary = () => ({
	template: `
        <farm-card-context icon="mdi-currency-usd" title="Titulo do Card">
            <p>Conteúdo do Card</p>
        </farm-card-context>
    `,
});

export const Secondary = () => ({
	template: `
        <farm-card-context icon="mdi-currency-usd" title="Titulo do Card" bold>
            <p>Conteúdo do Card</p>
        </farm-card-context>
    `,
});

export const WithLoading = () => ({
	template: `
        <farm-card-context icon="mdi-currency-usd" title="Titulo do Card" isLoading>
            <p>Conteúdo do Card</p>
        </farm-card-context>
    `,
});

export const WithLoadingLarge = () => ({
	template: `
        <farm-card-context icon="mdi-currency-usd" title="Titulo do Card" isLoading largeLoading>
            <p>Conteúdo do Card</p>
        </farm-card-context>
    `,
});

export const WithError = () => ({
	components: { CardContext },
	template: `
        <farm-card-context icon="mdi-currency-usd" title="Titulo do Card" isError>
            <p>Conteúdo do Card</p>
        </farm-card-context>
    `,
});

export const NoIcon = () => ({
	components: { CardContext },
	template: `
        <farm-card-context title="Titulo do Card">
            <p>Conteúdo do Card</p>
        </farm-card-context>
    `,
});
