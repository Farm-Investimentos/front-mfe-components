# Guia para Assistentes de IA - Farmtech Components

## 🤖 Visão Geral para IAs

Este guia foi criado especificamente para assistentes de IA (como Cursor, GitHub Copilot, etc.) para entender e sugerir o uso correto da biblioteca de componentes `@farm-investimentos/front-mfe-components`.

### 📋 Contexto da Biblioteca

-   **Framework**: Vue 2.7.10 + Vuetify 2.4.5
-   **Linguagem**: TypeScript
-   **Propósito**: Sistema de design para microfrontends financeiros da Farmtech
-   **Padrão de Nomenclatura**: `farm-[componente]` ou `Farm[Componente]`

## 🎯 Padrões de Uso Recomendados

### 1. Importação e Registro

```typescript
// ✅ Correto - Importação seletiva (tree-shaking)
import {
	FarmButton,
	FarmIcon,
	FarmTextFieldV2,
	FarmTypography,
} from '@farm-investimentos/front-mfe-components';

// ✅ Registro local (recomendado)
export default {
	components: {
		FarmButton,
		FarmIcon,
	},
};

// ✅ Registro global (quando necessário)
Vue.component('FarmButton', FarmButton);
```

### 2. Estrutura de Props Comum

A maioria dos componentes segue este padrão:

```typescript
interface CommonProps {
	color?: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'neutral';
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
	disabled?: boolean;
	variation?: 'base' | 'lighten' | 'darken';
}
```

## 🔧 Componentes Principais e Uso

### Botões

```vue
<!-- ✅ Padrão básico -->
<farm-button color="primary" @click="action">Texto</farm-button>

<!-- ✅ Com ícone -->
<farm-button color="primary">
  <farm-icon>download</farm-icon>
  Baixar
</farm-button>

<!-- ✅ Botão especializado -->
<farm-export-button @click="exportData">Exportar</farm-export-button>
```

### Formulários

```vue
<!-- ✅ Campo de texto padrão -->
<farm-textfield-v2 v-model="form.field" label="Label" :rules="[rules.required]" />

<!-- ✅ Select com validação -->
<farm-select
	v-model="form.select"
	label="Opções"
	:items="options"
	item-text="name"
	item-value="id"
	:rules="[rules.required]"
/>
```

### Layout

```vue
<!-- ✅ Sistema de grid -->
<farm-container>
  <farm-row>
    <farm-col cols="12" md="6">
      <farm-card>Conteúdo</farm-card>
    </farm-col>
  </farm-row>
</farm-container>
```

## 🎨 Sistema de Design

### Cores Primárias

-   `primary` - Azul principal da Farmtech
-   `secondary` - Cor secundária
-   `secondary-green` - Verde financeiro
-   `secondary-golden` - Dourado premium

### Cores de Estado

-   `success` - Verde (confirmações, sucessos)
-   `error` - Vermelho (erros, exclusões)
-   `warning` - Amarelo (avisos, atenção)
-   `info` - Azul (informações neutras)

### Tamanhos Responsivos

```vue
<!-- ✅ Use breakpoints do Vuetify -->
<farm-col cols="12" sm="6" md="4" lg="3">
  <farm-typography size="lg">Título</farm-typography>
</farm-col>
```

## 📝 Padrões de Formulários

### Estrutura Recomendada

```vue
<template>
	<farm-form @submit="handleSubmit" :rules="formRules">
		<!-- Campos do formulário -->
		<farm-textfield-v2 v-model="form.field" label="Campo" :rules="[rules.required]" />

		<!-- Ações do formulário -->
		<div class="form-actions">
			<farm-button type="submit" color="primary" :loading="submitting"> Salvar </farm-button>
			<farm-button outlined @click="cancel"> Cancelar </farm-button>
		</div>
	</farm-form>
</template>
```

### Validação Padrão

```javascript
// ✅ Regras de validação comuns
const rules = {
	required: value => !!value || 'Campo obrigatório',
	email: value => /.+@.+\..+/.test(value) || 'E-mail inválido',
	minLength: min => value => (value && value.length >= min) || `Mínimo ${min} caracteres`,
	maxLength: max => value => (value && value.length <= max) || `Máximo ${max} caracteres`,
};
```

## 📊 Padrões de Tabelas

### Estrutura Completa

