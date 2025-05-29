<template>
	<div class="farm-gantt-chart" :style="componentStyle">
		<div class="farm-gantt-chart__header">
			<div class="farm-gantt-chart__row-label-space" v-if="showRowLabels"></div>
			<div class="farm-gantt-chart__timeline" :style="timelineGridStyle">
				<div
					v-for="(month, index) in monthColumns"
					:key="index"
					class="farm-gantt-chart__month-header"
					:class="{ 'farm-gantt-chart__month-header--current': month.isCurrentMonth }"
				>
					<farm-typography
						size="md"
						:weight="500"
						:color="month.isCurrentMonth ? 'primary' : 'black'"
						:color-variation="month.isCurrentMonth ? '' : '50'"
						class="mb-0"
					>
						{{ month.label }}
					</farm-typography>
				</div>
			</div>
		</div>

		<!-- Gantt Chart Content -->
		<div class="farm-gantt-chart__content">
			<div
				v-for="(group, groupIndex) in groups"
				:key="'group-' + groupIndex"
				class="farm-gantt-chart__group"
			>
				<!-- Group label -->
				<div class="farm-gantt-chart__group-label" v-if="showRowLabels">
					<farm-typography :weight="500">
						{{ group.label }}
					</farm-typography>
				</div>

				<!-- Group timeline with grid and bars -->
				<div class="farm-gantt-chart__group-timeline" :style="timelineGridStyle">
					<!-- Bars positioned using CSS Grid -->
					<div
						v-for="(bar, barIndex) in getPositionedBars(group.bars)"
						:key="'bar-' + barIndex"
						class="farm-gantt-chart__bar"
						:class="[`farm-gantt-chart__bar--${bar.type || 'default'}`]"
						:style="getBarGridStyle(bar)"
						@click="$emit('bar-click', bar)"
					>
						<farm-typography size="md" :weight="500" color="white" class="mb-0" ellipsis>
							{{ bar.label }}
						</farm-typography>
					</div>
				</div>
			</div>
		</div>

		<!-- Legend -->
		<div class="farm-gantt-chart__legend" v-if="showLegend && legendItems.length > 0">
			<div class="farm-gantt-chart__legend-title">
				<farm-typography :weight="500">Legenda:</farm-typography>
			</div>
			<div
				v-for="(item, index) in legendItems"
				:key="'legend-' + index"
				class="farm-gantt-chart__legend-item"
			>
				<div
					class="farm-gantt-chart__legend-color"
					:style="{ backgroundColor: item.color || getBarColor(item.type) }"
				></div>
				<div class="farm-gantt-chart__legend-label">
					<farm-typography size="sm" color="black" color-variation="50">
						{{ item.label }}
					</farm-typography>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue';

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

// Simple date utilities without external dependencies
const getMonthsBetween = (startDate: Date, endDate: Date) => {
	const months = [];
	const current = new Date(startDate.getFullYear(), startDate.getMonth(), 1);
	const end = new Date(endDate.getFullYear(), endDate.getMonth(), 1);

	while (current <= end) {
		months.push(new Date(current));
		current.setMonth(current.getMonth() + 1);
	}

	return months;
};

