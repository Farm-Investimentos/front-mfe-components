/**
 * Date utility functions for GanttChart component
 * Refactored to use date-fns 2.29.3
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
	// Capitalize first letter to match original format (Jan/2025, Fev/2025, etc.)
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
	// date-fns expects a Date object, so we create one for the specified year/month
	// Note: month parameter is 0-based (0 = January) to match original function signature
	return dateFnsGetDaysInMonth(new Date(year, month));
};

/**
 * Get column index for a date relative to start date
 */
export const getColumnForDate = (date: Date | string, startDate: Date): number => {
	// Ensure we have Date objects
	const targetDate = date instanceof Date ? date : new Date(date);
	const startDateObj = startDate instanceof Date ? startDate : new Date(startDate);

	// Validate dates
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
