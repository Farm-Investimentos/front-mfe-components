# Tooltip Component - Especificação Técnica

## 📋 Visão Geral

O componente `Tooltip` é uma implementação simples e eficiente de tooltip para Vue 2.7, projetado para ser fácil de usar e manter, com foco em performance e compatibilidade.

## 🎯 Objetivos de Design

### Simplicidade

-   **Lógica direta**: Sem cálculos complexos desnecessários
-   **API simples**: Props e slots intuitivos
-   **Manutenibilidade**: Código limpo e bem estruturado

### Performance

-   **Event listeners otimizados**: Uso de `passive: true`
-   **Cleanup automático**: Remoção de listeners no unmount
-   **Position fixed**: Evita reflows desnecessários

### Compatibilidade

-   **Vue 2.7**: Suporte completo com Composition API
-   **Modais**: Funciona perfeitamente em contextos com scroll
-   **Retrocompatibilidade**: Mantém props antigas quando possível

## 🏗️ Arquitetura

### Estrutura de Componentes

```
Tooltip.vue (Principal)
├── Template
│   ├── Container (position: relative)
│   ├── Activator (slot)
│   └── Tooltip Content (position: fixed)
│       ├── Header (title + close button)
│       ├── Content (default slot)
│       └── Arrow (CSS-based)
├── Script (Composition API)
│   ├── Props & Emits
│   ├── Refs & State
│   ├── Computed Properties
│   ├── Event Handlers
│   ├── Scroll Detection
│   └── Lifecycle Hooks
└── Styles (SCSS)
    ├── Base styles
    ├── States (visible/hidden)
    └── Arrow positioning
```

### Fluxo de Dados

```
User Interaction → Event Handler → State Update → DOM Update → Position Calculation
     ↓
Scroll Detection → Position Update → Viewport Check → Auto Hide (if needed)
```

## 🔧 Implementação Técnica

### Props Interface

```typescript
interface TooltipProps {
	// Controle de visibilidade (Vue 2.7 style)
	value?: boolean; // v-model
	trigger?: TooltipTrigger; // 'hover' | 'click' | 'manual'

	// Posicionamento
	placement?: TooltipPlacement; // 6 posições disponíveis
	offset?: number; // Distância do ativador

	// Aparência
	variant?: TooltipVariant; // 'dark' | 'light'
	size?: TooltipSize; // 'sm' | 'md' | 'lg'
	fluid?: boolean; // Largura baseada no conteúdo
	maxWidth?: string | number; // Largura máxima

	// Comportamento
	delay?: number | [number, number]; // Delay para show/hide
	disabled?: boolean; // Desabilita o tooltip

	// Legacy (mantido para compatibilidade)
	position?: string; // Posição alternativa
}
```

### State Management

```typescript
// Refs principais
const isVisible = ref(false);
const containerRef = ref<HTMLElement | null>(null);
const activatorRef = ref<HTMLElement | null>(null);
const tooltipRef = ref<HTMLElement | null>(null);

// Computed properties
const isControlled = computed(() => props.value !== undefined);
const hasTitle = computed(() => !!slots.title);
const showCloseButton = computed(() => isControlled.value && hasTitle.value);
```

### Event Handling

#### Show/Hide Logic

```typescript
const show = () => {
	if (props.disabled || isControlled.value) return;

	isVisible.value = true;
	emit('show');

	nextTick(() => {
		if (tooltipRef.value && activatorRef.value) {
			moveToBody(tooltipRef.value);
			updatePosition();
			addScrollListener();
		}
	});
};

const hide = () => {
	if (props.disabled || isControlled.value) return;

	isVisible.value = false;
	emit('hide');
	removeScrollListener();
};
```

#### Scroll Detection

```typescript
const addScrollListener = () => {
	window.addEventListener('scroll', updatePosition, { passive: true });

	const scrollableElements = document.querySelectorAll(
		'.farm-modal, .modal-content, [style*="overflow-y: auto"], [style*="overflow-y: scroll"]'
	);
	scrollableElements.forEach(element => {
		element.addEventListener('scroll', updatePosition, { passive: true });
	});
};
```

### Position Calculation

#### Utils Function

```typescript
export function calculateTooltipPosition(
	activatorRect: TooltipRect,
	tooltipRect: TooltipRect,
	placement: string,
	offset: number = 8
): TooltipPosition {
	const [verticalPos, horizontalAlign] = placement.split('-');

	let left = 0;
	let top = 0;

	// Posição vertical
	if (verticalPos === 'top') {
		top = activatorRect.top - tooltipRect.height - offset;
	} else {
		top = activatorRect.bottom + offset;
	}

	// Posição horizontal com seta inteligente
	switch (horizontalAlign) {
		case 'left':
			left = activatorRect.left + activatorRect.width / 2 - 18;
			break;
		case 'right':
			left = activatorRect.left + activatorRect.width / 2 - (tooltipRect.width - 18);
			break;
		case 'center':
		default:
			left = activatorRect.left + activatorRect.width / 2 - tooltipRect.width / 2;
			break;
	}

	return { left, top };
}
```

