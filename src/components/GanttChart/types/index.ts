export interface GanttData {
	groups: GanttGroup[];
}

export interface GanttGroup {
	title: string;
	subtitle?: string;
	bars: GanttBar[];
}

export interface GanttBar {
	id: string | number;
	label: string;
	start: Date | string;
	end: Date | string;
	color: string;
	rowPosition?: number;
	tooltipData?: TooltipData;

	[key: string]: any;
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


// NEW: Tooltip data interface
export interface TooltipData {
	[key: string]: string | number | null | undefined;
}

// NEW: Enhanced tooltip state
export interface TooltipState {
	visible: boolean;
	x: number;
	y: number;
	title: string;
	barData: GanttBar | null;
}
