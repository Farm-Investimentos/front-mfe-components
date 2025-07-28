# Referência de Ícones - Farmtech Components

## 📝 Sobre os Ícones

A biblioteca de componentes da Farmtech utiliza dois tipos de ícones:

1. **Material Design Icons (MDI)** - Biblioteca padrão de ícones
2. **Ícones Customizados da Farmtech** - Ícones específicos da empresa

## 🎯 Como Usar

### Uso Básico

```vue
<template>
	<!-- Ícone MDI -->
	<farm-icon color="primary" size="24px">account</farm-icon>

	<!-- Ícone customizado -->
	<farm-icon color="primary" size="32px">custom-farmtech-logo</farm-icon>
</template>
```

### Propriedades do Componente Icon

| Prop        | Tipo   | Padrão      | Descrição                                                      |
| ----------- | ------ | ----------- | -------------------------------------------------------------- |
| `color`     | String | `'primary'` | Cor do ícone (primary, secondary, success, error, etc.)        |
| `size`      | String | `'default'` | Tamanho (xs, sm, md, lg, xl) ou valor CSS (24px, 2rem)         |
| `variation` | String | `'base'`    | Variação da cor (lighten, base, darken, 80, 50, 40, 30, 10, 5) |

### Cores Disponíveis

-   `primary` - Cor primária da Farmtech
-   `secondary` - Cor secundária
-   `secondary-green` - Verde secundário
-   `secondary-golden` - Dourado secundário
-   `neutral` - Cinza neutro
-   `info` - Azul informativo
-   `success` - Verde de sucesso
-   `error` - Vermelho de erro
-   `warning` - Amarelo de aviso
-   `extra-1` / `extra-2` - Cores extras
-   `gray` / `black` / `white` - Cores básicas

### Tamanhos Responsivos

-   `xs` - Extra pequeno
-   `sm` - Pequeno
-   `md` - Médio
-   `lg` - Grande
-   `xl` - Extra grande

## 🎨 Ícones Material Design (MDI)

### Ícones de Conta e Usuário

```
account
account-alert
account-box
account-box-multiple
account-box-outline
account-check
account-circle
account-convert
account-edit
account-group
account-heart
account-key
account-minus
account-multiple
account-multiple-check
account-multiple-minus
account-multiple-outline
account-multiple-plus
account-multiple-plus-outline
account-network
account-off
account-outline
account-plus
account-plus-outline
account-remove
account-search
account-search-outline
```

### Ícones de Navegação e Interface

```
home
menu
close
arrow-left
arrow-right
arrow-up
arrow-down
chevron-left
chevron-right
chevron-up
chevron-down
navigate-next
navigate-before
first-page
last-page
keyboard-arrow-left
keyboard-arrow-right
keyboard-arrow-up
keyboard-arrow-down
```

### Ícones de Ação

```
add
remove
edit
delete
save
cancel
refresh
search
filter
sort
more-vert
more-horiz
settings
help
info
warning
error
check
close
visibility
visibility-off
star
star-outline
favorite
favorite-outline
bookmark
bookmark-outline
```

### Ícones de Arquivo e Dados

```
folder
folder-open
folder-outline
file
file-outline
file-document
file-document-outline
download
upload
cloud-download
cloud-upload
attach-file
link
unlink
copy
paste
cut
```

### Ícones de Comunicação

```
email
email-outline
phone
phone-outline
message
message-outline
chat
chat-outline
comment
comment-outline
notification
notifications
notifications-off
```

### Ícones Financeiros

```
currency-usd
currency-eur
currency-gbp
trending-up
trending-down
trending-neutral
chart-line
chart-bar
chart-pie
analytics
calculator
credit-card
bank
wallet
```

### Ícones de Status

```
check-circle
check-circle-outline
error-outline
warning-outline
info-outline
help-circle
help-circle-outline
clock
clock-outline
calendar
calendar-outline
event
schedule
```

### Ícones de Interface

```
dashboard
view-dashboard
view-list
view-grid
view-column
table
grid
list
card
```

## 🏢 Ícones Customizados da Farmtech

### Logos e Branding

```
custom-farmtech-logo
custom-farm-investimentos
custom-product-logo
custom-originator-logo
```

### Ícones Específicos do Negócio

