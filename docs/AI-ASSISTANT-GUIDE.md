# Guia para Assistentes de IA - Farmtech Components

## 🤖 Contexto Essencial

-   **Framework**: Vue 2.7.10 + Vuetify 2.4.5
-   **Contexto**: Aplicação financeira da Farmtech
-   **Padrão**: `farm-[componente]` ou `Farm[Componente]`
-   **Pacote**: `@farm-investimentos/front-mfe-components`

## 🎯 Padrões de Uso

### Importação e Registro

```typescript
// ✅ Importação seletiva (tree-shaking)
import { FarmButton, FarmIcon, FarmTextFieldV2 } from '@farm-investimentos/front-mfe-components';

// ✅ Registro local (recomendado)
export default {
	components: { FarmButton, FarmIcon, FarmTextFieldV2 },
};
```

### Props Comuns

```typescript
interface CommonProps {
	color?: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'neutral';
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
	disabled?: boolean;
	variation?: 'base' | 'lighten' | 'darken';
}
```

## 🔧 Componentes Principais

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
<!-- ✅ Campo de texto -->
<farm-textfield-v2 v-model="form.field" label="Label" :rules="[rules.required]" />

<!-- ✅ Select -->
<farm-select
	v-model="form.select"
	label="Opções"
	:items="options"
	item-text="name"
	item-value="id"
	:rules="[rules.required]"
/>

<!-- ✅ Formulário completo -->
<farm-form @submit="handleSubmit">
  <farm-textfield-v2 v-model="form.name" label="Nome" :rules="[rules.required]" />
  <farm-select v-model="form.category" label="Categoria" :items="categories" />
  <farm-button type="submit" color="primary">Salvar</farm-button>
</farm-form>
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

### Cores (Contexto Financeiro)

```vue
<!-- ✅ Cores apropriadas para finanças -->
<farm-button color="primary">Ação Principal</farm-button>
<farm-button color="success">Aprovar</farm-button>
<farm-button color="error">Rejeitar</farm-button>
<farm-button color="warning">Pendente</farm-button>
<farm-chip color="success">Ativo</farm-chip>
<farm-chip color="error">Inativo</farm-chip>
```

### Ícones Recomendados

```vue
<!-- ✅ Ícones financeiros -->
<farm-icon>account-balance</farm-icon>
<!-- Banco -->
<farm-icon>trending-up</farm-icon>
<!-- Crescimento -->
<farm-icon>savings</farm-icon>
<!-- Poupança -->
<farm-icon>payment</farm-icon>
<!-- Pagamento -->
<farm-icon>account-balance-wallet</farm-icon>
<!-- Carteira -->
<farm-icon>monetization-on</farm-icon>
<!-- Dinheiro -->
<farm-icon>pie-chart</farm-icon>
<!-- Gráfico -->
<farm-icon>assessment</farm-icon>
<!-- Relatório -->

<!-- ✅ Ícones de ação -->
<farm-icon>save</farm-icon>
<!-- Salvar -->
<farm-icon>download</farm-icon>
<!-- Baixar -->
<farm-icon>upload</farm-icon>
<!-- Enviar -->
<farm-icon>delete</farm-icon>
<!-- Excluir -->
<farm-icon>edit</farm-icon>
<!-- Editar -->
<farm-icon>add</farm-icon>
<!-- Adicionar -->
<farm-icon>search</farm-icon>
<!-- Buscar -->
<farm-icon>filter</farm-icon>
<!-- Filtrar -->
```

## 📝 Validação de Formulários

### Regras Comuns

```javascript
const rules = {
	required: v => !!v || 'Campo obrigatório',
	email: v => /.+@.+\..+/.test(v) || 'Email inválido',
	cpf: v => /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(v) || 'CPF inválido',
	cnpj: v => /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/.test(v) || 'CNPJ inválido',
	phone: v => /^\(\d{2}\) \d{5}-\d{4}$/.test(v) || 'Telefone inválido',
	minLength: (v, min) => v.length >= min || `Mínimo ${min} caracteres`,
	maxLength: (v, max) => v.length <= max || `Máximo ${max} caracteres`,
};
```

### Máscaras Comuns

```vue
<farm-textfield-v2
	v-model="form.cpf"
	label="CPF"
	mask="###.###.###-##"
	:rules="[rules.required, rules.cpf]"
/>

<farm-textfield-v2
	v-model="form.phone"
	label="Telefone"
	mask="(##) #####-####"
	:rules="[rules.required, rules.phone]"
/>
```

## 🏗️ Layout Responsivo

