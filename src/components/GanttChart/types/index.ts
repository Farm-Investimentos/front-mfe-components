/**
 * Type definitions for GanttChart component
 */

export interface GanttBar {
	id: string | number;
	start: Date | string;
	end: Date | string;
	label?: string;
	color?: string;
	type?: string;
	rowPosition?: number;
	[key: string]: any;
}

export interface GanttGroup {
	label: string;
	bars: GanttBar[];
}

export interface LegendItem {
	label: string;
	color?: string;
	type?: string;
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
