# Referência Técnica de Componentes - Farmtech

## 📋 Lista Completa de Componentes

### 🎨 Design System

-   **FarmTypography** - Sistema de tipografia responsivo
-   **FarmIcon** - Ícones MDI e customizados da Farmtech

### 🖼️ Logos

-   **FarmProductLogo** - Logo do produto
-   **FarmOriginatorLogo** - Logo do originador

### 🔘 Botões

-   **FarmDefaultButton** - Botão principal versátil
-   **FarmDangerButton** - Botão para ações destrutivas
-   **FarmConfirmButton** - Botão de confirmação
-   **FarmExportButton** - Botão para exportação de dados
-   **FarmImportButton** - Botão para importação de arquivos
-   **FarmMultiImportButton** - Botão para múltiplas importações
-   **FarmRemoveButton** - Botão para remoção
-   **FarmToggleButton** - Botão de alternância
-   **FarmButtonToggle** - Grupo de botões toggle

### 📝 Formulários

-   **FarmForm** - Container de formulário com validação
-   **FarmTextFieldV2** - Campo de texto avançado
-   **FarmTextArea** - Área de texto
-   **FarmSelect** - Seletor dropdown
-   **FarmSelectAutoComplete** - Seletor com autocomplete
-   **FarmSelectModalOptions** - Seletor com modal de opções
-   **FarmCheckbox** - Caixa de seleção
-   **FarmRadio** - Botão radio
-   **FarmRadioGroup** - Grupo de botões radio
-   **FarmSwitcher** - Interruptor toggle
-   **FarmDatePicker** - Seletor de data
-   **FarmRangeDatePicker** - Seletor de intervalo de datas

### 🏗️ Layout e Estrutura

-   **FarmContainer** - Container principal
-   **FarmContainerFooter** - Rodapé do container
-   **FarmRow** - Linha do sistema de grid
-   **FarmCol** - Coluna do sistema de grid
-   **FarmBox** - Container flexível
-   **FarmLine** - Linha divisória
-   **FarmCollapsible** - Conteúdo colapsável
-   **FarmTabs** - Abas de navegação
-   **FarmStepper** - Indicador de passos

### 🎯 Exibição de Dados

-   **FarmCard** - Cartão de conteúdo
-   **FarmList** - Lista estruturada
-   **FarmListItem** - Item de lista
-   **FarmChip** - Etiquetas e tags
-   **FarmChipInviteStatus** - Status de convite (chip específico)
-   **FarmLabel** - Rótulos
-   **FarmValueCaption** - Legenda de valores
-   **FarmIdCaption** - Legenda de IDs
-   **FarmProgressBar** - Barra de progresso

### 📊 Tabelas e Dados

-   **FarmDataTableHeader** - Cabeçalho de tabela com filtros
-   **FarmDataTablePaginator** - Paginação de tabela
-   **FarmDataTableEmptyWrapper** - Estado vazio para tabelas
-   **FarmTableContextMenu** - Menu contextual de tabela
-   **FarmMainFilter** - Filtro principal
-   **FarmFilterEmptyState** - Estado vazio de filtros
-   **FarmResetTableRowSelection** - Reset de seleção de tabela

### 🔧 Utilitários e Funcionalidades

-   **FarmModal** - Janelas modais
-   **FarmModalPromptUser** - Modal de prompt para usuário
-   **FarmDialogHeader** - Cabeçalho de diálogo
-   **FarmDialogFooter** - Rodapé de diálogo
-   **FarmTooltip** - Dicas contextuais
-   **FarmLoader** - Indicadores de carregamento
-   **FarmAlertBox** - Caixas de alerta
-   **FarmAlertReload** - Alerta de recarregamento
-   **FarmContextMenu** - Menu contextual
-   **FarmCopyToClipboard** - Copiar para área de transferência
-   **FarmMultipleFilePicker** - Seletor múltiplo de arquivos
-   **FarmPromptUserToConfirm** - Confirmação de usuário
-   **FarmIconBox** - Container para ícones

### 🎛️ Controles Avançados

-   **FarmManagersList** - Lista de gestores
-   **FarmResourceMetaInfo** - Metainformações de recursos
-   **FarmMultipleSelectShortener** - Encurtador de seleção múltipla
-   **FarmGanttChart** - Gráfico de Gantt

### 🔍 Debug e Desenvolvimento