```vue
<template>
	<!-- Header com ações -->
	<farm-data-table-header
		title="Título da Tabela"
		subtitle="Descrição"
		:show-filters="true"
		@toggle-filters="toggleFilters"
	>
		<template #actions>
			<farm-button color="primary" @click="addNew">
				<farm-icon>plus</farm-icon>
				Adicionar
			</farm-button>
		</template>
	</farm-data-table-header>

	<!-- Filtros (condicional) -->
	<farm-main-filter v-if="showFilters" v-model="filters">
		<!-- Campos de filtro -->
	</farm-main-filter>

	<!-- Estado vazio -->
	<farm-data-table-empty-wrapper
		v-if="!items.length && !loading"
		title="Nenhum item encontrado"
		subtitle="Adicione o primeiro item"
	>
		<farm-button color="primary" @click="addNew"> Adicionar Item </farm-button>
	</farm-data-table-empty-wrapper>

	<!-- Tabela com dados -->
	<v-data-table v-else :headers="headers" :items="items" />

	<!-- Paginação -->
	<farm-data-table-paginator
		v-model="pagination.page"
		:length="pagination.totalPages"
		@input="updatePage"
	/>
</template>
```

## 🎯 Contexto Financeiro

### Componentes Específicos

-   `FarmGanttChart` - Para cronogramas de investimento
-   `FarmManagersList` - Para gestores de fundos
-   `FarmProgressBar` - Para indicadores de performance
-   `FarmChipInviteStatus` - Para status de convites

### Ícones Financeiros Comuns

```vue
<!-- ✅ Ícones apropriados para contexto financeiro -->
<farm-icon>currency-usd</farm-icon>
<!-- Moeda -->
<farm-icon>trending-up</farm-icon>
<!-- Performance positiva -->
<farm-icon>trending-down</farm-icon>
<!-- Performance negativa -->
<farm-icon>chart-line</farm-icon>
<!-- Gráficos -->
<farm-icon>calculator</farm-icon>
<!-- Cálculos -->
<farm-icon>bank</farm-icon>
<!-- Instituições -->
```

## 🚨 Padrões de Estados

### Loading States

```vue
<!-- ✅ Botão com loading -->
<farm-button color="primary" :loading="isLoading">
  {{ isLoading ? 'Processando...' : 'Enviar' }}
</farm-button>

<!-- ✅ Loader global -->
<farm-loader v-if="loading" />

<!-- ✅ Select com loading -->
<farm-select :loading="loadingOptions" :items="options" />
```

### Estados de Erro

```vue
<!-- ✅ Alert de erro -->
<farm-alert-box type="error" :show="hasError" @close="clearError">
  {{ errorMessage }}
</farm-alert-box>

<!-- ✅ Campo com erro -->
<farm-textfield-v2 v-model="field" :rules="[rules.required]" :error="hasFieldError" />
```

## 🔍 Padrões de Navegação

### Modais

```vue
<!-- ✅ Modal padrão -->
<farm-modal v-model="showModal" max-width="600px">
  <farm-dialog-header title="Título" @close="showModal = false" />
  
  <div>Conteúdo do modal</div>
  
  <farm-dialog-footer>
    <farm-button color="primary" @click="confirm">Confirmar</farm-button>
    <farm-button outlined @click="showModal = false">Cancelar</farm-button>
  </farm-dialog-footer>
</farm-modal>
```

### Confirmações

```vue
<!-- ✅ Prompt de confirmação -->
<farm-prompt-user-to-confirm
	v-model="showConfirm"
	title="Confirmar Ação"
	message="Deseja realmente continuar?"
	@confirm="executeAction"
	@cancel="showConfirm = false"
/>
```

## 📱 Responsividade

### Breakpoints do Vuetify

-   `xs` - <600px (mobile)
-   `sm` - 600px-959px (tablet)
-   `md` - 960px-1263px (laptop)
-   `lg` - 1264px-1903px (desktop)
-   `xl` - >1904px (large desktop)

### Uso Responsivo

```vue
<!-- ✅ Grid responsivo -->
<farm-row>
  <farm-col cols="12" sm="6" md="4" lg="3">
    <!-- Conteúdo adaptativo -->
  </farm-col>
</farm-row>

<!-- ✅ Tamanhos responsivos -->
<farm-typography :size="$vuetify.breakpoint.xs ? 'sm' : 'lg'">
  Texto Adaptativo
</farm-typography>
```