### Breakpoints

```vue
<!-- ✅ Grid responsivo -->
<farm-col cols="12" sm="6" md="4" lg="3">
  <farm-card>Conteúdo</farm-card>
</farm-col>

<!-- ✅ Tabela responsiva -->
<farm-data-table-header title="Dados" :show-filters="true">
  <template #actions>
    <farm-button color="primary" size="sm">Adicionar</farm-button>
  </template>
</farm-data-table-header>
```

## 💡 Boas Práticas para IAs

### 1. Sempre Use Prefixo "farm-"

```vue
<!-- ✅ Correto -->
<farm-button color="primary">Botão</farm-button>
<farm-textfield-v2 v-model="value" label="Campo" />
<farm-icon>save</farm-icon>

<!-- ❌ Incorreto -->
<v-btn color="primary">Botão</v-btn>
<v-text-field v-model="value" label="Campo" />
```

### 2. Contexto Financeiro

```vue
<!-- ✅ Apropriado para finanças -->
<farm-typography color="success">Lucro: R$ 1.000,00</farm-typography>
<farm-typography color="error">Prejuízo: R$ 500,00</farm-typography>
<farm-chip color="warning">Aguardando Aprovação</farm-chip>

<!-- ✅ Ícones financeiros -->
<farm-icon>trending-up</farm-icon>
<!-- Para crescimento -->
<farm-icon>account-balance</farm-icon>
<!-- Para banco -->
```

### 3. Validação Sempre Presente

```vue
<!-- ✅ Sempre incluir validação -->
<farm-textfield-v2 v-model="form.email" label="Email" :rules="[rules.required, rules.email]" />

<farm-select
	v-model="form.category"
	label="Categoria"
	:items="categories"
	:rules="[rules.required]"
/>
```

### 4. Estados de Loading

```vue
<!-- ✅ Feedback visual -->
<farm-button color="primary" :loading="loading" @click="handleAction">
  {{ loading ? 'Carregando...' : 'Executar' }}
</farm-button>

<farm-select v-model="form.manager" label="Gestor" :items="managers" :loading="loadingManagers" />
```

## 🎯 Casos de Uso Comuns

### Formulário de Investimento

```vue
<template>
	<farm-form @submit="handleSubmit">
		<farm-textfield-v2
			v-model="form.name"
			label="Nome do Investimento"
			:rules="[rules.required]"
		/>

		<farm-select
			v-model="form.type"
			label="Tipo de Investimento"
			:items="investmentTypes"
			:rules="[rules.required]"
		/>

		<farm-textfield-v2
			v-model="form.value"
			label="Valor"
			mask="currency"
			:rules="[rules.required]"
		/>

		<farm-date-picker
			v-model="form.startDate"
			label="Data de Início"
			:rules="[rules.required]"
		/>

		<farm-button type="submit" color="primary">
			<farm-icon>save</farm-icon>
			Salvar Investimento
		</farm-button>
	</farm-form>
</template>
```

### Lista de Transações

```vue
<template>
	<farm-data-table-header title="Transações" :show-filters="true">
		<template #actions>
			<farm-export-button @click="exportTransactions">Exportar</farm-export-button>
			<farm-button color="primary">
				<farm-icon>add</farm-icon>
				Nova Transação
			</farm-button>
		</template>
	</farm-data-table-header>

	<v-data-table :headers="headers" :items="transactions">
		<template #item.status="{ item }">
			<farm-chip :color="getStatusColor(item.status)">
				{{ item.status }}
			</farm-chip>
		</template>

		<template #item.actions="{ item }">
			<farm-button color="primary" size="sm" @click="editTransaction(item)">
				<farm-icon>edit</farm-icon>
			</farm-button>
		</template>
	</v-data-table>
</template>
```

## 🔍 Prompt Sugerido para IAs

```
Estou usando @farm-investimentos/front-mfe-components (Vue 2 + Vuetify) para aplicação financeira da Farmtech.

SEMPRE use:
- Prefixo "farm-" nos componentes (farm-button, farm-textfield-v2, etc.)
- Cores apropriadas: primary (ações principais), success (aprovado/positivo), error (rejeitado/negativo), warning (pendente)
- Ícones MDI sem prefixo ou "custom-" para customizados
- Validação em todos os formulários
- Contexto financeiro (ícones de banco, dinheiro, gráficos)

Consulte este guia para padrões específicos e exemplos práticos.
```

---

_📚 Para exemplos detalhados, consulte [USAGE-GUIDE.md](./USAGE-GUIDE.md)_