const formatMonth = (date: Date) => {
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

const isCurrentMonth = (date: Date) => {
	const now = new Date();
	return date.getMonth() === now.getMonth() && date.getFullYear() === now.getFullYear();
};

const getDaysInMonth = (year: number, month: number) => {
	return new Date(year, month + 1, 0).getDate();
};

const getColumnForDate = (date: Date | string, startDate: Date) => {
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

export default defineComponent({
	name: 'farm-gantt-chart',
	props: {
		/**
		 * Array of groups to display in the Gantt chart
		 */
		groups: {
			type: Array as PropType<GanttGroup[]>,
			required: true,
		},
		/**
		 * Start date of the chart
		 */
		startDate: {
			type: Date,
			default: () => new Date(new Date().getFullYear(), 0, 1), // January 1st of current year
		},
		/**
		 * End date of the chart
		 */
		endDate: {
			type: Date,
			default: () => new Date(new Date().getFullYear() + 1, 0, 0), // December 31st of current year
		},
		/**
		 * Whether to show the grid
		 */
		grid: {
			type: Boolean,
			default: true,
		},
		/**
		 * Whether to show row labels
		 */
		showRowLabels: {
			type: Boolean,
			default: true,
		},
		/**
		 * Whether to show the legend
		 */
		showLegend: {
			type: Boolean,
			default: true,
		},
		/**
		 * Legend items
		 */
		legendItems: {
			type: Array as PropType<LegendItem[]>,
			default: () => [],
		},
		/**
		 * Bar types and their colors (using library theme colors blended with white)
		 *
		 * Maps bar types to theme color names from the library.
		 * Available theme colors: 'primary', 'secondary', 'info', 'success', 'warning', 'error',
		 * 'neutral', 'extra-1', 'extra-2', 'gray', 'secondary-green', 'secondary-golden'
		 *
		 * Colors are blended with white background (73% original + 27% white) to match Figma design.
		 * This creates opaque colors that don't show background elements through them.
		 * Example: { myType: 'primary', anotherType: 'warning' }
		 * This will use #8BB455 and #FFB84D respectively (blended colors).
		 *
		 * For custom colors, use the 'color' property directly on bars.
		 */
		barTypes: {
			type: Object as PropType<Record<string, string>>,
			default: () => ({
				campaign: 'info', // Azul blended (#7BC4F7) - Vigência da Campanha
				product: 'primary', // Verde blended (#8BB455) - Vigência do Produto Comercial
				disbursement: 'warning', // Laranja blended (#FFB84D) - Período de Desembolso
				maturity: 'error', // Vermelho blended (#F7857F) - Intervalo Vencimento
				default: 'info', // Default color
			}),
		},
		/**
		 * Whether to show a line indicating today's date
		 */
		showTodayLine: {
			type: Boolean,
			default: true,
		},
		/**
		 * Minimum width for each month column in pixels.
		 */
		minMonthWidth: {
			type: Number,
			default: 80, // Default minimum width of 80px
		},
	},
	emits: ['bar-click'],
	setup(props) {
		// Generate month columns using simple date utilities
		const monthColumns = computed(() => {
			const months = getMonthsBetween(props.startDate, props.endDate);
			return months.map(month => ({
				date: month,
				label: formatMonth(month),
				isCurrentMonth: isCurrentMonth(month),
			}));
		});

		// CSS Grid template for timeline
		const timelineGridStyle = computed(() => ({
			gridTemplateColumns: `repeat(${monthColumns.value.length}, ${props.minMonthWidth}px)`,
		}));

		// Get today's column position
		const todayColumn = computed(() => {
			if (!props.showTodayLine) return -1;
			const today = new Date();
			const column = getColumnForDate(today, props.startDate);
			// Only show if today is within the chart range
			return column >= 0 && column < monthColumns.value.length ? column : -1;
		});

		// Get bar color using library theme colors blended with white (73% opacity effect)
		const getBarColor = (type?: string) => {
			const colorType = type ? (props.barTypes[type] || props.barTypes.default) : props.barTypes.default;

			// Colors blended with white background (73% original + 27% white) - matching Figma approach
			const colorMap: Record<string, string> = {
				'info': '#7BC4F7',      // #2196F3 blended with white at 73%
				'primary': '#8BB455',   // #4F8406 blended with white at 73%
				'warning': '#FFB84D',   // #FF9800 blended with white at 73%
				'error': '#F7857F',     // #F44336 blended with white at 73%
				'success': '#81C784',   // #4CAF50 blended with white at 73%
				'secondary': '#EDD5A3', // #E2C076 blended with white at 73%
				'neutral': '#EEEEEE',   // #E0E0E0 blended with white at 73%
				'extra-1': '#B968C7',   // #8E24AA blended with white at 73%
				'extra-2': '#F2849F',   // #EC407A blended with white at 73%
				'gray': '#ADADAD',      // #858585 blended with white at 73%
				'secondary-green': '#6F7C79', // #3E4E4B blended with white at 73%
				'secondary-golden': '#EDD5A3', // #E2C076 blended with white at 73%
			};

			return colorMap[colorType] || `var(--farm-${colorType}-base)`;
		};

		// Get CSS Grid style for a bar
		const getBarGridStyle = (bar: GanttBar) => {
			const barStartDate = bar.start instanceof Date ? bar.start : new Date(bar.start);
			let barEndDate = bar.end instanceof Date ? bar.end : new Date(bar.end);

			// Validate dates
			if (isNaN(barStartDate.getTime()) || isNaN(barEndDate.getTime())) {
				return {
					gridColumn: '1 / 2',
					backgroundColor: bar.color || getBarColor(bar.type),
					gridRow: `${(bar.rowPosition || 0) + 1}`,
				};
			}

			if (barEndDate < barStartDate) {
				// console.warn('GanttBar end date is before start date. Fixing automatically.');
				barEndDate = new Date(barStartDate.getTime()); // Ensure end is not before start
			}

			const startMonth = barStartDate.getMonth();
			const startYear = barStartDate.getFullYear();
			const startDay = barStartDate.getDate();

			const endMonth = barEndDate.getMonth();
			const endYear = barEndDate.getFullYear();
			const endDay = barEndDate.getDate();

			const daysInStartMonth = getDaysInMonth(startYear, startMonth);
			const daysInEndMonth = getDaysInMonth(endYear, endMonth);

			const startColumnIndex = getColumnForDate(barStartDate, props.startDate);
			const endColumnIndex = getColumnForDate(barEndDate, props.startDate);

			const gridColumnStartValue = Math.max(1, startColumnIndex + 1);
			// +2 because grid-column-end is exclusive. We want the bar to visually end at the end of the endDay.
			const gridColumnEndValue = Math.min(monthColumns.value.length + 1, endColumnIndex + 2);

			const numCssGridColumnsSpanned = gridColumnEndValue - gridColumnStartValue;

			let marginLeftStyle = '0%';
			let widthStyle = '100%';

			// Calculate the actual number of visual months the bar spans
			// This is different from numCssGridColumnsSpanned if the bar starts/ends outside the chart range
			const visualStartCol = getColumnForDate(barStartDate, props.startDate);
			const visualEndCol = getColumnForDate(barEndDate, props.startDate);
			const numVisualMonthsSpanned = visualEndCol - visualStartCol + 1;

			if (numVisualMonthsSpanned === 1) {
				// Bar is within a single month column visually
				const barStartFractionInMonth = (startDay - 1) / daysInStartMonth;
				// Ensure endDay is not greater than daysInStartMonth (e.g. if bar ends next month but visually in this one due to chart bounds)
				const effectiveEndDay = (startYear === endYear && startMonth === endMonth) ? endDay : daysInStartMonth;
				const barEndFractionInMonth = effectiveEndDay / daysInStartMonth;

				marginLeftStyle = `calc(${barStartFractionInMonth * 100}%)`;
				widthStyle = `calc(${(barEndFractionInMonth - barStartFractionInMonth) * 100}%)`;

			} else if (numVisualMonthsSpanned > 1) {
				// Bar spans multiple month columns visually
				const fractionBeforeBarInStartMonth = (startDay - 1) / daysInStartMonth;
				const fractionOfBarInStartMonth = (daysInStartMonth - (startDay - 1)) / daysInStartMonth;
				const fractionOfBarInEndMonth = endDay / daysInEndMonth;

				const numFullIntermediateMonths = Math.max(0, numVisualMonthsSpanned - 2);

				// marginLeft is relative to the total span of the CSS grid columns assigned to the bar.
				// It's the proportion of the first visual column that's empty, scaled by (1 / numCssGridColumnsSpanned).
				if (numCssGridColumnsSpanned > 0) {
					marginLeftStyle = `calc((${fractionBeforeBarInStartMonth} / ${numCssGridColumnsSpanned}) * 100%)`;

					// width is also relative to the total CSS grid span.
					// It's the sum of (fraction of bar in start month + full intermediate months + fraction of bar in end month),
					// scaled by (1 / numCssGridColumnsSpanned).
					const totalEffectiveVisualColumnsOccupiedByBar = fractionOfBarInStartMonth + numFullIntermediateMonths + fractionOfBarInEndMonth;
					widthStyle = `calc((${totalEffectiveVisualColumnsOccupiedByBar} / ${numCssGridColumnsSpanned}) * 100%)`;
				} else {
					// This case should ideally not happen if gridColumnStart/End are calculated correctly
					// but as a fallback, make it take full width of its (likely single) column
					marginLeftStyle = '0%';
					widthStyle = '100%';
				}
			}

			return {
				'grid-column-start': gridColumnStartValue,
				'grid-column-end': gridColumnEndValue,
				'background-color': bar.color || getBarColor(bar.type),
				'grid-row': `${(bar.rowPosition || 0) + 1}`,
				'margin-left': marginLeftStyle,
				'width': widthStyle,
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
				const barStart = isNaN(startDate.getTime()) ? Date.now() : startDate.getTime();
				const barEnd = isNaN(endDate.getTime()) ? Date.now() + 86400000 : endDate.getTime(); // +1 day fallback

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

		// Calculate content height based on groups
		const contentHeight = computed(() => {
			let totalHeight = 0;
			props.groups.forEach(group => {
				const positionedBars = getPositionedBars(group.bars);
				const maxRows = Math.max(
					1,
					...positionedBars.map(bar => (bar.rowPosition || 0) + 1)
				);
				const groupHeight = Math.max(60, maxRows * 35 + 10); // 35px per row + padding
				totalHeight += groupHeight + 20; // 20px margin between groups
			});
			return totalHeight;
		});

		// CSS variables for the component
		const componentStyle = computed(() => ({
			'--gantt-content-height': `${contentHeight.value}px`,
		}));

		return {
			monthColumns,
			timelineGridStyle,
			todayColumn,
			getBarColor,
			getBarGridStyle,
			getPositionedBars,
			componentStyle,
		};
	},
});
</script>

<style lang="scss" scoped>
@import './GanttChart';
</style>
