# 📚 Farmtech Components - Documentação

> Biblioteca Vue 2 para microfrontends da Farmtech

## 🚀 Quick Start

```bash
npm install @farm-investimentos/front-mfe-components
```

```javascript
import { FarmButton, FarmIcon } from '@farm-investimentos/front-mfe-components';

// Uso
<farm-button color="primary">
	<farm-icon>save</farm-icon>
	Salvar
</farm-button>;
```

## 📋 Componentes Disponíveis

### 🎨 Design System

-   `FarmTypography`, `FarmIcon`, `FarmProductLogo`, `FarmOriginatorLogo`

### 🔘 Botões (9 tipos)

-   `FarmDefaultButton`, `FarmDangerButton`, `FarmConfirmButton`, `FarmExportButton`, `FarmImportButton`, `FarmMultiImportButton`, `FarmRemoveButton`, `FarmToggleButton`, `FarmButtonToggle`

### 📝 Formulários (12 componentes)

-   `FarmForm`, `FarmTextFieldV2`, `FarmTextArea`, `FarmSelect`, `FarmSelectAutoComplete`, `FarmSelectModalOptions`, `FarmCheckbox`, `FarmRadio`, `FarmRadioGroup`, `FarmSwitcher`, `FarmDatePicker`, `FarmRangeDatePicker`

### 🏗️ Layout (9 componentes)

-   `FarmContainer`, `FarmContainerFooter`, `FarmRow`, `FarmCol`, `FarmBox`, `FarmLine`, `FarmCollapsible`, `FarmTabs`, `FarmStepper`

### 🎯 Exibição de Dados (9 componentes)

-   `FarmCard`, `FarmList`, `FarmListItem`, `FarmChip`, `FarmChipInviteStatus`, `FarmLabel`, `FarmValueCaption`, `FarmIdCaption`, `FarmProgressBar`

### 📊 Tabelas (7 componentes)

-   `FarmDataTableHeader`, `FarmDataTablePaginator`, `FarmDataTableEmptyWrapper`, `FarmTableContextMenu`, `FarmMainFilter`, `FarmFilterEmptyState`, `FarmResetTableRowSelection`

### 🔧 Utilitários (12 componentes)

-   `FarmModal`, `FarmModalPromptUser`, `FarmDialogHeader`, `FarmDialogFooter`, `FarmTooltip`, `FarmLoader`, `FarmAlertBox`, `FarmAlertReload`, `FarmContextMenu`, `FarmCopyToClipboard`, `FarmMultipleFilePicker`, `FarmPromptUserToConfirm`

### 🎛️ Avançados (4 componentes)

-   `FarmManagersList`, `FarmResourceMetaInfo`, `FarmMultipleSelectShortener`, `FarmGanttChart`

### 🔍 Debug (2 componentes)

-   `FarmLogger`, `FarmLoggerItem`

**Total: 65+ componentes disponíveis**

## 📖 Documentação

| Arquivo                                                | Descrição                                | Para               |
| ------------------------------------------------------ | ---------------------------------------- | ------------------ |
| **[USAGE-GUIDE.md](./USAGE-GUIDE.md)**                 | Exemplos práticos e setup                | Desenvolvedores    |
| **[COMPONENT-REFERENCE.md](./COMPONENT-REFERENCE.md)** | Lista completa + Props, eventos, métodos | Referência técnica |
| **[ICONS-REFERENCE.md](./ICONS-REFERENCE.md)**         | Lista completa de ícones                 | Escolha de ícones  |
| **[AI-ASSISTANT-GUIDE.md](./AI-ASSISTANT-GUIDE.md)**   | Padrões para IAs                         | Assistentes de IA  |

## 🎯 Informações Essenciais

-   **Pacote**: `@farm-investimentos/front-mfe-components@15.14.5`
-   **Framework**: Vue 2.7.10 + Vuetify 2.4.5
-   **Storybook**: [Visual](http://front-farm-storybook.s3-website-us-east-1.amazonaws.com/index.html)
-   **Contexto**: Aplicação financeira da Farmtech

## 🎨 Sistema de Design

### Cores

-   `primary`, `secondary`, `success`, `error`, `warning`, `neutral`
-   Variações: `base`, `lighten`, `darken`

### Tamanhos

-   `xs`, `sm`, `md`, `lg`, `xl`
-   Aceita valores CSS: `12px`, `1.5rem`

### Padrão de Nomenclatura

-   Componentes: `farm-[nome]` (ex: `farm-button`)
-   Imports: `Farm[Nome]` (ex: `FarmButton`)

## 🤖 Para IAs

Use este prompt:

```
Estou usando @farm-investimentos/front-mfe-components (Vue 2 + Vuetify) para aplicação financeira.
Sempre use: prefixo "farm-", cores apropriadas (primary/success/error), ícones MDI ou custom-.
Consulte AI-ASSISTANT-GUIDE.md para padrões específicos.
```

## 🔍 Busca Rápida

| Preciso de...         | Arquivo                                                            |
| --------------------- | ------------------------------------------------------------------ |
| Lista de componentes  | [COMPONENT-REFERENCE.md](./COMPONENT-REFERENCE.md) (seção inicial) |
| Exemplo de formulário | [USAGE-GUIDE.md](./USAGE-GUIDE.md)                                 |
| Props de componente   | [COMPONENT-REFERENCE.md](./COMPONENT-REFERENCE.md)                 |
| Ícone específico      | [ICONS-REFERENCE.md](./ICONS-REFERENCE.md)                         |
| Padrões para IA       | [AI-ASSISTANT-GUIDE.md](./AI-ASSISTANT-GUIDE.md)                   |

---

_📚 Documentação organizada para contexto limitado. Consulte os arquivos específicos para detalhes._