-   **FarmLogger** - Sistema de logs
-   **FarmLoggerItem** - Item individual de log

---

## 📖 Detalhes dos Componentes Principais

### Design System

### Typography

Sistema de tipografia responsivo da Farmtech.

#### Props

| Prop        | Tipo    | Padrão      | Descrição                                   |
| ----------- | ------- | ----------- | ------------------------------------------- |
| `tag`       | String  | `'p'`       | Tag HTML (p, span, h1-h6, div, label, etc.) |
| `size`      | String  | `'md'`      | Tamanho responsivo (xs, sm, md, lg, xl)     |
| `color`     | String  | `'primary'` | Cor do texto                                |
| `weight`    | String  | `'normal'`  | Peso da fonte (light, normal, bold, black)  |
| `variation` | String  | `'base'`    | Variação da cor (lighten, base, darken)     |
| `ellipsis`  | Boolean | `false`     | Truncar texto com ellipsis                  |

#### Exemplo

```vue
<farm-typography tag="h1" size="xl" color="primary" weight="bold">
  Título Principal
</farm-typography>
```

---

### Icon

Componente de ícones MDI e customizados.

#### Props

| Prop        | Tipo   | Padrão      | Descrição                                                      |
| ----------- | ------ | ----------- | -------------------------------------------------------------- |
| `color`     | String | `'primary'` | Cor do ícone                                                   |
| `size`      | String | `'default'` | Tamanho (xs, sm, md, lg, xl) ou CSS (24px, 2rem)               |
| `variation` | String | `'base'`    | Variação da cor (lighten, base, darken, 80, 50, 40, 30, 10, 5) |

#### Slots

| Slot      | Descrição                                                    |
| --------- | ------------------------------------------------------------ |
| `default` | Nome do ícone (MDI sem prefixo ou custom- para customizados) |

#### Eventos

| Evento  | Parâmetros | Descrição                  |
| ------- | ---------- | -------------------------- |
| `click` | `event`    | Emitido ao clicar no ícone |

#### Exemplo

```vue
<farm-icon color="primary" size="24px" @click="handleClick">
  account-circle
</farm-icon>
```

---

## Botões

### DefaultButton

Botão principal com múltiplas variações de estilo.

#### Props

| Prop        | Tipo    | Padrão      | Descrição                         |
| ----------- | ------- | ----------- | --------------------------------- |
| `color`     | String  | `'primary'` | Cor do botão                      |
| `size`      | String  | `'default'` | Tamanho (xs, sm, md, lg, xl)      |
| `outlined`  | Boolean | `false`     | Estilo contornado                 |
| `plain`     | Boolean | `false`     | Estilo simples sem fundo          |
| `full`      | Boolean | `false`     | Largura total                     |
| `disabled`  | Boolean | `false`     | Estado desabilitado               |
| `rounded`   | Boolean | `false`     | Bordas arredondadas               |
| `icon`      | Boolean | `false`     | Botão circular para ícones        |
| `elevated`  | Boolean | `false`     | Sombra elevada                    |
| `type`      | String  | `'button'`  | Tipo HTML (button, submit, reset) |
| `to`        | String  | `null`      | Rota para router-link             |
| `variation` | String  | `'base'`    | Variação da cor                   |

#### Slots

| Slot      | Descrição                         |
| --------- | --------------------------------- |
| `default` | Conteúdo do botão (texto, ícones) |

#### Eventos

| Evento  | Parâmetros | Descrição                                  |
| ------- | ---------- | ------------------------------------------ |
| `click` | `event`    | Emitido ao clicar (se não for router-link) |

#### Exemplo

```vue
<farm-button color="primary" size="lg" @click="submit">
  <farm-icon>save</farm-icon>
  Salvar
</farm-button>
```

---

## Formulários

### Form

Container de formulário com validação automática.

#### Props

| Prop    | Tipo    | Padrão | Descrição                         |
| ------- | ------- | ------ | --------------------------------- |
| `value` | Boolean | -      | Estado de validação do formulário |

#### Eventos

| Evento   | Parâmetros       | Descrição                      |
| -------- | ---------------- | ------------------------------ |
| `input`  | `valid: boolean` | Emitido quando validação muda  |
| `submit` | `event`          | Emitido ao submeter formulário |

#### Métodos

