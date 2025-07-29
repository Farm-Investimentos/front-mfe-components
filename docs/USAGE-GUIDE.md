# Guia de Uso - Farmtech Components

## 🚀 Setup Rápido

```bash
npm install @farm-investimentos/front-mfe-components
```

```javascript
// main.js
import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import { FarmButton, FarmIcon, FarmTextFieldV2 } from '@farm-investimentos/front-mfe-components';

Vue.use(Vuetify);

// Registrar globalmente (opcional)
Vue.component('FarmButton', FarmButton);
Vue.component('FarmIcon', FarmIcon);
Vue.component('FarmTextFieldV2', FarmTextFieldV2);
```

## 🎨 Design System

### Typography

```vue
<template>
	<div>
		<farm-typography tag="h1" size="xl" color="primary" weight="bold">
			Título Principal
		</farm-typography>

		<farm-typography tag="p" size="md" color="gray"> Texto descritivo </farm-typography>

		<farm-typography ellipsis style="width: 200px;">
			Texto muito longo que será cortado
		</farm-typography>
	</div>
</template>
```

### Icons

```vue
<template>
	<div>
		<!-- Ícones MDI -->
		<farm-icon color="primary" size="24px">account</farm-icon>
		<farm-icon color="success" size="md">check-circle</farm-icon>

		<!-- Ícones customizados -->
		<farm-icon color="primary" size="32px">custom-farmtech-logo</farm-icon>

		<!-- Com eventos -->
		<farm-icon color="primary" @click="handleClick" style="cursor: pointer;">
			settings
		</farm-icon>
	</div>
</template>
```

## 🔘 Botões

### Botão Básico

```vue
<template>
	<div>
		<farm-button color="primary" @click="handleClick"> Botão Primário </farm-button>

		<farm-button color="secondary" outlined> Botão Secundário </farm-button>

		<farm-button color="error" disabled> Botão Desabilitado </farm-button>
	</div>
</template>
```

### Botão com Ícone

```vue
<template>
	<farm-button color="primary">
		<farm-icon>save</farm-icon>
		Salvar
	</farm-button>

	<farm-button color="success">
		<farm-icon>download</farm-icon>
		Exportar
	</farm-button>
</template>
```

### Botões Especializados

```vue
<template>
	<div>
		<farm-export-button @click="exportData">Exportar Dados</farm-export-button>
		<farm-import-button @click="importData">Importar</farm-import-button>
		<farm-danger-button @click="deleteItem">Excluir</farm-danger-button>
	</div>
</template>
```

## 📝 Formulários

### Campo de Texto

```vue
<template>
	<farm-textfield-v2
		v-model="form.name"
		label="Nome"
		placeholder="Digite seu nome"
		:rules="[rules.required, rules.minLength]"
		hint="Nome completo"
	/>
</template>

<script>
export default {
	data() {
		return {
			form: { name: '' },
			rules: {
				required: v => !!v || 'Campo obrigatório',
				minLength: v => v.length >= 3 || 'Mínimo 3 caracteres',
			},
		};
	},
};
</script>
```

### Select

```vue
<template>
	<farm-select
		v-model="form.category"
		label="Categoria"
		:items="categories"
		item-text="name"
		item-value="id"
		:rules="[rules.required]"
		clearable
	/>
</template>

<script>
export default {
	data() {
		return {
			form: { category: null },
			categories: [
				{ id: 1, name: 'Investimentos' },
				{ id: 2, name: 'Poupança' },
				{ id: 3, name: 'Ações' },
			],
			rules: {
				required: v => !!v || 'Selecione uma categoria',
			},
		};
	},
};
</script>
```

### Formulário Completo

