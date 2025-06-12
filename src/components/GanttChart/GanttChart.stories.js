import { withDesign } from 'storybook-addon-designs';
import GanttChart from './GanttChart.vue';

export default {
  title: 'Display/GanttChart',
  component: GanttChart,
  decorators: [withDesign],
  parameters: {
    docs: {
      description: {
        component: `Gantt Chart - Componente com API simplificada que calcula automaticamente datas e legenda<br />
        selector: <em>farm-gantt-chart</em><br />
        <span style="color: var(--farm-primary-base);">ready for use</span>
        `,
      },
    },
    viewMode: 'docs',
  },
};

export const Primary = () => ({
  data() {
    return {
      // Nova API simplificada - apenas os dados essenciais
      ganttData: {
        groups: [
          {
            title: 'Campanha Safrinha 25',
            bars: [
              {
                id: 1,
                label: 'Vigência da Campanha',
                start: new Date(2025, 0, 1), // Jan 2025
                end: new Date(2025, 5, 15), // Meados de Jun 2025
                color: '#7BC4F7', // Azul - cor direta
              },
              {
                id: 2,
                label: 'Vigência do Produto Comercial',
                start: new Date(2025, 0, 15), // Jan 2025
                end: new Date(2025, 4, 15), // Meados de Mai 2025
                color: '#8BB455', // Verde - cor direta
              },
              {
                id: 3,
                label: 'Período de Desembolso',
                start: new Date(2025, 2, 1), // Mar 2025
                end: new Date(2025, 4, 30), // Fim de Mai 2025
                color: '#FFB84D', // Laranja - cor direta
              },
              {
                id: 4,
                label: 'Intervalo Vencimento',
                start: new Date(2025, 3, 1), // Abr 2025
                end: new Date(2025, 4, 15), // Meados de Mai 2025
                color: '#F7857F', // Vermelho - cor direta
              },
            ],
          },
          {
            title: 'Campanha Safra 25',
            bars: [
              {
                id: 5,
                label: 'Vigência da Campanha',
                start: new Date(2025, 4, 1), // Mai 2025
                end: new Date(2025, 11, 31), // Dez 2025
                color: '#7BC4F7', // Azul - cor direta
              },
              {
                id: 6,
                label: 'Vigência do Produto Comercial',
                start: new Date(2025, 4, 15), // Meados de Mai 2025
                end: new Date(2025, 10, 15), // Meados de Nov 2025
                color: '#8BB455', // Verde - cor direta
              },
              {
                id: 7,
                label: 'Período de Desembolso',
                start: new Date(2025, 5, 1), // Jun 2025
                end: new Date(2025, 7, 30), // Fim de Ago 2025
                color: '#FFB84D', // Laranja - cor direta
              },
              {
                id: 8,
                label: 'Intervalo Vencimento',
                start: new Date(2025, 6, 1), // Jul 2025
                end: new Date(2025, 11, 15), // Meados de Dez 2025
                color: '#F7857F', // Vermelho - cor direta
              },
            ],
          },
        ],
      },
    };
  },
  methods: {
    handleBarClick(bar) {
      alert(`Clicou em: ${bar.label}`);
    }
  },
  template: `<div style="width: 100%; height: 600px; padding: 20px;">
    <farm-gantt-chart
      :data="ganttData"
      @bar-click="handleBarClick"
    />
  </div>`,
});

export const CustomColors = () => ({
  data() {
    return {
      ganttData: {
        groups: [
          {
            title: 'Projeto A',
            bars: [
              {
                id: 1,
                label: 'Fase 1',
                start: new Date(2025, 0, 15),
                end: new Date(2025, 2, 15),
                color: '#8E44AD', // Roxo personalizado
              },
              {
                id: 2,
                label: 'Fase 2',
                start: new Date(2025, 2, 1),
                end: new Date(2025, 4, 1),
                color: '#16A085', // Verde personalizado
              },
            ],
          },
          {
            title: 'Projeto B',
            bars: [
              {
                id: 3,
                label: 'Fase 1',
                start: new Date(2025, 1, 1),
                end: new Date(2025, 3, 1),
                color: '#D35400', // Laranja personalizado
              },
              {
                id: 4,
                label: 'Fase 2',
                start: new Date(2025, 3, 15),
                end: new Date(2025, 5, 15),
                color: '#2980B9', // Azul personalizado
              },
            ],
          },
        ],
      },
    };
  },
  template: `<div style="width: 100%; height: 300px; padding: 20px;">
    <farm-gantt-chart :data="ganttData" />
  </div>`,
});