| Método                | Parâmetros | Descrição              |
| --------------------- | ---------- | ---------------------- |
| `reset()`             | -          | Reseta todos os campos |
| `restartValidation()` | -          | Reinicia validação     |

#### Exemplo

```vue
<farm-form @submit="handleSubmit" v-model="isValid">
  <!-- Campos do formulário -->
</farm-form>
```

---

### TextFieldV2

Campo de texto avançado com validação e máscara.

#### Props

| Prop             | Tipo    | Padrão    | Descrição                               |
| ---------------- | ------- | --------- | --------------------------------------- |
| `value`          | String  | -         | Valor do campo                          |
| `label`          | String  | -         | Rótulo do campo                         |
| `placeholder`    | String  | -         | Texto de placeholder                    |
| `type`           | String  | `'text'`  | Tipo HTML (text, email, password, etc.) |
| `rules`          | Array   | `[]`      | Regras de validação                     |
| `disabled`       | Boolean | `false`   | Estado desabilitado                     |
| `readonly`       | Boolean | `false`   | Somente leitura                         |
| `icon`           | String  | -         | Ícone do campo                          |
| `iconPosition`   | String  | `'right'` | Posição do ícone (left, right)          |
| `mask`           | String  | -         | Máscara de entrada                      |
| `hideDetails`    | Boolean | `false`   | Ocultar mensagens de erro               |
| `hint`           | String  | -         | Texto de dica                           |
| `persistentHint` | Boolean | `false`   | Dica sempre visível                     |
| `ellipsed`       | Boolean | `false`   | Texto truncado                          |

#### Eventos

| Evento        | Parâmetros      | Descrição                  |
| ------------- | --------------- | -------------------------- |
| `input`       | `value: string` | Emitido ao alterar valor   |
| `click`       | `event`         | Emitido ao clicar no campo |
| `blur`        | `event`         | Emitido ao perder foco     |
| `focus`       | `event`         | Emitido ao ganhar foco     |
| `onClickIcon` | `event`         | Emitido ao clicar no ícone |

#### Exemplo

```vue
<farm-textfield-v2
	v-model="email"
	label="E-mail"
	type="email"
	icon="email"
	:rules="[rules.required, rules.email]"
/>
```

---

### Select

Seletor dropdown com suporte a múltipla seleção.

#### Props

| Prop         | Tipo    | Padrão        | Descrição                      |
| ------------ | ------- | ------------- | ------------------------------ |
| `value`      | Any     | -             | Valor selecionado              |
| `items`      | Array   | `[]`          | Lista de opções                |
| `itemText`   | String  | `'text'`      | Propriedade para texto do item |
| `itemValue`  | String  | `'value'`     | Propriedade para valor do item |
| `multiple`   | Boolean | `false`       | Seleção múltipla               |
| `clearable`  | Boolean | `false`       | Botão de limpar                |
| `searchable` | Boolean | `false`       | Campo de busca                 |
| `loading`    | Boolean | `false`       | Estado de carregamento         |
| `disabled`   | Boolean | `false`       | Estado desabilitado            |
| `readonly`   | Boolean | `false`       | Somente leitura                |
| `rules`      | Array   | `[]`          | Regras de validação            |
| `noDataText` | String  | `'Sem dados'` | Texto quando vazio             |

#### Eventos

| Evento   | Parâmetros | Descrição                    |
| -------- | ---------- | ---------------------------- |
| `input`  | `value`    | Emitido ao alterar seleção   |
| `change` | `value`    | Emitido ao confirmar mudança |

#### Exemplo

```vue
<farm-select
	v-model="category"
	label="Categoria"
	:items="categories"
	item-text="name"
	item-value="id"
	clearable
/>
```

---

## Layout

### Container

Container principal responsivo.

#### Props

| Prop       | Tipo    | Padrão  | Descrição          |
| ---------- | ------- | ------- | ------------------ |
| `fluid`    | Boolean | `false` | Largura total      |
| `maxWidth` | String  | -       | Largura máxima CSS |

#### Slots

| Slot      | Descrição             |
| --------- | --------------------- |
| `default` | Conteúdo do container |

#### Exemplo

```vue
<farm-container max-width="1200px">
  <!-- Conteúdo -->
</farm-container>
```

---

### Row / Col

Sistema de grid responsivo baseado no Vuetify.

#### Props Row

