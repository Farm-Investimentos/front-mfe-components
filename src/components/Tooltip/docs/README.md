# Tooltip Component

Componente de tooltip simples e eficiente para Vue 2.7, com suporte a 6 posições, controle via v-model e comportamento otimizado para modais.

## 🎯 Características

-   ✅ **6 posições**: `top-left`, `top-center`, `top-right`, `bottom-left`, `bottom-center`, `bottom-right`
-   ✅ **Vue 2.7 compatível** com Composition API
-   ✅ **v-model support** para tooltips controlados
-   ✅ **Seta inteligente** que aponta para o centro do ativador
-   ✅ **Scroll detection** automático em modais
-   ✅ **Position fixed** para evitar problemas de overflow
-   ✅ **Cleanup automático** de event listeners

## 📦 Instalação

```typescript
import Tooltip from '@/components/Tooltip';

export default {
	components: { Tooltip },
};
```

## 🚀 Uso Básico

### Tooltip Simples

```vue
<farm-tooltip placement="top-center">
  <template v-slot:activator>
    <farm-icon size="sm" color="gray">help-circle</farm-icon>
  </template>
  Este é um tooltip simples
</farm-tooltip>
```

### Tooltip com Título

```vue
<farm-tooltip placement="top-left">
  <template v-slot:activator>
    <farm-icon size="sm" color="gray">help-circle</farm-icon>
  </template>
  <template v-slot:title>Informação Importante</template>
  Conteúdo do tooltip com título
</farm-tooltip>
```

### Tooltip Fluido

```vue
<farm-tooltip placement="top-center" :fluid="true">
  <template v-slot:activator>
    <farm-icon size="sm" color="gray">help-circle</farm-icon>
  </template>
  Este tooltip tem largura baseada no conteúdo e se adapta automaticamente
</farm-tooltip>
```

### Tooltip com Posição Legacy

```vue
<farm-tooltip position="top-left">
  <template v-slot:activator>
    <farm-icon size="sm" color="gray">help-circle</farm-icon>
  </template>
  Tooltip usando a prop position (legacy)
</farm-tooltip>
```

### Tooltip Controlado (v-model)

```vue
<template>
	<farm-tooltip v-model="showTooltip" placement="top-right">
		<template v-slot:activator>
			<farm-icon @click="showTooltip = !showTooltip" size="md" color="blue"
				>help-circle</farm-icon
			>
		</template>
		<template v-slot:title>Tooltip Controlado</template>
		Este tooltip é controlado por v-model
	</farm-tooltip>
</template>

<script>
export default {
	data() {
		return {
			showTooltip: false,
		};
	},
};
</script>
```

## 📋 Props

| Prop        | Tipo               | Padrão         | Descrição                       |
| ----------- | ------------------ | -------------- | ------------------------------- |
| `value`     | `Boolean`          | `undefined`    | Controla visibilidade (v-model) |
| `trigger`   | `TooltipTrigger`   | `'hover'`      | Como o tooltip é ativado        |
| `placement` | `TooltipPlacement` | `'top-center'` | Posição do tooltip              |
| `offset`    | `Number`           | `8`            | Distância do ativador (px)      |
| `variant`   | `TooltipVariant`   | `'dark'`       | Variante visual do tooltip      |
| `size`      | `TooltipSize`      | `'md'`         | Tamanho do tooltip              |
| `maxWidth`  | `String \| Number` | `undefined`    | Largura máxima                  |
| `delay`     | `Number \| Array`  | `[100, 50]`    | Delay para show/hide            |
| `disabled`  | `Boolean`          | `false`        | Desabilita o tooltip            |
| `fluid`     | `Boolean`          | `false`        | Largura baseada no conteúdo     |
| `position`  | `String`           | `undefined`    | Posição alternativa (legacy)    |

## 🎨 Posições Disponíveis

```typescript
type TooltipPlacement =
	| 'top-left' // Seta no canto esquerdo, aponta para centro do ativador
	| 'top-center' // Seta no centro, aponta para centro do ativador
	| 'top-right' // Seta no canto direito, aponta para centro do ativador
	| 'bottom-left' // Seta no canto esquerdo, aponta para centro do ativador
	| 'bottom-center' // Seta no centro, aponta para centro do ativador
	| 'bottom-right'; // Seta no canto direito, aponta para centro do ativador
```

## 🎭 Slots

| Slot        | Descrição                                  |
| ----------- | ------------------------------------------ |
| `activator` | Elemento que ativa o tooltip (obrigatório) |
| `title`     | Título do tooltip (opcional)               |
| `default`   | Conteúdo principal do tooltip              |

## 📡 Events