```
custom-investment
custom-portfolio
custom-fund
custom-manager
custom-report
custom-analytics
custom-risk
custom-compliance
```

> **Nota**: Os ícones customizados são específicos da Farmtech e podem não estar disponíveis publicamente. Eles são incluídos no pacote da biblioteca.

## 💡 Exemplos Práticos

### Botões com Ícones

```vue
<template>
	<!-- Botão com ícone à esquerda -->
	<farm-button color="primary">
		<farm-icon>download</farm-icon>
		Baixar Relatório
	</farm-button>

	<!-- Botão apenas com ícone -->
	<farm-button icon color="primary">
		<farm-icon>settings</farm-icon>
	</farm-button>

	<!-- Ícone clicável -->
	<farm-icon color="primary" size="24px" @click="handleClick" style="cursor: pointer;">
		edit
	</farm-icon>
</template>
```

### Ícones em Listas

```vue
<template>
	<farm-list>
		<farm-list-item>
			<template #icon>
				<farm-icon color="success">check-circle</farm-icon>
			</template>
			<template #title>Item Concluído</template>
		</farm-list-item>

		<farm-list-item>
			<template #icon>
				<farm-icon color="warning">clock</farm-icon>
			</template>
			<template #title>Item Pendente</template>
		</farm-list-item>
	</farm-list>
</template>
```

### Ícones com Variações de Cor

```vue
<template>
	<div>
		<!-- Ícone com cor base -->
		<farm-icon color="primary">star</farm-icon>

		<!-- Ícone mais claro -->
		<farm-icon color="primary" variation="lighten">star</farm-icon>

		<!-- Ícone mais escuro -->
		<farm-icon color="primary" variation="darken">star</farm-icon>

		<!-- Ícone com opacidade -->
		<farm-icon color="black" variation="50">star</farm-icon>
	</div>
</template>
```

### Ícones Responsivos

```vue
<template>
	<div>
		<!-- Tamanhos responsivos -->
		<farm-icon size="xs">home</farm-icon>
		<farm-icon size="sm">home</farm-icon>
		<farm-icon size="md">home</farm-icon>
		<farm-icon size="lg">home</farm-icon>
		<farm-icon size="xl">home</farm-icon>

		<!-- Tamanhos customizados -->
		<farm-icon size="16px">home</farm-icon>
		<farm-icon size="2rem">home</farm-icon>
		<farm-icon size="48px">home</farm-icon>
	</div>
</template>
```

## 🔍 Buscar Ícones

### Por Categoria

**Interface e Navegação:**

-   `home`, `menu`, `search`, `settings`, `dashboard`

**Ações:**

-   `add`, `edit`, `delete`, `save`, `refresh`, `download`, `upload`

**Status:**

-   `check`, `error`, `warning`, `info`, `clock`, `star`

**Comunicação:**

-   `email`, `phone`, `message`, `notification`

**Arquivos:**

-   `folder`, `file`, `download`, `upload`, `attach`

**Financeiro:**

-   `currency-usd`, `trending-up`, `chart-line`, `calculator`

### Dicas de Uso

1. **Consistência**: Use o mesmo conjunto de ícones em toda a aplicação
2. **Contexto**: Escolha ícones que façam sentido no contexto
3. **Tamanho**: Mantenha tamanhos consistentes para o mesmo tipo de elemento
4. **Cor**: Use cores que sigam o design system da Farmtech
5. **Acessibilidade**: Considere adicionar `aria-label` para ícones importantes

## 🤖 Para Assistentes de IA

Ao sugerir ícones:

1. Use nomes MDI padrão (sem prefixo `mdi-`)
2. Para ícones Farmtech, use prefixo `custom-`
3. Considere o contexto financeiro da aplicação
4. Priorize ícones que transmitam clareza e profissionalismo
5. Sugira variações de cor e tamanho apropriadas

### Ícones Mais Comuns na Farmtech

```
// Interface
dashboard, home, menu, search, settings, help

// Ações
add, edit, delete, save, download, upload, refresh

// Dados
chart-line, trending-up, trending-down, analytics, table

// Status
check-circle, error-outline, warning, info, clock

// Navegação
arrow-left, arrow-right, chevron-down, more-vert

// Financeiro
currency-usd, calculator, bank, credit-card, wallet
```

---

_Esta referência facilita a escolha e uso correto de ícones nos projetos da Farmtech._
