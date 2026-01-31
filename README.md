# front-mfe-components
[![codecov](https://codecov.io/gh/Farm-Investimentos/front-mfe-components/branch/develop/graph/badge.svg?token=9ERJ107152)](https://codecov.io/gh/Farm-Investimentos/front-mfe-components)

## Configuração do projeto

Instale as dependências:

```
npm install
```

## Desenvolvimento

Inicia o Storybook em modo desenvolvimento (com hot-reload):

```
npm run storybook
```

## Build para produção

Gera o build estático do Storybook:

```
npm run build-storybook
```

Ou gera o build dos componentes:

```
npm run build:components
```

### Pipelines

Para instruções detalhadas sobre como publicar uma versão no npm e atualizar a documentação do Storybook, veja [PUBLISHING.md](docs/PUBLISHING.md).

#### NPM

Pacote publicado em [npm](https://www.npmjs.com/package/@farm-investimentos/front-mfe-components).

O processo de publicação é realizado via workflows do GitHub, conforme descrito em [PUBLISHING.md](docs/PUBLISHING.md).

#### Documentação (Storybook)

- Faça push para a branch `docs`
- A documentação fica disponível em [front-farm-storybook](http://front-farm-storybook.s3-website-us-east-1.amazonaws.com/index.html)

