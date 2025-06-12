/**
 * Date utility functions for GanttChart component
 */

import {
	eachMonthOfInterval,
	startOfMonth,
	format,
	isSameMonth,
	getDaysInMonth as dateFnsGetDaysInMonth,
	differenceInMonths,
	parseISO,
	isValid
} from 'date-fns';
import { ptBR } from 'date-fns/locale';

/**
 * Get all months between two dates
 */
export const getMonthsBetween = (startDate: Date, endDate: Date): Date[] => {
	return eachMonthOfInterval({
		start: startOfMonth(startDate),
		end: startOfMonth(endDate)
	});
};

/**
 * Format month in Brazilian Portuguese
 */
export const formatMonth = (date: Date): string => {
	const formatted = format(date, 'MMM/yyyy', { locale: ptBR });
	return formatted.charAt(0).toUpperCase() + formatted.slice(1);
};

/**
 * Check if date is current month
 */
export const isCurrentMonth = (date: Date): boolean => {
	return isSameMonth(date, new Date());
};

/**
 * Get number of days in a month
 */
export const getDaysInMonth = (year: number, month: number): number => {
	return dateFnsGetDaysInMonth(new Date(year, month));
};

/**
 * Get column index for a date relative to start date
 */
export const getColumnForDate = (date: Date | string, startDate: Date): number => {
	const targetDate = date instanceof Date ? date : new Date(date);
	const startDateObj = startDate instanceof Date ? startDate : new Date(startDate);

	if (!isValid(targetDate) || !isValid(startDateObj)) {
		return 0;
	}

	const targetMonth = startOfMonth(targetDate);
	const startMonth = startOfMonth(startDateObj);

	return differenceInMonths(targetMonth, startMonth);
};

/**
 * Parse ISO date string (YYYY-MM-DD) to Date object
 */
export const parseIsoDate = (iso: string): Date => {
	if (!iso || typeof iso !== 'string') {
		return new Date(NaN);
	}

	try {
		const parsedDate = parseISO(iso);
		return isValid(parsedDate) ? parsedDate : new Date(NaN);
	} catch {
		return new Date(NaN);
	}
};

/**
 * Format date range for tooltip display
 */
export const formatDateRange = (start: Date | string, end: Date | string): string => {
	const startDate = typeof start === 'string' ? new Date(start) : start;
	const endDate = typeof end === 'string' ? new Date(end) : end;
	
	if (!isValid(startDate) || !isValid(endDate)) {
		return 'Data inválida';
	}
	
	const formatDate = (date: Date) => {
		return format(date, 'dd/MM/yyyy', { locale: ptBR });
	};
	
	return `${formatDate(startDate)} - ${formatDate(endDate)}`;
};
