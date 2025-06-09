/**
 * Date utility functions for GanttChart component
 */

/**
 * Get all months between two dates
 */
export const getMonthsBetween = (startDate: Date, endDate: Date): Date[] => {
	const months = [];
	const current = new Date(startDate.getFullYear(), startDate.getMonth(), 1);
	const end = new Date(endDate.getFullYear(), endDate.getMonth(), 1);

	while (current <= end) {
		months.push(new Date(current));
		current.setMonth(current.getMonth() + 1);
	}

	return months;
};

/**
 * Format month in Brazilian Portuguese
 */
export const formatMonth = (date: Date): string => {
	const monthNames = [
		'Jan',
		'Fev',
		'Mar',
		'Abr',
		'Mai',
		'Jun',
		'Jul',
		'Ago',
		'Set',
		'Out',
		'Nov',
		'Dez',
	];
	return `${monthNames[date.getMonth()]}/${date.getFullYear()}`;
};

/**
 * Check if date is current month
 */
export const isCurrentMonth = (date: Date): boolean => {
	const now = new Date();
	return date.getMonth() === now.getMonth() && date.getFullYear() === now.getFullYear();
};

/**
 * Get number of days in a month
 */
export const getDaysInMonth = (year: number, month: number): number => {
	return new Date(year, month + 1, 0).getDate();
};

/**
 * Get column index for a date relative to start date
 */
export const getColumnForDate = (date: Date | string, startDate: Date): number => {
	// Ensure we have Date objects
	const targetDate = date instanceof Date ? date : new Date(date);
	const startDateObj = startDate instanceof Date ? startDate : new Date(startDate);

	// Validate dates
	if (isNaN(targetDate.getTime()) || isNaN(startDateObj.getTime())) {
		return 0;
	}

	const targetMonth = new Date(targetDate.getFullYear(), targetDate.getMonth(), 1);
	const startMonth = new Date(startDateObj.getFullYear(), startDateObj.getMonth(), 1);

	const yearDiff = targetMonth.getFullYear() - startMonth.getFullYear();
	const monthDiff = targetMonth.getMonth() - startMonth.getMonth();

	return yearDiff * 12 + monthDiff;
};