## 🎨 Sistema de Posicionamento

### 6 Posições Suportadas

| Posição         | Seta             | Comportamento                  |
| --------------- | ---------------- | ------------------------------ |
| `top-left`      | 18px da esquerda | Aponta para centro do ativador |
| `top-center`    | Centro           | Aponta para centro do ativador |
| `top-right`     | 18px da direita  | Aponta para centro do ativador |
| `bottom-left`   | 18px da esquerda | Aponta para centro do ativador |
| `bottom-center` | Centro           | Aponta para centro do ativador |
| `bottom-right`  | 18px da direita  | Aponta para centro do ativador |

### Lógica da Seta

```typescript
const arrowStyles = computed(() => {
	const [verticalPos, horizontalAlign] = normalizedPlacement.value.split('-');

	const styles: Record<string, string> = {
		position: 'absolute',
		width: '0',
		height: '0',
		borderStyle: 'solid',
		zIndex: '10000',
	};

	// Posição vertical
	if (verticalPos === 'top') {
		styles.bottom = '-6px';
		styles.borderWidth = '6px 6px 0 6px';
		styles.borderColor = '#333333 transparent transparent transparent';
	} else {
		styles.top = '-6px';
		styles.borderWidth = '0 6px 6px 6px';
		styles.borderColor = 'transparent transparent #333333 transparent';
	}

	// Posição horizontal
	if (horizontalAlign === 'left') {
		styles.left = '18px';
	} else if (horizontalAlign === 'right') {
		styles.right = '18px';
	} else {
		styles.left = '50%';
		styles.transform = 'translateX(-50%)';
	}

	return styles;
});
```

## 🔄 Portal Effect

### DOM Manipulation

```typescript
export function moveToBody(element: HTMLElement): void {
	if (element.parentNode !== document.body) {
		document.body.appendChild(element);
	}
}

export function moveToContainer(element: HTMLElement, container: HTMLElement): void {
	if (element.parentNode === document.body) {
		container.appendChild(element);
	}
}
```

### Por que Portal?

-   **Evita overflow**: Tooltip não fica cortado por containers
-   **Z-index**: Sempre fica acima de outros elementos
-   **Scroll**: Não é afetado por scroll do container pai

## 🎯 Casos de Uso Específicos

### Modal com Scroll

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

**Comportamento:**

1. Tooltip detecta scroll no modal
2. Atualiza posição automaticamente
3. Esconde se ativador sair da viewport
4. Remove listeners quando esconde

### Tooltip Controlado

```vue
<farm-tooltip v-model="showTooltip" placement="top-right">
  <template v-slot:activator>
    <farm-icon @click="showTooltip = !showTooltip">help-circle</farm-icon>
  </template>
  <template v-slot:title>Tooltip Controlado</template>
  Conteúdo do tooltip
</farm-tooltip>
```

**Comportamento:**

1. Visibilidade controlada por v-model
2. Botão de fechar aparece automaticamente
3. Eventos `show`/`hide` emitidos
4. Cleanup automático de listeners

## 🧪 Testes

### Cenários de Teste

1. **Posicionamento**

    - [ ] Todas as 6 posições funcionam
    - [ ] Seta aponta para centro do ativador
    - [ ] Tooltip não sai da viewport

2. **Interação**

    - [ ] Hover show/hide funciona
    - [ ] v-model funciona corretamente
    - [ ] Botão de fechar funciona

3. **Scroll**

    - [ ] Tooltip se move com scroll
    - [ ] Tooltip esconde quando ativador sai da viewport
    - [ ] Listeners são removidos corretamente

4. **Modal**
    - [ ] Funciona em modal com scroll
    - [ ] Posição atualiza corretamente
    - [ ] Não interfere com outros elementos

### Como Testar

```bash
# Executar testes
npm run test:unit -- Tooltip

# Executar Storybook
npm run storybook

# Testar manualmente
# 1. Acesse http://localhost:6006
# 2. Navegue para Display/Tooltip
# 3. Teste todos os stories
# 4. Especialmente o "WithModal"
```

## 🔮 Roadmap

### Melhorias Futuras

-   [ ] **Auto-flip**: Inverter posição se não couber na viewport
-   [ ] **Animations**: Transições suaves
-   [ ] **Themes**: Suporte a temas diferentes
-   [ ] **Accessibility**: Melhor suporte a acessibilidade

### Limitações Atuais

-   **Vue 2.7**: Não usa Teleport nativo (não disponível)
-   **Manual DOM**: Manipulação manual para portal effect
-   **Fixed positioning**: Sempre usa position: fixed

## 📚 Referências

-   [Vue 2.7 Composition API](https://v2.vuejs.org/v2/guide/composition-api.html)
-   [CSS Position Fixed](https://developer.mozilla.org/en-US/docs/Web/CSS/position)
-   [DOM Event Listeners](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
-   [Bounding Client Rect](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect)