| Prop        | Tipo    | Padrão  | Descrição              |
| ----------- | ------- | ------- | ---------------------- |
| `noGutters` | Boolean | `false` | Remove espaçamento     |
| `align`     | String  | -       | Alinhamento vertical   |
| `justify`   | String  | -       | Alinhamento horizontal |

#### Props Col

| Prop   | Tipo          | Padrão | Descrição                       |
| ------ | ------------- | ------ | ------------------------------- |
| `cols` | Number/String | -      | Colunas em todos os breakpoints |
| `sm`   | Number/String | -      | Colunas em small+               |
| `md`   | Number/String | -      | Colunas em medium+              |
| `lg`   | Number/String | -      | Colunas em large+               |
| `xl`   | Number/String | -      | Colunas em extra-large+         |

#### Exemplo

```vue
<farm-row>
  <farm-col cols="12" md="6" lg="4">
    Conteúdo responsivo
  </farm-col>
</farm-row>
```

---

### Card

Cartão de conteúdo com header, body e footer.

#### Props

| Prop       | Tipo    | Padrão  | Descrição         |
| ---------- | ------- | ------- | ----------------- |
| `outlined` | Boolean | `false` | Estilo contornado |
| `flat`     | Boolean | `false` | Sem sombra        |
| `raised`   | Boolean | `false` | Sombra elevada    |

#### Slots

| Slot      | Descrição          |
| --------- | ------------------ |
| `default` | Conteúdo principal |
| `header`  | Cabeçalho do card  |
| `actions` | Área de ações      |

#### Exemplo

```vue
<farm-card>
  <template #header>
    <farm-typography tag="h3">Título</farm-typography>
  </template>
  
  Conteúdo do card
  
  <template #actions>
    <farm-button size="sm">Ação</farm-button>
  </template>
</farm-card>
```

---

## Dados

### DataTableHeader

Cabeçalho para tabelas de dados com ações e filtros.

#### Props

| Prop          | Tipo    | Padrão  | Descrição                 |
| ------------- | ------- | ------- | ------------------------- |
| `title`       | String  | -       | Título da tabela          |
| `subtitle`    | String  | -       | Subtítulo                 |
| `showFilters` | Boolean | `false` | Mostrar toggle de filtros |

#### Slots

| Slot      | Descrição                   |
| --------- | --------------------------- |
| `actions` | Botões de ação              |
| `filters` | Área de filtros customizada |

#### Eventos

| Evento           | Parâmetros | Descrição                   |
| ---------------- | ---------- | --------------------------- |
| `toggle-filters` | -          | Emitido ao alternar filtros |

#### Exemplo

```vue
<farm-data-table-header
	title="Lista de Usuários"
	subtitle="Gerencie usuários do sistema"
	:show-filters="true"
	@toggle-filters="toggleFilters"
>
  <template #actions>
    <farm-button color="primary">Adicionar</farm-button>
  </template>
</farm-data-table-header>
```

---

### DataTablePaginator

Componente de paginação para tabelas.

#### Props

| Prop                  | Tipo   | Padrão              | Descrição                  |
| --------------------- | ------ | ------------------- | -------------------------- |
| `value`               | Number | `1`                 | Página atual               |
| `length`              | Number | `1`                 | Total de páginas           |
| `totalItems`          | Number | `0`                 | Total de itens             |
| `itemsPerPage`        | Number | `10`                | Itens por página           |
| `itemsPerPageOptions` | Array  | `[10, 25, 50, 100]` | Opções de itens por página |

#### Eventos

| Evento                | Parâmetros      | Descrição                         |
| --------------------- | --------------- | --------------------------------- |
| `input`               | `page: number`  | Emitido ao mudar página           |
| `update:itemsPerPage` | `count: number` | Emitido ao mudar itens por página |

#### Exemplo

```vue
<farm-data-table-paginator
	v-model="currentPage"
	:length="totalPages"
	:total-items="totalItems"
	:items-per-page="itemsPerPage"
	@update:itemsPerPage="updateItemsPerPage"
/>
```

---

### Chip

Etiquetas e tags para categorização.

#### Props

| Prop       | Tipo    | Padrão      | Descrição                |
| ---------- | ------- | ----------- | ------------------------ |
| `color`    | String  | `'primary'` | Cor do chip              |
| `size`     | String  | `'md'`      | Tamanho (xs, sm, md, lg) |
| `outlined` | Boolean | `false`     | Estilo contornado        |
| `closable` | Boolean | `false`     | Botão de fechar          |
| `disabled` | Boolean | `false`     | Estado desabilitado      |

