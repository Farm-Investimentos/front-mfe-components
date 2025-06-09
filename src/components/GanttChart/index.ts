import GanttChart from './GanttChart.vue';

// Exportar o componente
export { GanttChart };
export default GanttChart;

// Exportar os tipos para uso externo
export type {
	GanttData,
	GanttGroup,
	GanttBar,
	LegendItem,
	MonthColumn,
	BarGridStyle,
	DateRange,
	BarType,
	ThemeColor
} from './types';

// Exportar utilitários de data para uso externo
export {
	getMonthsBetween,
	formatMonth,
	isCurrentMonth,
	getDaysInMonth,
	getColumnForDate
} from './utils/dateUtils';