export const MinimalSetup = () => ({
  data() {
    return {
      ganttData: {
        groups: [
          {
            title: 'Projeto X',
            bars: [
              {
                id: 1,
                label: 'Planejamento',
                start: new Date(2025, 0, 1),
                end: new Date(2025, 1, 28),
                color: '#7BC4F7', // Azul
              },
              {
                id: 2,
                label: 'Execução',
                start: new Date(2025, 2, 1),
                end: new Date(2025, 8, 30),
                color: '#8BB455', // Verde
              },
              {
                id: 3,
                label: 'Finalização',
                start: new Date(2025, 9, 1),
                end: new Date(2025, 11, 31),
                color: '#F7857F', // Vermelho
              },
            ],
          },
        ],
      },
    };
  },
  template: `<div style="width: 100%; height: 200px; padding: 20px;">
    <farm-gantt-chart :data="ganttData" />
  </div>`,
});

export const CurrentTimelineExample = () => ({
  data() {
    return {
      ganttData: {
        groups: [
          {
            title: 'Projeto Atual',
            bars: [
              {
                id: 1,
                label: 'Fase Inicial',
                start: new Date(new Date().getFullYear(), new Date().getMonth() - 1, 5),
                end: new Date(new Date().getFullYear(), new Date().getMonth(), 10),
                color: '#7BC4F7', // Azul
              },
              {
                id: 2,
                label: 'Fase Intermediária',
                start: new Date(new Date().getFullYear(), new Date().getMonth(), 5),
                end: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 15),
                color: '#8BB455', // Verde
              },
              {
                id: 3,
                label: 'Fase Final',
                start: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 10),
                end: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 28),
                color: '#F7857F', // Vermelho
              },
            ],
          },
        ],
      },
    };
  },
  template: `<div style="width: 100%; height: 200px; padding: 20px;">
    <farm-gantt-chart :data="ganttData" />
  </div>`,
});

export const LibraryThemeColors = () => ({
  data() {
    return {
      ganttData: {
        groups: [
          {
            title: 'Demonstração das Cores da Biblioteca',
            bars: [
              {
                id: 1,
                label: 'Info (Azul)',
                start: new Date(2025, 0, 1),
                end: new Date(2025, 2, 31),
                color: '#7BC4F7', // Info
              },
              {
                id: 2,
                label: 'Primary (Verde)',
                start: new Date(2025, 3, 1),
                end: new Date(2025, 5, 30),
                color: '#8BB455', // Primary
              },
              {
                id: 3,
                label: 'Warning (Laranja)',
                start: new Date(2025, 6, 1),
                end: new Date(2025, 8, 30),
                color: '#FFB84D', // Warning
              },
              {
                id: 4,
                label: 'Error (Vermelho)',
                start: new Date(2025, 9, 1),
                end: new Date(2025, 11, 31),
                color: '#F7857F', // Error
              },
            ],
          },
          {
            title: 'Cores Extras da Biblioteca',
            bars: [
              {
                id: 5,
                label: 'Success (Verde Claro)',
                start: new Date(2025, 1, 1),
                end: new Date(2025, 3, 31),
                color: '#81C784', // Success
              },
              {
                id: 6,
                label: 'Secondary (Dourado)',
                start: new Date(2025, 4, 1),
                end: new Date(2025, 6, 30),
                color: '#EDD5A3', // Secondary
              },
              {
                id: 7,
                label: 'Extra-1 (Roxo)',
                start: new Date(2025, 7, 1),
                end: new Date(2025, 9, 30),
                color: '#B968C7', // Extra-1
              },
              {
                id: 8,
                label: 'Extra-2 (Rosa)',
                start: new Date(2025, 10, 1),
                end: new Date(2025, 11, 31),
                color: '#F2849F', // Extra-2
              },
            ],
          },
        ],
      },
    };
  },
  template: `<div style="width: 100%; height: 400px; padding: 20px;">
    <farm-gantt-chart :data="ganttData" />
  </div>`,
});

export const AutomaticFeatures = () => ({
  data() {
    return {
      ganttData: {
        groups: [
          {
            title: 'Projeto com Cálculos Automáticos',
            bars: [
              {
                id: 1,
                label: 'Design',
                start: new Date(2025, 0, 1),
                end: new Date(2025, 1, 15),
                color: '#8E44AD', // Roxo
              },
              {
                id: 2,
                label: 'Desenvolvimento Frontend',
                start: new Date(2025, 1, 1),
                end: new Date(2025, 3, 30),
                color: '#16A085', // Verde escuro
              },
              {
                id: 3,
                label: 'Desenvolvimento Backend',
                start: new Date(2025, 2, 15),
                end: new Date(2025, 4, 31),
                color: '#D35400', // Laranja
              },
              {
                id: 4,
                label: 'Testes',
                start: new Date(2025, 4, 15),
                end: new Date(2025, 5, 30),
                color: '#2980B9', // Azul
              },
              {
                id: 5,
                label: 'Deploy',
                start: new Date(2025, 6, 1),
                end: new Date(2025, 6, 15),
                color: '#E74C3C', // Vermelho
              },
            ],
          },
        ],
      },
    };
  },
  template: `<div style="width: 100%; height: 300px; padding: 20px;">
    <h3>API Simplificada - Demonstração</h3>
    <p>✅ <strong>Datas calculadas automaticamente:</strong> Janeiro 2025 até Junho 2025 (baseado nas barras)</p>
    <p>✅ <strong>Legenda gerada automaticamente:</strong> baseada nas cores e labels únicos</p>
    <p>✅ <strong>Zero configuração manual:</strong> apenas dados essenciais</p>
    <farm-gantt-chart :data="ganttData" />
  </div>`,
});

