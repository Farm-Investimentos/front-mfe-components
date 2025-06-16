import { withDesign } from 'storybook-addon-designs';
import GanttChart from './GanttChart.vue';

export default {
  title: 'Display/GanttChart',
  component: GanttChart,
  decorators: [withDesign],
  parameters: {
    docs: {
      description: {
        component: `Gantt Chart - Componente para visualização de cronogramas com cálculo automático de datas e legenda<br />
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
              },
              {
                id: 2,
                label: 'Vigência do Produto Comercial',
                start: new Date(2025, 0, 15),
                end: new Date(2025, 4, 15),
                color: '#8BB455',
              },
              {
                id: 3,
                label: 'Período de Desembolso',
                start: new Date(2025, 2, 1),
                end: new Date(2025, 4, 30),
                color: '#FFB84D',
              },
              {
                id: 4,
                label: 'Intervalo Vencimento',
                start: new Date(2025, 3, 1),
                end: new Date(2025, 4, 15),
                color: '#F7857F',
              },
            ],
          },
          {
            title: 'Campanha Safra 25',
            bars: [
              {
                id: 5,
                label: 'Vigência da Campanha',
                start: new Date(2025, 4, 1),
                end: new Date(2025, 11, 31),
                color: '#7BC4F7',
              },
              {
                id: 6,
                label: 'Vigência do Produto Comercial',
                start: new Date(2025, 4, 15),
                end: new Date(2025, 10, 15),
                color: '#8BB455',
              },
              {
                id: 7,
                label: 'Período de Desembolso',
                start: new Date(2025, 5, 1),
                end: new Date(2025, 7, 30),
                color: '#FFB84D',
              },
              {
                id: 8,
                label: 'Intervalo Vencimento',
                start: new Date(2025, 6, 1),
                end: new Date(2025, 11, 15),
                color: '#F7857F',
              },
            ],
          },
        ],
      },
    };
  },
  template: `<div style="width: 100%; height: 600px; padding: 20px;">
    <farm-gantt-chart :data="ganttData" />
  </div>`,
});

export const SingleGroup = () => ({
  data() {
    return {
      ganttData: {
        groups: [
          {
            title: 'Projeto de Desenvolvimento de Novos Módulos e Integrações do Sistema',
            bars: [
              {
                id: 1,
                label: 'Planejamento',
                start: new Date(2025, 0, 1),
                end: new Date(2025, 1, 28),
                color: '#7BC4F7',
              },
              {
                id: 2,
                label: 'Desenvolvimento',
                start: new Date(2025, 2, 1),
                end: new Date(2025, 7, 31),
                color: '#8BB455',
              },
              {
                id: 3,
                label: 'Testes',
                start: new Date(2025, 7, 1),
                end: new Date(2025, 8, 30),
                color: '#FFB84D',
              },
              {
                id: 4,
                label: 'Deploy',
                start: new Date(2025, 9, 1),
                end: new Date(2025, 9, 15),
                color: '#F7857F',
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

export const MultipleProjects = () => ({
  data() {
    return {
      ganttData: {
        groups: [
          {
            title: 'Frontend',
            bars: [
              {
                id: 'fe-1',
                label: 'Design UI/UX',
                start: new Date(2025, 0, 1),
                end: new Date(2025, 1, 15),
                color: '#8E44AD',
              },
              {
                id: 'fe-2',
                label: 'Desenvolvimento',
                start: new Date(2025, 1, 1),
                end: new Date(2025, 3, 30),
                color: '#16A085',
              },
              {
                id: 'fe-3',
                label: 'Testes Integração',
                start: new Date(2025, 3, 15),
                end: new Date(2025, 4, 30),
                color: '#D35400',
              },
            ],
          },
          {
            title: 'Backend',
            bars: [
              {
                id: 'be-1',
                label: 'Design API',
                start: new Date(2025, 0, 15),
                end: new Date(2025, 2, 1),
                color: '#2980B9',
              },
              {
                id: 'be-2',
                label: 'Setup Banco',
                start: new Date(2025, 1, 15),
                end: new Date(2025, 2, 30),
                color: '#8E44AD',
              },
              {
                id: 'be-3',
                label: 'Implementação',
                start: new Date(2025, 2, 15),
                end: new Date(2025, 4, 15),
                color: '#16A085',
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

export const WithStructuredTooltip = () => ({
  data() {
    return {
      ganttData: {
        groups: [
          {
            title: 'Campanha com Dados Detalhados',
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
                  'Vigência': '15/01/2025 a 15/05/2025',
                  'Status': 'Aprovado'
                }
              }
            ]
          }
        ]
      }
    };
  },
  template: `<div style="width: 100%; height: 400px; padding: 20px;">
    <farm-gantt-chart :data="ganttData" />
  </div>`,
});

export const WithCustomTooltip = () => ({
  data() {
    return {
      ganttData: {
        groups: [
          {
            title: 'Projeto Customizado',
            bars: [
              {
                id: 1,
                label: 'Fase Complexa',
                start: new Date(2025, 0, 1),
                end: new Date(2025, 3, 15),
                color: '#8BB455',
                tooltipData: {
                  'Orçamento': 'R$ 125.000',
                  'Equipe': '8 pessoas'
                },
                gerente: 'João Silva',
                nivelRisco: 'Médio',
                progresso: 0.65
              },
              {
                id: 2,
                label: 'Campanha Marketing',
                start: new Date(2025, 1, 15),
                end: new Date(2025, 4, 30),
                color: '#FFB84D',
                tooltipData: {
                  'Investimento': 'R$ 85.000',
                  'Público-alvo': '25-45 anos'
                },
                gerente: 'Maria Santos',
                nivelRisco: 'Baixo',
                progresso: 0.45
              }
            ]
          }
        ]
      }
    };
  },
  methods: {
    formatarProgresso(taxa) {
      return `${Math.round(taxa * 100)}%`;
    }
  },
  template: `<div style="width: 100%; height: 400px; padding: 20px;">
    <farm-gantt-chart :data="ganttData">
      <template #tooltip="{ bar, tooltipData }">
        <div style="padding: 12px; color: white;">
          <div style="display: flex; align-items: center; margin-bottom: 8px;">
            <strong>{{ bar.label }}</strong>
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
          
          <div style="border-top: 1px solid rgba(255,255,255,0.2); padding-top: 8px;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
              <span style="opacity: 0.9;">Gerente:</span>
              <span style="font-weight: 600;">{{ bar.gerente }}</span>
            </div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
              <span style="opacity: 0.9;">Risco:</span>
              <span style="font-weight: 600; color: #FFB84D;">{{ bar.nivelRisco }}</span>
            </div>
            <div style="display: flex; justify-content: space-between;">
              <span style="opacity: 0.9;">Progresso:</span>
              <span style="font-weight: 600; color: #8BB455;">{{ formatarProgresso(bar.progresso) }}</span>
            </div>
          </div>
        </div>
      </template>
    </farm-gantt-chart>
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
                color: '#8E44AD',
              },
              {
                id: 2,
                label: 'Fase 2',
                start: new Date(2025, 2, 1),
                end: new Date(2025, 4, 1),
                color: '#16A085',
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
                color: '#D35400',
              },
              {
                id: 4,
                label: 'Fase 2',
                start: new Date(2025, 3, 15),
                end: new Date(2025, 5, 15),
                color: '#2980B9',
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

export const ColorFallback = () => ({
  data() {
    return {
      ganttData: {
        groups: [
          {
            title: 'Projeto com Cores Faltantes',
            bars: [
              {
                id: 1,
                label: 'Barra com Cor',
                start: new Date(2025, 0, 1),
                end: new Date(2025, 1, 15),
                color: '#8BB455',
              },
              {
                id: 2,
                label: 'Barra sem Cor (Fallback)',
                start: new Date(2025, 1, 1),
                end: new Date(2025, 2, 15),
                // Sem propriedade color - deve usar var(--farm-primary-base)
              },
              {
                id: 3,
                label: 'Outra Barra com Cor',
                start: new Date(2025, 2, 1),
                end: new Date(2025, 3, 15),
                color: '#FFB84D',
              },
            ],
          },
        ],
      },
    };
  },
  template: `<div style="width: 100%; height: 300px; padding: 20px;">
    <h3>Fallback de Cor</h3>
    <p>A segunda barra não possui cor definida e usa o fallback <code>var(--farm-primary-base)</code></p>
    <farm-gantt-chart :data="ganttData" />
  </div>`,
});

export const InvertedDates = () => ({
  data() {
    return {
      ganttData: {
        groups: [
          {
            title: 'Teste de Datas Invertidas',
            bars: [
              {
                id: 1,
                label: 'Data Normal (Jan-Mar)',
                start: new Date(2025, 0, 1),
                end: new Date(2025, 2, 15),
                color: '#8BB455',
              },
              {
                id: 2,
                label: 'Data Invertida → Corrigida (Abr-Abr)',
                start: new Date(2025, 3, 15), // 15 de abril
                end: new Date(2025, 2, 15),   // 15 de março (será corrigido para mesmo dia de início: 15 de abril)
                color: '#F7857F',
              },
              {
                id: 3,
                label: 'Data Normal de Referência (Mai-Jun)',
                start: new Date(2025, 4, 1),
                end: new Date(2025, 5, 15),
                color: '#7BC4F7',
              },
            ],
          },
        ],
      },
    };
  },
  template: `<div style="width: 100%; height: 300px; padding: 20px;">
    <h3>Correção de Datas Invertidas</h3>
    <p><strong>Comportamento:</strong> Quando a data de fim é anterior à data de início, ela é automaticamente corrigida para ser igual à data de início.</p>
    <p><strong>Exemplo:</strong> A segunda barra deveria ir de 15/abril a 15/março, mas aparece apenas em 15/abril (data corrigida).</p>
    <farm-gantt-chart :data="ganttData" />
  </div>`,
});