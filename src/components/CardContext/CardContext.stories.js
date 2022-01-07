import CardContext from './CardContext.vue';

export default {
	title: 'Example/CardContext',
	component: CardContext,
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

export const WithError = () => ({
	components: { CardContext },
	template: `
        <CardContext icon="mdi-currency-usd" title="Titulo do Card" isError>
            <p>Conteúdo do Card</p>
        </CardContext>
    `,
});

Primary.storyName = 'Básico';
Secondary.storyName = 'Título em Bold';
WithLoading.storyName = 'Com Loading';
WithError.storyName = 'Com Erro';
