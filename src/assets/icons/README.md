# Guia de Ícones Customizados

Esta pasta contém ícones SVG customizados que não estão disponíveis no Material Design Icons.

## Estrutura de Pastas

```
src/assets/icons/
├── money-off/              # 📁 Pasta do ícone money-off
│   ├── money-off.scss      # 🎨 Estilos do ícone
│   └── money-off.svg       # 📄 Arquivo SVG
├── custom-icons-list.ts    # 📋 Lista de ícones disponíveis
├── custom-icons.scss       # 📦 Importa todos os estilos
├── index.ts                # 🔄 Exports centralizados
└── README.md               # 📖 Este arquivo
```

## Como Adicionar um Novo Ícone Customizado

### 1. Crie a pasta do ícone

Crie uma pasta com o nome do ícone (ex: `my-custom-icon/`)

### 2. Adicione o arquivo SVG

Coloque seu arquivo SVG na pasta (ex: `my-custom-icon/my-custom-icon.svg`)

### 3. Crie o arquivo SCSS

Crie o arquivo de estilos na pasta `my-custom-icon/my-custom-icon.scss`:

```scss
// My Custom Icon - Custom SVG
// Descrição do que o ícone representa

.farm-icon {
	&.custom-my-custom-icon:before {
		content: '';
		display: inline-block;
		width: 1em;
		height: 1em;
		background-color: currentColor;
		mask: url('../../assets/icons/my-custom-icon/my-custom-icon.svg') no-repeat center;
		mask-size: contain;
		-webkit-mask: url('../../assets/icons/my-custom-icon/my-custom-icon.svg') no-repeat center;
		-webkit-mask-size: contain;
	}
}
```

### 4. Adicione o import no arquivo principal

Adicione o import no arquivo `custom-icons.scss`:

```scss
@import './my-custom-icon/my-custom-icon.scss';
```

### 5. Adicione à lista de ícones

Adicione seu ícone ao arquivo `custom-icons-list.ts`:

```typescript
export const customIconsList = [
	'custom-money-off',
	'custom-my-custom-icon', // Adicione aqui
];
```

### 6. Use o ícone nos seus componentes

Use o ícone com o prefixo `custom-`:

```vue
<farm-icon>custom-my-custom-icon</farm-icon>
```

## CSS Mask vs Background Image

### Background Image (Simples)

-   Bom para ícones com cores estáticas
-   A cor do ícone é fixa conforme o conteúdo do SVG

```scss
&.custom-my-icon:before {
	content: '';
	display: inline-block;
	width: 1em;
	height: 1em;
	background-image: url('../../assets/icons/my-icon/my-icon.svg');
	background-size: contain;
	background-repeat: no-repeat;
	background-position: center;
}
```

### CSS Mask (Recomendado)

-   Melhor para temas
-   O ícone herda a cor do texto do componente
-   Funciona melhor com o sistema de cores existente

```scss
&.custom-my-icon:before {
	content: '';
	display: inline-block;
	width: 1em;
	height: 1em;
	background-color: currentColor;
	mask: url('../../assets/icons/my-icon/my-icon.svg') no-repeat center;
	mask-size: contain;
	-webkit-mask: url('../../assets/icons/my-icon/my-icon.svg') no-repeat center;
	-webkit-mask-size: contain;
}
```

## Requisitos do SVG

-   Use viewBox para escalabilidade
-   Evite cores fixas (use `currentColor` ou remova fill/stroke)
-   Mantenha o tamanho do arquivo pequeno
-   Garanta acessibilidade com nomenclatura adequada

## Exemplos

```vue
<!-- Uso básico -->
<farm-icon>custom-money-off</farm-icon>

<!-- Com cor e tamanho -->
<farm-icon color="primary" size="lg">custom-money-off</farm-icon>

<!-- No IconBox -->
<farm-icon-box icon="custom-money-off" color="error" />
```

## Testando no Storybook

Após adicionar um novo ícone customizado:

1. **Navegar**: Vá para "Display/Icons" → "List Of Custom Icons"
2. **Buscar**: Use o campo de busca para encontrar seu ícone
3. **Testar**: Verifique diferentes exemplos nas stories "Custom Icons" e "Money Off Icon"

## Observações Importantes

-   **Estrutura**: Cada ícone tem sua própria pasta com SVG e SCSS
-   **Nomenclatura**: Sempre use o prefixo `custom-` para ícones customizados
-   **Caminhos**: Use `../../assets/icons/pasta-do-icone/arquivo.svg` nos arquivos SCSS
-   **Import Principal**: Adicione o import no `custom-icons.scss`
-   **Atualizar Lista**: Não esqueça de adicionar novos ícones em `custom-icons-list.ts`
-   **Testes**: Verifique no Storybook em "Display/Icons" → "List Of Custom Icons"

## Vantagens desta Estrutura

-   **Organização**: Cada ícone é autocontido em sua pasta
-   **Escalabilidade**: Fácil adicionar novos ícones sem conflitos
-   **Manutenibilidade**: Fácil encontrar e editar ícones específicos
-   **Clareza**: Estrutura clara e previsível
-   **Reutilização**: Ícones podem ser facilmente movidos ou compartilhados
