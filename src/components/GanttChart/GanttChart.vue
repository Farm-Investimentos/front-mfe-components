<template>
  <div class="farm-gantt-chart">
    <!-- Mês/Ano header -->
    <div class="farm-gantt-chart__header">
      <div class="farm-gantt-chart__header-labels">
        <div class="farm-gantt-chart__row-label-space" v-if="showRowLabels" />
        <div class="farm-gantt-chart__month-labels">
          <div v-for="(month, index) in monthLabels" :key="index" class="farm-gantt-chart__month-label"
            :style="{ width: `${month.width}%` }">
            <farm-typography size="md" :weight="500" :color="month.isCurrentMonth ? 'primary' : 'black'"
              :color-variation="month.isCurrentMonth ? '' : '50'" class="farm-gantt-chart__month-text">
              {{ month.label }}
            </farm-typography>
          </div>
        </div>
      </div>
    </div>

    <!-- Gantt Chart -->
    <div class="farm-gantt-chart__content">
      <!-- Grid lines - Moved outside of groups to span the entire chart -->
      <div class="farm-gantt-chart__grid" v-if="grid">
        <div v-for="(month, index) in monthLabels" :key="'grid-' + index" class="farm-gantt-chart__grid-line"
          :style="{ left: `${month.position}%` }"></div>

        <!-- Today line -->
        <div v-if="showTodayLine" class="farm-gantt-chart__today-line" :style="{ left: `${getTodayPosition()}%` }">
        </div>
      </div>

      <div v-for="(group, groupIndex) in groups" :key="'group-' + groupIndex" class="farm-gantt-chart__group"
        :style="{ minHeight: getGroupHeight(group.bars) + 'px' }">
        <!-- Group label -->
        <div class="farm-gantt-chart__group-label" v-if="showRowLabels">
          <farm-typography :weight="500">
            {{ group.label }}
          </farm-typography>
        </div>

        <!-- Group content -->
        <div class="farm-gantt-chart__group-content">
          <!-- Bars -->
          <div v-for="(bar, barIndex) in getPositionedBars(group.bars)" :key="'bar-' + barIndex"
            class="farm-gantt-chart__bar" :class="[`farm-gantt-chart__bar--${bar.type || 'default'}`]" :style="{
              left: `${getBarPosition(bar.start)}%`,
              width: `${getBarWidth(bar.start, bar.end)}%`,
              backgroundColor: bar.color || getBarColor(bar.type),
              top: `${5 + (bar.rowPosition * 35)}px`
            }" @click="$emit('bar-click', bar)">
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
      <div v-for="(item, index) in legendItems" :key="'legend-' + index" class="farm-gantt-chart__legend-item">
        <div class="farm-gantt-chart__legend-color" :style="{ backgroundColor: item.color || getBarColor(item.type) }">
        </div>
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
import moment from 'moment';
import 'moment/locale/pt-br';

export interface GanttBar {
  id: string | number;
  start: Date;
  end: Date;
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
        'campaign': '#5DADE2', // Azul - Vigência da Campanha
        'product': '#7AC74F', // Verde - Vigência do Produto Comercial
        'disbursement': '#F5B041', // Laranja - Período de Desembolso
        'maturity': '#EC7063', // Vermelho - Intervalo Vencimento
        'default': '#5DADE2', // Default color
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
    // Configurar o Moment.js para usar o idioma português do Brasil
    moment.locale('pt-br');

    // Calculate month labels between start and end dates
    const monthLabels = computed(() => {
      const start = moment(props.startDate);
      const end = moment(props.endDate);
      const totalDays = end.diff(start, 'days');
      const months = [];

      let currentDate = moment(start);
      let position = 0;

      while (currentDate.isSameOrBefore(end)) {
        const monthEnd = moment(currentDate).endOf('month');

        // Adjust end date if it exceeds the chart end date
        const adjustedEnd = monthEnd.isAfter(end) ? end : monthEnd;

        // Calculate width as percentage of total duration
        const monthDays = adjustedEnd.diff(currentDate, 'days') + 1;
        const width = (monthDays / totalDays) * 100;

        // Check if this is the current month
        const now = moment();
        const isCurrentMonth = currentDate.month() === now.month() && currentDate.year() === now.year();

        // Formatar o mês no padrão brasileiro (primeira letra maiúscula)
        const monthStr = currentDate.format('MMM').charAt(0).toUpperCase() + currentDate.format('MMM').slice(1);

        months.push({
          label: `${monthStr}/${currentDate.format('YYYY')}`,
          position, // Posição da linha de grade (alinhada à esquerda do label)
          width,
          isCurrentMonth
        });

        position += width;
        currentDate = monthEnd.add(1, 'day');
      }

      return months;
    });

    // Calculate bar position as percentage from start date
    const getBarPosition = (barStart: Date) => {
      const start = moment(props.startDate);
      const end = moment(props.endDate);
      const barStartMoment = moment(barStart);

      // Ensure bar start is within chart range
      if (barStartMoment.isBefore(start)) {
        return 0;
      }

      const totalDays = end.diff(start, 'days');
      const daysFromStart = barStartMoment.diff(start, 'days');

      return (daysFromStart / totalDays) * 100;
    };

    // Calculate bar width as percentage of total duration
    const getBarWidth = (barStart: Date, barEnd: Date) => {
      const start = moment(props.startDate);
      const end = moment(props.endDate);
      const totalDays = end.diff(start, 'days');

      const barStartMoment = moment(barStart);
      const barEndMoment = moment(barEnd);

      // Ensure dates are within chart range
      const adjustedStart = barStartMoment.isBefore(start) ? start : barStartMoment;
      const adjustedEnd = barEndMoment.isAfter(end) ? end : barEndMoment;

      const barDuration = adjustedEnd.diff(adjustedStart, 'days') + 1;

      return (barDuration / totalDays) * 100;
    };

    // Get color for bar type
    const getBarColor = (type?: string) => {
      if (!type) return props.barTypes.default;
      return props.barTypes[type] || props.barTypes.default;
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
        const barStart = new Date(bar.start).getTime();
        const barEnd = new Date(bar.end).getTime();

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

    // Calculate the height needed for a group based on the number of rows of bars
    const getGroupHeight = (bars: GanttBar[]) => {
      if (!bars || bars.length === 0) return 40; // Default height

      // Get the positioned bars
      const positionedBars = getPositionedBars(bars);

      // Find the maximum row position
      let maxRowPosition = 0;
      positionedBars.forEach((bar: GanttBar) => {
        if (bar.rowPosition > maxRowPosition) {
          maxRowPosition = bar.rowPosition;
        }
      });

      // Calculate height: base padding (10px) + (number of rows * row height) + bottom padding (10px)
      return 10 + ((maxRowPosition + 1) * 35) + 10;
    };

    // Calculate the position of today's date as a percentage
    const getTodayPosition = () => {
      const start = moment(props.startDate);
      const end = moment(props.endDate);
      const today = moment();

      // If today is outside the chart range, return -1 (will not be visible)
      if (today.isBefore(start) || today.isAfter(end)) {
        return -1;
      }

      const totalDays = end.diff(start, 'days');
      const daysFromStart = today.diff(start, 'days');

      return (daysFromStart / totalDays) * 100;
    };

    return {
      monthLabels,
      getBarPosition,
      getBarWidth,
      getBarColor,
      getPositionedBars,
      getGroupHeight,
      getTodayPosition,
    };
  },
});
</script>

<style lang="scss" scoped>
@import './GanttChart';
</style>