```vue
<template>
	<farm-form @submit="handleSubmit" @input="handleInput">
		<farm-textfield-v2 v-model="form.name" label="Nome" :rules="[rules.required]" />

		<farm-select
			v-model="form.category"
			label="Categoria"
			:items="categories"
			:rules="[rules.required]"
		/>

		<farm-textfield-v2
			v-model="form.email"
			label="Email"
			type="email"
			:rules="[rules.required, rules.email]"
		/>

		<farm-button type="submit" color="primary"> Salvar </farm-button>
	</farm-form>
</template>

<script>
export default {
	data() {
		return {
			form: {
				name: '',
				category: null,
				email: '',
			},
			categories: [
				{ id: 1, name: 'Investimentos' },
				{ id: 2, name: 'Poupança' },
			],
			rules: {
				required: v => !!v || 'Campo obrigatório',
				email: v => /.+@.+\..+/.test(v) || 'Email inválido',
			},
		};
	},
	methods: {
		handleSubmit() {
			console.log('Formulário enviado:', this.form);
		},
		handleInput(isValid) {
			console.log('Formulário válido:', isValid);
		},
	},
};
</script>
```

## 🎯 Exibição de Dados

### Card

```vue
<template>
	<farm-card>
		<farm-typography tag="h3" color="primary"> Título do Card </farm-typography>
		<farm-typography tag="p" color="gray">
			Conteúdo do card com informações importantes.
		</farm-typography>
	</farm-card>
</template>
```

### Chip

```vue
<template>
	<div>
		<farm-chip color="primary">Ativo</farm-chip>
		<farm-chip color="success">Aprovado</farm-chip>
		<farm-chip color="error">Pendente</farm-chip>
		<farm-chip color="warning">Em análise</farm-chip>
	</div>
</template>
```

### Data Table Header

```vue
<template>
	<farm-data-table-header title="Lista de Investimentos" :show-filters="true">
		<template #actions>
			<farm-button color="primary">
				<farm-icon>plus</farm-icon>
				Adicionar
			</farm-button>
		</template>
	</farm-data-table-header>
</template>
```

## 🏗️ Layout

### Container e Grid

```vue
<template>
	<farm-container>
		<farm-row>
			<farm-col cols="12" md="6" lg="4">
				<farm-card>
					<farm-typography tag="h4">Card 1</farm-typography>
					<farm-typography>Conteúdo do primeiro card</farm-typography>
				</farm-card>
			</farm-col>

			<farm-col cols="12" md="6" lg="4">
				<farm-card>
					<farm-typography tag="h4">Card 2</farm-typography>
					<farm-typography>Conteúdo do segundo card</farm-typography>
				</farm-card>
			</farm-col>

			<farm-col cols="12" md="12" lg="4">
				<farm-card>
					<farm-typography tag="h4">Card 3</farm-typography>
					<farm-typography>Conteúdo do terceiro card</farm-typography>
				</farm-card>
			</farm-col>
		</farm-row>
	</farm-container>
</template>
```

### Modal

```vue
<template>
	<div>
		<farm-button color="primary" @click="showModal = true"> Abrir Modal </farm-button>

		<farm-modal v-model="showModal" title="Título do Modal">
			<farm-typography> Conteúdo do modal aqui. </farm-typography>

			<template #actions>
				<farm-button color="secondary" @click="showModal = false"> Cancelar </farm-button>
				<farm-button color="primary" @click="confirmAction"> Confirmar </farm-button>
			</template>
		</farm-modal>
	</div>
</template>

<script>
export default {
	data() {
		return {
			showModal: false,
		};
	},
	methods: {
		confirmAction() {
			console.log('Ação confirmada');
			this.showModal = false;
		},
	},
};
</script>
```

## 📊 Tabelas

### Tabela Completa

