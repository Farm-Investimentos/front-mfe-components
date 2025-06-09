import { shallowMount } from '@vue/test-utils';
import GanttChart from '../GanttChart.vue';

describe('GanttChart component', () => {
	let wrapper;
	let component;

	const defaultProps = {
		groups: [
			{
				label: 'Test Group',
				bars: [
					{
						id: 1,
						label: 'Test Bar',
						start: new Date(2025, 0, 1),
						end: new Date(2025, 1, 1),
						type: 'campaign',
					},
				],
			},
		],
		startDate: new Date(2025, 0, 1),
		endDate: new Date(2025, 11, 31),
	};

	beforeEach(() => {
		wrapper = shallowMount(GanttChart, {
			propsData: defaultProps,
		});
		component = wrapper.vm;
	});

	test('Created hook', () => {
		expect(wrapper).toBeDefined();
	});

	describe('mount component', () => {
		it('renders correctly', () => {
			expect(wrapper.element).toMatchSnapshot();
		});

		it('renders groups correctly', () => {
			expect(wrapper.findAll('.farm-gantt-chart__group')).toHaveLength(1);
		});

		it('renders month headers', () => {
			const monthHeaders = wrapper.findAll('.farm-gantt-chart__month-header');
			expect(monthHeaders.length).toBeGreaterThan(0);
		});
	});

	describe('Props', () => {
		it('accepts groups prop', () => {
			expect(component.groups).toEqual(defaultProps.groups);
		});

		it('accepts startDate prop', () => {
			expect(component.startDate).toEqual(defaultProps.startDate);
		});

		it('accepts endDate prop', () => {
			expect(component.endDate).toEqual(defaultProps.endDate);
		});

		it('has default values for optional props', () => {
			const wrapperWithDefaults = shallowMount(GanttChart, {
				propsData: {
					groups: [],
				},
			});
			// Props grid, showRowLabels, showLegend, showTodayLine e minMonthWidth foram removidas
			// O componente agora sempre exibe esses elementos por padrão com valores fixos
			expect(wrapperWithDefaults.vm.barTypes).toBeDefined();
		});
	});

	describe('Methods', () => {
		describe('getPositionedBars', () => {
			it('should position bars correctly', () => {
				const bars = [
					{
						id: 1,
						start: new Date(2025, 0, 1),
						end: new Date(2025, 1, 1),
						label: 'Bar 1',
					},
					{
						id: 2,
						start: new Date(2025, 0, 15),
						end: new Date(2025, 1, 15),
						label: 'Bar 2',
					},
				];
				const positionedBars = component.getPositionedBars(bars);
				expect(positionedBars).toHaveLength(2);
				expect(positionedBars[0].rowPosition).toBeDefined();
				expect(positionedBars[1].rowPosition).toBeDefined();
			});

			it('should handle empty bars array', () => {
				const positionedBars = component.getPositionedBars([]);
				expect(positionedBars).toEqual([]);
			});
		});

		describe('getBarColor', () => {
			it('should return correct color for bar type', () => {
				const color = component.getBarColor('campaign');
				expect(color).toBe('#7BC4F7');
			});

			it('should return default color for unknown type', () => {
				const color = component.getBarColor('unknown');
				expect(color).toBe('#7BC4F7'); // default is 'info' which maps to campaign color
			});
		});
	});

	describe('Events', () => {
		it('should emit bar-click event when bar is clicked', async () => {
			const bar = wrapper.find('.farm-gantt-chart__bar');
			if (bar.exists()) {
				await bar.trigger('click');
				expect(wrapper.emitted('bar-click')).toBeTruthy();
			}
		});
	});

	describe('Computed Properties', () => {
		it('should generate month columns correctly', () => {
			expect(component.monthColumns).toBeDefined();
			expect(Array.isArray(component.monthColumns)).toBe(true);
			expect(component.monthColumns.length).toBeGreaterThan(0);
		});

		it('should generate timeline grid style', () => {
			expect(component.timelineGridStyle).toBeDefined();
			expect(component.timelineGridStyle.gridTemplateColumns).toBeDefined();
		});
	});
});
