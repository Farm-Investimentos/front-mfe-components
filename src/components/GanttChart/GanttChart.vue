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
						<farm-typography size="sm" :weight="500" color="white">
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
		 * Bar types and their colors
		 */
		barTypes: {
			type: Object as PropType<Record<string, string>>,
			default: () => ({
				campaign: '#5DADE2', // Azul - Vigência da Campanha
				product: '#7AC74F', // Verde - Vigência do Produto Comercial
				disbursement: '#F5B041', // Laranja - Período de Desembolso
				maturity: '#EC7063', // Vermelho - Intervalo Vencimento
				default: '#5DADE2', // Default color
			}),
		},
		/**
		 * Whether to show a line indicating today's date
		 */
		showTodayLine: {
			type: Boolean,
			default: true,
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
			gridTemplateColumns: `repeat(${monthColumns.value.length}, 1fr)`,
		}));

		// Get today's column position
		const todayColumn = computed(() => {
			if (!props.showTodayLine) return -1;
			const today = new Date();
			const column = getColumnForDate(today, props.startDate);
			// Only show if today is within the chart range
			return column >= 0 && column < monthColumns.value.length ? column : -1;
		});

		// Get bar color
		const getBarColor = (type?: string) => {
			if (!type) return props.barTypes.default;
			return props.barTypes[type] || props.barTypes.default;
		};

		// Get CSS Grid style for a bar
		const getBarGridStyle = (bar: GanttBar) => {
			// Ensure we have valid dates
			const startDate = bar.start instanceof Date ? bar.start : new Date(bar.start);
			const endDate = bar.end instanceof Date ? bar.end : new Date(bar.end);

			// Validate dates
			if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
				return {
					gridColumn: '1 / 2',
					backgroundColor: bar.color || getBarColor(bar.type),
					gridRow: `${(bar.rowPosition || 0) + 1}`,
				};
			}

			const startColumn = getColumnForDate(startDate, props.startDate) + 1;
			const endColumn = getColumnForDate(endDate, props.startDate) + 2; // +2 because grid-column-end is exclusive

			return {
				gridColumn: `${Math.max(1, startColumn)} / ${Math.min(
					monthColumns.value.length + 1,
					endColumn
				)}`,
				backgroundColor: bar.color || getBarColor(bar.type),
				gridRow: `${(bar.rowPosition || 0) + 1}`,
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