#### Slots

| Slot      | Descrição     |
| --------- | ------------- |
| `default` | Texto do chip |

#### Eventos

| Evento  | Parâmetros | Descrição                   |
| ------- | ---------- | --------------------------- |
| `close` | -          | Emitido ao clicar em fechar |
| `click` | `event`    | Emitido ao clicar no chip   |

#### Exemplo

```vue
<farm-chip color="success" closable @close="removeTag">
  Tag Removível
</farm-chip>
```

---

## Utilitários

### Modal

Janelas modais responsivas.

#### Props

| Prop         | Tipo    | Padrão    | Descrição                |
| ------------ | ------- | --------- | ------------------------ |
| `value`      | Boolean | `false`   | Visibilidade do modal    |
| `maxWidth`   | String  | `'500px'` | Largura máxima           |
| `persistent` | Boolean | `false`   | Não fecha ao clicar fora |
| `fullscreen` | Boolean | `false`   | Tela cheia               |

#### Slots

| Slot      | Descrição         |
| --------- | ----------------- |
| `default` | Conteúdo do modal |

#### Eventos

| Evento  | Parâmetros         | Descrição                       |
| ------- | ------------------ | ------------------------------- |
| `input` | `visible: boolean` | Emitido ao alterar visibilidade |

#### Exemplo

```vue
<farm-modal v-model="showModal" max-width="600px">
  <farm-dialog-header title="Título" @close="showModal = false" />
  Conteúdo do modal
  <farm-dialog-footer>
    <farm-button @click="showModal = false">Fechar</farm-button>
  </farm-dialog-footer>
</farm-modal>
```

---

### Tooltip

Dicas contextuais para elementos.

#### Props

| Prop       | Tipo    | Padrão  | Descrição                          |
| ---------- | ------- | ------- | ---------------------------------- |
| `text`     | String  | -       | Texto da tooltip                   |
| `position` | String  | `'top'` | Posição (top, bottom, left, right) |
| `disabled` | Boolean | `false` | Desabilitar tooltip                |

#### Slots

| Slot      | Descrição                    |
| --------- | ---------------------------- |
| `default` | Elemento que ativa a tooltip |

#### Exemplo

```vue
<farm-tooltip text="Informação adicional" position="bottom">
  <farm-icon>help-circle</farm-icon>
</farm-tooltip>
```

---

### Loader

Indicadores visuais de carregamento.

#### Props

| Prop            | Tipo    | Padrão      | Descrição                    |
| --------------- | ------- | ----------- | ---------------------------- |
| `size`          | String  | `'md'`      | Tamanho (xs, sm, md, lg, xl) |
| `color`         | String  | `'primary'` | Cor do loader                |
| `indeterminate` | Boolean | `true`      | Progresso indeterminado      |

#### Exemplo

```vue
<farm-loader v-if="loading" size="lg" color="primary" />
```

---

## 🔍 Validação

### Regras de Validação Comuns

```javascript
const validationRules = {
	required: value => !!value || 'Campo obrigatório',
	email: value => /.+@.+\..+/.test(value) || 'E-mail inválido',
	minLength: min => value => (value && value.length >= min) || `Mínimo ${min} caracteres`,
	maxLength: max => value => (value && value.length <= max) || `Máximo ${max} caracteres`,
	numeric: value => /^\d+$/.test(value) || 'Apenas números',
	phone: value => /^\(\d{2}\) \d{4,5}-\d{4}$/.test(value) || 'Telefone inválido',
	cpf: value => /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(value) || 'CPF inválido',
	cnpj: value => /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/.test(value) || 'CNPJ inválido',
};
```

### Máscaras Comuns

```javascript
const masks = {
	phone: '(##) #####-####',
	cpf: '###.###.###-##',
	cnpj: '##.###.###/####-##',
	cep: '#####-###',
	date: '##/##/####',
	currency: 'R$ #.##0,00',
};
```

---

## 📱 Breakpoints Responsivos

```javascript
const breakpoints = {
	xs: 0, // 0px+
	sm: 600, // 600px+
	md: 960, // 960px+
	lg: 1264, // 1264px+
	xl: 1904, // 1904px+
};
```

---

_Esta referência técnica fornece todas as informações necessárias para implementar corretamente os componentes da Farmtech._