| Event   | Payload   | Descrição                                  |
| ------- | --------- | ------------------------------------------ |
| `input` | `boolean` | Emitido quando visibilidade muda (v-model) |
| `show`  | -         | Emitido quando tooltip aparece             |
| `hide`  | -         | Emitido quando tooltip esconde             |

## 🏗️ Arquitetura

### Estrutura de Arquivos

```
src/components/Tooltip/
├── Tooltip.vue          # Componente principal
├── Tooltip.scss         # Estilos
├── Tooltip.stories.js   # Stories do Storybook
├── index.ts            # Exports
├── utils/
│   └── tooltip.utils.ts # Utilitários de posicionamento
├── types/
│   └── tooltip.types.ts # Tipos TypeScript
└── docs/
    └── README.md        # Esta documentação
```

### Componentes Principais

#### `Tooltip.vue`

-   **Lógica principal** com Composition API
-   **Event handlers** para show/hide
-   **Scroll detection** automático
-   **Position calculation** via utils
-   **Cleanup** automático de listeners

#### `tooltip.utils.ts`

-   **`calculateTooltipPosition`** - Calcula posição baseada no ativador
-   **`moveToBody`** - Move tooltip para body (portal effect)
-   **`moveToContainer`** - Move tooltip de volta ao container

## 🎯 Casos de Uso

### Em Modais com Scroll

O tooltip detecta automaticamente scroll em modais e atualiza sua posição:

```vue
<farm-modal v-model="showModal">
  <template v-slot:content>
    <div style="height: 400px; overflow-y: auto;">
      <farm-tooltip placement="top-left">
        <template v-slot:activator>
          <farm-icon size="sm" color="gray">help-circle</farm-icon>
        </template>
        Tooltip que se move com scroll
      </farm-tooltip>
    </div>
  </template>
</farm-modal>
```

### Múltiplos Tooltips

```vue
<div style="display: flex; gap: 20px;">
  <farm-tooltip placement="top-left">
    <template v-slot:activator>
      <farm-icon size="sm" color="gray">help-circle</farm-icon>
    </template>
    Tooltip 1
  </farm-tooltip>
  
  <farm-tooltip placement="top-center">
    <template v-slot:activator>
      <farm-icon size="sm" color="gray">help-circle</farm-icon>
    </template>
    Tooltip 2
  </farm-tooltip>
</div>
```

## 🔧 Customização

### Estilos CSS

O tooltip usa classes CSS que podem ser customizadas:

```scss
.tooltip-popup {
	background-color: #333333;
	color: #f5f5f5;
	border-radius: 5px;
	font-family: 'Manrope', sans-serif;
	font-size: 12px;
	font-weight: 500;
	padding: 16px;
	position: fixed;
	z-index: 9999;

	&--visible {
		opacity: 1;
		visibility: visible;
	}

	.tooltip-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 8px;
	}

	.tooltip-title {
		font-weight: 600;
		font-size: 13px;
		margin-right: 16px;
	}

	.tooltip-close {
		cursor: pointer;
		font-size: 16px;
	}
}
```

### Posicionamento da Seta

A seta é posicionada automaticamente para apontar para o centro do ativador:

-   **`left/right`**: Seta a 24px da borda, aponta para centro do ativador
-   **`center`**: Seta no centro do tooltip, aponta para centro do ativador

## 🐛 Troubleshooting

### Tooltip não aparece

-   Verifique se o `activator` slot está definido
-   Confirme que o elemento ativador está visível
-   Verifique se não há `z-index` conflitantes

### Tooltip não se move com scroll

-   O tooltip detecta scroll automaticamente
-   Se não funcionar, verifique se o elemento com scroll tem `overflow-y: auto/scroll`
-   O tooltip se esconde automaticamente se o ativador sair da viewport

### Seta mal posicionada

-   A seta sempre aponta para o centro do ativador
-   Para `left/right`, a seta fica a 18px da borda
-   Para `center`, a seta fica no centro do tooltip

## 📚 Exemplos no Storybook

Acesse `http://localhost:6006` e navegue para **Display/Tooltip** para ver exemplos interativos:

-   **Primary** - Tooltip básico
-   **AllPositions** - Todas as 6 posições
-   **ControlledTooltip** - Tooltip com v-model
-   **FluidTooltip** - Tooltip com largura fluida
-   **WithModal** - Tooltip em modal com scroll
-   **MultipleTooltips** - Múltiplos tooltips

## 🤝 Contribuição

1. Mantenha a simplicidade do componente
2. Teste em modais com scroll
3. Verifique se a seta aponta corretamente
4. Use os stories para testar mudanças
5. Atualize esta documentação se necessário
