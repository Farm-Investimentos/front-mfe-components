import { isValid } from 'date-fns';
import type { GanttBar } from '../types';
import { getColumnForDate, getDaysInMonth } from '../utils/dateUtils';

export default function buildBarPositioning(dateRange, monthColumns) {
	/**
	 * Normalize and validate bar dates
	 */
	const normalizeBarDates = (bar: GanttBar) => {
		let startDate = bar.start instanceof Date ? bar.start : new Date(bar.start);
		let endDate = bar.end instanceof Date ? bar.end : new Date(bar.end);

		// Validate dates
		if (!isValid(startDate) || !isValid(endDate)) {
			return null;
		}

		// Ensure end is not before start
		if (endDate < startDate) {
			const temp = startDate;
			startDate = endDate;
			endDate = temp;
		}

		return { startDate, endDate };
	};

	/**
	 * Calculate month fractions for positioning within a single month
	 */
	const calculateSingleMonthPositioning = (startDate: Date, endDate: Date) => {
		const startDay = startDate.getDate();
		const startMonth = startDate.getMonth();
		const startYear = startDate.getFullYear();
		const endDay = endDate.getDate();
		const endMonth = endDate.getMonth();
		const endYear = endDate.getFullYear();

		const daysInMonth = getDaysInMonth(startYear, startMonth);

		// Calculate start position as fraction of month
		const startFraction = (startDay - 1) / daysInMonth;

		// Calculate end position - if bar ends in same month, use actual end day
		// otherwise, use end of start month
		const effectiveEndDay =
			startYear === endYear && startMonth === endMonth ? endDay : daysInMonth;
		const endFraction = effectiveEndDay / daysInMonth;

		return {
			marginLeft: `calc(${startFraction * 100}%)`,
			width: `calc(${(endFraction - startFraction) * 100}%)`,
		};
	};

	/**
	 * Calculate positioning for bars spanning multiple months
	 */
	const calculateMultiMonthPositioning = (
		startDate: Date,
		endDate: Date,
		visualMonthsSpanned: number,
		gridColumnsSpanned: number
	) => {
		const startDay = startDate.getDate();
		const endDay = endDate.getDate();
		const startMonth = startDate.getMonth();
		const startYear = startDate.getFullYear();
		const endMonth = endDate.getMonth();
		const endYear = endDate.getFullYear();

		const daysInStartMonth = getDaysInMonth(startYear, startMonth);
		const daysInEndMonth = getDaysInMonth(endYear, endMonth);

		// Calculate fractions for start month, full intermediate months, and end month
		const fractionBeforeBar = (startDay - 1) / daysInStartMonth;
		const fractionInStartMonth = (daysInStartMonth - (startDay - 1)) / daysInStartMonth;
		const fractionInEndMonth = endDay / daysInEndMonth;
		const fullIntermediateMonths = Math.max(0, visualMonthsSpanned - 2);

		// Avoid division by zero
		if (gridColumnsSpanned <= 0) {
			return { marginLeft: '0%', width: '100%' };
		}

		// Calculate total bar coverage across all months
		const totalBarCoverage = fractionInStartMonth + fullIntermediateMonths + fractionInEndMonth;

		return {
			marginLeft: `calc((${fractionBeforeBar} / ${gridColumnsSpanned}) * 100%)`,
			width: `calc((${totalBarCoverage} / ${gridColumnsSpanned}) * 100%)`,
		};
	};

	/**
	 * Get CSS Grid style for a bar - refactored for clarity
	 */
	const getBarGridStyle = (bar: GanttBar) => {
		const { start: chartStartDate } = dateRange.value;

		// Step 1: Normalize and validate dates
		const dates = normalizeBarDates(bar);
		if (!dates) {
			// Return fallback style for invalid dates
			// Fallback para datas inválidas também precisa de cor padrão
			const backgroundColor = bar.color || 'var(--farm-primary-base)';
			return {
				gridColumn: '1 / 2',
				backgroundColor: backgroundColor,
				gridRow: `${(bar.rowPosition || 0) + 1}`,
			};
		}

		const { startDate, endDate } = dates;

		// Step 2: Calculate grid column positions
		const startColumnIndex = getColumnForDate(startDate, chartStartDate);
		const endColumnIndex = getColumnForDate(endDate, chartStartDate);

		const gridColumnStart = Math.max(1, startColumnIndex + 1);
		const gridColumnEnd = Math.min(monthColumns.value.length + 1, endColumnIndex + 2);
		const gridColumnsSpanned = gridColumnEnd - gridColumnStart;

		// Step 3: Calculate visual month span for proportional positioning
		const visualStartCol = getColumnForDate(startDate, chartStartDate);
		const visualEndCol = getColumnForDate(endDate, chartStartDate);
		const visualMonthsSpanned = visualEndCol - visualStartCol + 1;

		// Step 4: Calculate proportional positioning based on month span
		let positioning;
		if (visualMonthsSpanned === 1) {
			// Bar fits within a single month - calculate precise positioning within that month
			positioning = calculateSingleMonthPositioning(startDate, endDate);
		} else {
			// Bar spans multiple months - calculate proportional positioning across months
			positioning = calculateMultiMonthPositioning(
				startDate,
				endDate,
				visualMonthsSpanned,
				gridColumnsSpanned
			);
		}

		// Adicionar fallback para cor
		const backgroundColor = bar.color || 'var(--farm-primary-base)';

		return {
			'grid-column-start': gridColumnStart,
			'grid-column-end': gridColumnEnd,
			'background-color': backgroundColor,
			'grid-row': `${(bar.rowPosition || 0) + 1}`,
			'margin-left': positioning.marginLeft,
			width: positioning.width,
		};
	};

	// Calculate vertical positions for bars to avoid overlapping
	const getPositionedBars = (bars: GanttBar[]) => {
		if (!bars || bars.length === 0) return [];

		// Clone the bars to avoid modifying the original
		const positionedBars = JSON.parse(JSON.stringify(bars));

		// Sort bars by start date
		positionedBars.sort((a: GanttBar, b: GanttBar) => {
			return new Date(a.start).getTime() - new Date(b.start).getTime();
		});

		// Track occupied rows
		const occupiedUntil: number[] = [];

		// Assign row positions
		positionedBars.forEach((bar: GanttBar) => {
			// Ensure we have valid dates
			const startDate = bar.start instanceof Date ? bar.start : new Date(bar.start);
			const endDate = bar.end instanceof Date ? bar.end : new Date(bar.end);

			// Validate dates and use fallback if invalid
			const barStart = isValid(startDate) ? startDate.getTime() : Date.now();
			const barEnd = isValid(endDate) ? endDate.getTime() : Date.now() + 86400000; // +1 day fallback

			// Find the first available row
			let rowPosition = 0;
			while (occupiedUntil[rowPosition] && occupiedUntil[rowPosition] > barStart) {
				rowPosition++;
			}

			// Assign the row position to the bar
			bar.rowPosition = rowPosition;

			// Mark this row as occupied until the bar ends
			occupiedUntil[rowPosition] = barEnd;
		});

		return positionedBars;
	};

	return {
		normalizeBarDates,
		calculateSingleMonthPositioning,
		calculateMultiMonthPositioning,
		getBarGridStyle,
		getPositionedBars,
	};
}
