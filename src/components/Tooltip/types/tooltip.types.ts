export type TooltipPlacement =
	| 'top-left'
	| 'top-center'
	| 'top-right'
	| 'bottom-left'
	| 'bottom-center'
	| 'bottom-right';

export type TooltipTrigger = 'hover' | 'click' | 'manual';

export type TooltipVariant = 'dark' | 'light';

export type TooltipSize = 'sm' | 'md' | 'lg';

export interface TooltipProps {
	// Visibility control (Vue 2.7 style)
	value?: boolean; // v-model
	trigger?: TooltipTrigger;

	// Posicionamento (todas as 6 posições necessárias)
	placement?: TooltipPlacement;
	offset?: number;

	// Aparência
	variant?: TooltipVariant;
	size?: TooltipSize;
	maxWidth?: string | number;

	// Comportamento
	delay?: number | [number, number]; // [show, hide]
	disabled?: boolean;
}

export interface TooltipEvents {
	input: (value: boolean) => void; // Vue 2.7 v-model
	show: () => void;
	hide: () => void;
}

export interface Position {
	x: number;
	y: number;
}

export interface TooltipState {
	isVisible: boolean;
	position: Position;
	actualPlacement: TooltipPlacement;
}