```vue
<template>
	<div>
		<farm-data-table-header title="Investimentos" :show-filters="true">
			<template #actions>
				<farm-export-button @click="exportData">Exportar</farm-export-button>
				<farm-button color="primary">Adicionar</farm-button>
			</template>
		</farm-data-table-header>

		<v-data-table :headers="headers" :items="items" :loading="loading" :search="search">
			<template #item.actions="{ item }">
				<farm-button color="primary" size="sm" @click="editItem(item)">
					<farm-icon>edit</farm-icon>
				</farm-button>
				<farm-button color="error" size="sm" @click="deleteItem(item)">
					<farm-icon>delete</farm-icon>
				</farm-button>
			</template>
		</v-data-table>

		<farm-data-table-paginator v-model="page" :length="totalPages" />
	</div>
</template>

<script>
export default {
	data() {
		return {
			search: '',
			loading: false,
			page: 1,
			totalPages: 10,
			headers: [
				{ text: 'Nome', value: 'name' },
				{ text: 'Valor', value: 'value' },
				{ text: 'Status', value: 'status' },
				{ text: 'Ações', value: 'actions', sortable: false },
			],
			items: [
				{ id: 1, name: 'Investimento A', value: 'R$ 10.000', status: 'Ativo' },
				{ id: 2, name: 'Investimento B', value: 'R$ 15.000', status: 'Pendente' },
			],
		};
	},
	methods: {
		editItem(item) {
			console.log('Editar:', item);
		},
		deleteItem(item) {
			console.log('Excluir:', item);
		},
		exportData() {
			console.log('Exportar dados');
		},
	},
};
</script>
```

## 🎨 Estilização

### Cores e Variações

```vue
<template>
	<div>
		<!-- Cores principais -->
		<farm-button color="primary">Primário</farm-button>
		<farm-button color="secondary">Secundário</farm-button>
		<farm-button color="success">Sucesso</farm-button>
		<farm-button color="error">Erro</farm-button>
		<farm-button color="warning">Aviso</farm-button>
		<farm-button color="neutral">Neutro</farm-button>

		<!-- Variações -->
		<farm-button color="primary" variation="lighten">Claro</farm-button>
		<farm-button color="primary" variation="darken">Escuro</farm-button>
	</div>
</template>
```

### Tamanhos Responsivos

```vue
<template>
	<div>
		<farm-button size="xs">Extra Pequeno</farm-button>
		<farm-button size="sm">Pequeno</farm-button>
		<farm-button size="md">Médio</farm-button>
		<farm-button size="lg">Grande</farm-button>
		<farm-button size="xl">Extra Grande</farm-button>

		<!-- Tamanho customizado -->
		<farm-button size="32px">Customizado</farm-button>
	</div>
</template>
```

## 💡 Dicas e Boas Práticas

### 1. Importação Seletiva

```javascript
// ✅ Bom - Tree-shaking
import { FarmButton, FarmIcon } from '@farm-investimentos/front-mfe-components';

// ❌ Evitar - Importação completa
import * as FarmComponents from '@farm-investimentos/front-mfe-components';
```

### 2. Validação de Formulários

```javascript
// Regras comuns
const rules = {
	required: v => !!v || 'Campo obrigatório',
	email: v => /.+@.+\..+/.test(v) || 'Email inválido',
	minLength: (v, min) => v.length >= min || `Mínimo ${min} caracteres`,
	maxLength: (v, max) => v.length <= max || `Máximo ${max} caracteres`,
};
```

### 3. Ícones Apropriados

```vue
<!-- ✅ Ícones financeiros -->
<farm-icon>account-balance</farm-icon>
<farm-icon>trending-up</farm-icon>
<farm-icon>savings</farm-icon>
<farm-icon>payment</farm-icon>

<!-- ✅ Ícones de ação -->
<farm-icon>save</farm-icon>
<farm-icon>download</farm-icon>
<farm-icon>upload</farm-icon>
<farm-icon>delete</farm-icon>
```

### 4. Layout Responsivo

```vue
<!-- ✅ Grid responsivo -->
<farm-col cols="12" sm="6" md="4" lg="3">
  <farm-card>Conteúdo</farm-card>
</farm-col>
```

### 5. Estados de Loading

```vue
<template>
	<farm-button color="primary" :loading="loading" @click="handleAction">
		{{ loading ? 'Carregando...' : 'Executar Ação' }}
	</farm-button>
</template>
```

---

_📚 Para referência técnica completa, consulte [COMPONENT-REFERENCE.md](./COMPONENT-REFERENCE.md)_