// NEW: Story demonstrating structured tooltipData approach
export const WithTooltipData = () => ({
  data() {
    return {
      ganttData: {
        groups: [
          {
            title: 'Campanha Safrinha 25',
            bars: [
              {
                id: 1,
                label: 'Vigência da Campanha',
                start: new Date(2025, 0, 1),
                end: new Date(2025, 5, 15),
                color: '#7BC4F7',
                tooltipData: {
                  'Taxa': '1,75%',
                  'Vigência Campanha': '01/01/2025 a 15/06/2025',
                  'Vigência Produto Comercial': '15/01/2025 a 15/05/2025',
                  'Desembolso Operação': '01/03/2025 a 30/05/2025',
                  'Vencimento': '01/04/2025 a 15/05/2025'
                }
              },
              {
                id: 2,
                label: 'Produto Comercial',
                start: new Date(2025, 0, 15),
                end: new Date(2025, 4, 15),
                color: '#8BB455',
                tooltipData: {
                  'Taxa': '2,25%',
                  'Vigência Campanha': '15/01/2025 a 15/05/2025',
                  'Status': 'Aprovado'
                }
              }
            ]
          }
        ]
      }
    };
  },
  template: `
    <div style="width: 100%; height: 400px; padding: 20px;">
      <h3>Tooltip with Structured Data</h3>
      <p>✨ Hover over the bars to see structured key-value tooltips</p>
      <farm-gantt-chart :data="ganttData" />
    </div>
  `,
});

// NEW: Story demonstrating custom slot approach
export const WithCustomTooltip = () => ({
  data() {
    return {
      ganttData: {
        groups: [
          {
            title: 'Custom Tooltip Demo',
            bars: [
              {
                id: 1,
                label: 'Complex Project Phase',
                start: new Date(2025, 0, 1),
                end: new Date(2025, 3, 15),
                color: '#8BB455',
                tooltipData: {
                  'Budget': '$125,000',
                  'Team Size': '8 people'
                },
                manager: 'João Silva',
                riskLevel: 'Medium',
                completionRate: 0.65
              },
              {
                id: 2,
                label: 'Marketing Campaign',
                start: new Date(2025, 1, 15),
                end: new Date(2025, 4, 30),
                color: '#FFB84D',
                tooltipData: {
                  'Investment': '$85,000',
                  'Target Audience': '25-45 years'
                },
                manager: 'Maria Santos',
                riskLevel: 'Low',
                completionRate: 0.45
              }
            ]
          }
        ]
      }
    };
  },
  methods: {
    formatProgress(rate) {
      return `${Math.round(rate * 100)}%`;
    }
  },
  template: `
    <div style="width: 100%; height: 400px; padding: 20px;">
      <h3>Custom Slot Tooltip</h3>
      <p>🎨 Hover over the bars to see custom styled tooltips with additional data</p>
      <farm-gantt-chart :data="ganttData">
        <template #tooltip="{ bar, tooltipData }">
          <div style="padding: 12px;">
            <div style="display: flex; align-items: center; margin-bottom: 8px;">
              <strong style="color: white;">{{ bar.label }}</strong>
              <span style="margin-left: auto; background: rgba(255,255,255,0.2); padding: 2px 6px; border-radius: 10px; font-size: 11px;">
                ID: {{ bar.id }}
              </span>
            </div>
            
            <div v-if="tooltipData" style="margin-bottom: 8px;">
              <div v-for="(value, key) in tooltipData" :key="key" style="display: flex; justify-content: space-between; margin-bottom: 4px;">
                <span style="opacity: 0.9;">{{ key }}:</span>
                <span style="font-weight: 600;">{{ value }}</span>
              </div>
            </div>
            
            <div style="border-top: 1px solid rgba(255,255,255,0.2); padding-top: 8px; margin-top: 8px;">
              <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
                <span style="opacity: 0.9;">Manager:</span>
                <span style="font-weight: 600;">{{ bar.manager }}</span>
              </div>
              <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
                <span style="opacity: 0.9;">Risk Level:</span>
                <span style="font-weight: 600; color: #FFB84D;">{{ bar.riskLevel }}</span>
              </div>
              <div style="display: flex; justify-content: space-between;">
                <span style="opacity: 0.9;">Progress:</span>
                <span style="font-weight: 600; color: #8BB455;">{{ formatProgress(bar.completionRate) }}</span>
              </div>
            </div>
          </div>
        </template>
      </farm-gantt-chart>
    </div>
  `,
});