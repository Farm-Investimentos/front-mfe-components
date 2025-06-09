/**
 * Type definitions for GanttChart component - Nova estrutura simplificada
 */

// Nova estrutura de dados simplificada
export interface GanttData {
	groups: GanttGroup[];
}

export interface GanttGroup {
	title: string; // obrigatório (era "label" antes)
	bars: GanttBar[];
}

export interface GanttBar {
	id: string | number;
	label: string; // obrigatório
	start: Date | string; // obrigatório
	end: Date | string; // obrigatório
	color: string; // obrigatório - cor direta hex/rgb
	rowPosition?: number;
	[key: string]: any; // propriedades extras
}

export interface LegendItem {
	label: string;
	color: string;
}

export interface MonthColumn {
	date: Date;
	label: string;
	isCurrentMonth: boolean;
}

export interface BarGridStyle {
	'grid-column-start': number;
	'grid-column-end': number;
	'background-color': string;
	'grid-row': string;
	'margin-left': string;
	'width': string;
}

export interface DateRange {
	start: Date;
	end: Date;
}

// Tipos legados mantidos para compatibilidade (remover em versões futuras)
export type BarType = 'campaign' | 'product' | 'disbursement' | 'maturity' | 'default';

export type ThemeColor =
	| 'primary'
	| 'secondary'
	| 'info'
	| 'success'
	| 'warning'
	| 'error'
	| 'neutral'
	| 'extra-1'
	| 'extra-2'
	| 'gray'
	| 'secondary-green'
	| 'secondary-golden';
