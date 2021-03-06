import CardContext from './CardContext.vue';


export default {
	title: 'API/CardContext',
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
	components: { CardContext },
	template: `
        <CardContext icon="mdi-currency-usd" title="Titulo do Card">
            <p>Conteúdo do Card</p>
        </CardContext>
    `,
});

export const Secondary = () => ({
	components: { CardContext },
	template: `
        <CardContext icon="mdi-currency-usd" title="Titulo do Card" bold>
            <p>Conteúdo do Card</p>
        </CardContext>
    `,
});

export const WithLoading = () => ({
	components: { CardContext },
	template: `
        <CardContext icon="mdi-currency-usd" title="Titulo do Card" isLoading>
            <p>Conteúdo do Card</p>
        </CardContext>
    `,
});

export const WithLoadingLarge = () => ({
	components: { CardContext },
	template: `
        <CardContext icon="mdi-currency-usd" title="Titulo do Card" isLoading largeLoading>
            <p>Conteúdo do Card</p>
        </CardContext>
    `,
});

export const WithError = () => ({
	components: { CardContext },
	template: `
        <CardContext icon="mdi-currency-usd" title="Titulo do Card" isError>
            <p>Conteúdo do Card</p>
        </CardContext>
    `,
});

export const NoIcon = () => ({
	components: { CardContext },
	template: `
        <CardContext title="Titulo do Card">
            <p>Conteúdo do Card</p>
        </CardContext>
    `,
});

Primary.storyName = 'Básico';
Secondary.storyName = 'Título em Bold';
WithLoading.storyName = 'Com Loading';
WithLoadingLarge.storyName = 'Com Loading Large';
WithError.storyName = 'Com Erro';
NoIcon.storyName = 'No icon';