## ⚡ Otimizações de Performance

### Tree Shaking

```typescript
// ✅ Importe apenas o necessário
import { FarmButton, FarmIcon } from '@farm-investimentos/front-mfe-components'

// ❌ Evite importação completa
import * from '@farm-investimentos/front-mfe-components'
```

### Lazy Loading

```vue
<!-- ✅ Use v-if para componentes pesados -->
<farm-gantt-chart v-if="showChart" :tasks="tasks" />

<!-- ✅ Carregamento condicional -->
<farm-modal v-model="showModal">
  <farm-complex-component v-if="showModal" />
</farm-modal>
```

## 🎭 Boas Práticas para IAs

### 1. Sempre Considere o Contexto

-   Aplicação financeira = ícones e cores profissionais
-   Formulários = validação robusta
-   Tabelas = estados vazios e paginação

### 2. Padrões de Nomenclatura

```vue
<!-- ✅ Correto -->
<farm-button>Texto</farm-button>
<FarmButton>Texto</FarmButton>

<!-- ❌ Incorreto -->
<farm-btn>Texto</farm-btn>
<FButton>Texto</FButton>
```

### 3. Props Obrigatórias vs Opcionais

```vue
<!-- ✅ Sempre forneça label em campos -->
<farm-textfield-v2 v-model="value" label="Campo Obrigatório" />

<!-- ✅ Color é opcional (default: primary) -->
<farm-button @click="action">Ação</farm-button>
```

### 4. Eventos Padrão

```vue
<!-- ✅ Use eventos Vue padrão -->
<farm-button @click="handleClick">Clique</farm-button>
<farm-textfield-v2 @input="handleInput" @blur="handleBlur" />

<!-- ✅ Eventos específicos do componente -->
<farm-select @change="handleSelectionChange" />
<farm-date-picker @date-selected="handleDateChange" />
```

## 🔧 Debugging e Logs

### Logger Component

```vue
<!-- ✅ Para desenvolvimento -->
<farm-logger :logs="debugLogs" :show-timestamp="true" />
```

### Estados de Debug

```vue
<!-- ✅ Informações de desenvolvimento -->
<farm-typography v-if="$isDev" size="sm" color="gray">
  Debug: {{ componentState }}
</farm-typography>
```

## 📚 Recursos de Referência

### Links Importantes

-   Storybook: [Documentação Visual](http://front-farm-storybook.s3-website-us-east-1.amazonaws.com/index.html)
-   NPM: [@farm-investimentos/front-mfe-components](https://www.npmjs.com/package/@farm-investimentos/front-mfe-components)
-   Versão: 15.14.5

### Estrutura de Arquivos Típica

```
src/
├── components/
│   ├── forms/
│   │   ├── UserForm.vue (usa farm-form, farm-textfield-v2)
│   │   └── FilterForm.vue (usa farm-main-filter)
│   ├── tables/
│   │   └── DataTable.vue (usa farm-data-table-*)
│   └── layouts/
│       └── PageLayout.vue (usa farm-container, farm-row)
```

## 🎯 Sugestões Específicas para Assistentes

### Quando Sugerir Cada Componente

**Para Formulários:**

-   `FarmTextFieldV2` - campos de texto gerais
-   `FarmSelect` - dropdowns simples
-   `FarmSelectAutoComplete` - busca com muitas opções
-   `FarmDatePicker` - seleção de datas
-   `FarmCheckbox` / `FarmRadio` - seleções booleanas

**Para Navegação:**

-   `FarmButton` - ações principais
-   `FarmTabs` - navegação horizontal
-   `FarmStepper` - processos sequenciais
-   `FarmModal` - ações que requerem foco

**Para Dados:**

-   `FarmDataTableHeader` - cabeçalhos de tabela
-   `FarmCard` - agrupamento de informações
-   `FarmChip` - tags e status
-   `FarmProgressBar` - indicadores visuais

**Para Layout:**

-   `FarmContainer` - wrapper principal
-   `FarmRow` / `FarmCol` - grid system
-   `FarmBox` - flexbox utilities

---

_Este guia garante que assistentes de IA sugiram implementações consistentes e alinhadas com o design system da Farmtech._
