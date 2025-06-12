import { isValid } from 'date-fns';
import type { GanttBar } from '../types';
import { getColumnForDate, getDaysInMonth } from '../utils/dateUtils';

export default function buildBarPositioning(dateRange, monthColumns) {
	const normalizeBarDates = (bar: GanttBar) => {
		let startDate = bar.start instanceof Date ? bar.start : new Date(bar.start);
		let endDate = bar.end instanceof Date ? bar.end : new Date(bar.end);

		if (!isValid(startDate) || !isValid(endDate)) {
			return null;
		}

		if (endDate < startDate) {
			const temp = startDate;
			startDate = endDate;
			endDate = temp;
		}

		return { startDate, endDate };
	};

	const calculateSingleMonthPositioning = (startDate: Date, endDate: Date) => {
		const startDay = startDate.getDate();
		const startMonth = startDate.getMonth();
		const startYear = startDate.getFullYear();
		const endDay = endDate.getDate();
		const endMonth = endDate.getMonth();
		const endYear = endDate.getFullYear();

		const daysInMonth = getDaysInMonth(startYear, startMonth);
		const startFraction = (startDay - 1) / daysInMonth;
		const effectiveEndDay =
			startYear === endYear && startMonth === endMonth ? endDay : daysInMonth;
		const endFraction = effectiveEndDay / daysInMonth;

		return {
			marginLeft: `calc(${startFraction * 100}%)`,
			width: `calc(${(endFraction - startFraction) * 100}%)`,
		};
	};

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

		const fractionBeforeBar = (startDay - 1) / daysInStartMonth;
		const fractionInStartMonth = (daysInStartMonth - (startDay - 1)) / daysInStartMonth;
		const fractionInEndMonth = endDay / daysInEndMonth;
		const fullIntermediateMonths = Math.max(0, visualMonthsSpanned - 2);

		if (gridColumnsSpanned <= 0) {
			return { marginLeft: '0%', width: '100%' };
		}

		const totalBarCoverage = fractionInStartMonth + fullIntermediateMonths + fractionInEndMonth;

		return {
			marginLeft: `calc((${fractionBeforeBar} / ${gridColumnsSpanned}) * 100%)`,
			width: `calc((${totalBarCoverage} / ${gridColumnsSpanned}) * 100%)`,
		};
	};

	const getBarGridStyle = (bar: GanttBar) => {
		const { start: chartStartDate } = dateRange.value;

		const dates = normalizeBarDates(bar);
		if (!dates) {
			const backgroundColor = bar.color || 'var(--farm-primary-base)';
			return {
				gridColumn: '1 / 2',
				backgroundColor: backgroundColor,
				gridRow: `${(bar.rowPosition || 0) + 1}`,
			};
		}

		const { startDate, endDate } = dates;

		const startColumnIndex = getColumnForDate(startDate, chartStartDate);
		const endColumnIndex = getColumnForDate(endDate, chartStartDate);

		const gridColumnStart = Math.max(1, startColumnIndex + 1);
		const gridColumnEnd = Math.min(monthColumns.value.length + 1, endColumnIndex + 2);
		const gridColumnsSpanned = gridColumnEnd - gridColumnStart;

		const visualStartCol = getColumnForDate(startDate, chartStartDate);
		const visualEndCol = getColumnForDate(endDate, chartStartDate);
		const visualMonthsSpanned = visualEndCol - visualStartCol + 1;

		let positioning;
		if (visualMonthsSpanned === 1) {
			positioning = calculateSingleMonthPositioning(startDate, endDate);
		} else {
			positioning = calculateMultiMonthPositioning(
				startDate,
				endDate,
				visualMonthsSpanned,
				gridColumnsSpanned
			);
		}

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

	const getPositionedBars = (bars: GanttBar[]) => {
		if (!bars || bars.length === 0) return [];

		const positionedBars = JSON.parse(JSON.stringify(bars));

		positionedBars.sort((a: GanttBar, b: GanttBar) => {
			return new Date(a.start).getTime() - new Date(b.start).getTime();
		});

		const occupiedUntil: number[] = [];

		positionedBars.forEach((bar: GanttBar) => {
			const startDate = bar.start instanceof Date ? bar.start : new Date(bar.start);
			const endDate = bar.end instanceof Date ? bar.end : new Date(bar.end);

			const barStart = isValid(startDate) ? startDate.getTime() : Date.now();
			const barEnd = isValid(endDate) ? endDate.getTime() : Date.now() + 86400000; // +1 day fallback

			let rowPosition = 0;
			while (occupiedUntil[rowPosition] && occupiedUntil[rowPosition] > barStart) {
				rowPosition++;
			}

			bar.rowPosition = rowPosition;
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
