import { withDesign } from 'storybook-addon-designs';
import GanttChart from './GanttChart.vue';

export default {
  title: 'Display/GanttChart',
  component: GanttChart,
  decorators: [withDesign],
  parameters: {
    docs: {
      description: {
        component: `Gantt Chart<br />
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
      // Datas para o exemplo
      startDate: new Date(2025, 0, 1), // 1 de Janeiro de 2025
      endDate: new Date(2026, 0, 1), // 1 de Janeiro de 2026

      // Grupos e barras
      groups: [
        {
          label: 'Campanha Safrinha 25',
          bars: [
            {
              id: 1,
              label: 'Vigência da Campanha',
              start: new Date(2025, 0, 1), // Jan 2025
              end: new Date(2025, 5, 15), // Meados de Jun 2025
              type: 'campaign',
            },
            {
              id: 2,
              label: 'Vigência do Produto Comercial',
              start: new Date(2025, 0, 15), // Jan 2025
              end: new Date(2025, 4, 15), // Meados de Mai 2025
              type: 'product',
            },
            {
              id: 3,
              label: 'Período de Desembolso',
              start: new Date(2025, 2, 1), // Mar 2025
              end: new Date(2025, 4, 30), // Fim de Mai 2025
              type: 'disbursement',
            },
            {
              id: 4,
              label: 'Intervalo Vencimento',
              start: new Date(2025, 3, 1), // Abr 2025
              end: new Date(2025, 4, 15), // Meados de Mai 2025
              type: 'maturity',
            },
          ],
        },
        {
          label: 'Campanha Safra 25',
          bars: [
            {
              id: 5,
              label: 'Vigência da Campanha',
              start: new Date(2025, 4, 1), // Mai 2025
              end: new Date(2025, 11, 31), // Dez 2025
              type: 'campaign',
            },
            {
              id: 6,
              label: 'Vigência do Produto Comercial',
              start: new Date(2025, 4, 15), // Meados de Mai 2025
              end: new Date(2025, 10, 15), // Meados de Nov 2025
              type: 'product',
            },
            {
              id: 7,
              label: 'Período de Desembolso',
              start: new Date(2025, 5, 1), // Jun 2025
              end: new Date(2025, 7, 30), // Fim de Ago 2025
              type: 'disbursement',
            },
            {
              id: 8,
              label: 'Intervalo Vencimento',
              start: new Date(2025, 6, 1), // Jul 2025
              end: new Date(2025, 11, 15), // Meados de Dez 2025
              type: 'maturity',
            },
          ],
        },
      ],

      // Itens da legenda
      legendItems: [
        { label: 'Vigência da Campanha', type: 'campaign' },
        { label: 'Vigência do Produto Comercial', type: 'product' },
        { label: 'Período de Desembolso', type: 'disbursement' },
        { label: 'Intervalo Vencimento', type: 'maturity' },
      ],
    };
  },
  methods: {
    handleBarClick(bar) {
      alert(`Clicou em: ${bar.label}`);
    }
  },
  template: `<div style="width: 100%; height: 400px; padding: 20px;">
    <farm-gantt-chart
      :groups="groups"
      :startDate="startDate"
      :endDate="endDate"
      :legendItems="legendItems"
      @bar-click="handleBarClick"
    />
  </div>`,
});

export const CustomColors = () => ({
  data() {
    return {
      startDate: new Date(2025, 0, 1), // 1 de Janeiro de 2025
      endDate: new Date(2025, 6, 1), // 1 de Julho de 2025

      groups: [
        {
          label: 'Projeto A',
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
          label: 'Projeto B',
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

      legendItems: [
        { label: 'Fase 1 - Projeto A', color: '#8E44AD' },
        { label: 'Fase 2 - Projeto A', color: '#16A085' },
        { label: 'Fase 1 - Projeto B', color: '#D35400' },
        { label: 'Fase 2 - Projeto B', color: '#2980B9' },
      ],
    };
  },
  template: `<div style="width: 100%; height: 300px; padding: 20px;">
    <farm-gantt-chart
      :groups="groups"
      :startDate="startDate"
      :endDate="endDate"
      :legendItems="legendItems"
    />
  </div>`,
});

export const NoGrid = () => ({
  data() {
    return {
      startDate: new Date(2025, 0, 1),
      endDate: new Date(2025, 11, 31),

      groups: [
        {
          label: 'Projeto X',
          bars: [
            {
              id: 1,
              label: 'Planejamento',
              start: new Date(2025, 0, 1),
              end: new Date(2025, 1, 28),
              type: 'campaign',
            },
            {
              id: 2,
              label: 'Execução',
              start: new Date(2025, 2, 1),
              end: new Date(2025, 8, 30),
              type: 'product',
            },
            {
              id: 3,
              label: 'Finalização',
              start: new Date(2025, 9, 1),
              end: new Date(2025, 11, 31),
              type: 'maturity',
            },
          ],
        },
      ],

      legendItems: [
        { label: 'Planejamento', type: 'campaign' },
        { label: 'Execução', type: 'product' },
        { label: 'Finalização', type: 'maturity' },
      ],
    };
  },
  template: `<div style="width: 100%; height: 200px; padding: 20px;">
    <farm-gantt-chart
      :groups="groups"
      :startDate="startDate"
      :endDate="endDate"
      :legendItems="legendItems"
      :grid="false"
    />
  </div>`,
});

export const WithTodayLine = () => ({
  data() {
    return {
      // Usando datas atuais para mostrar a linha de hoje
      startDate: new Date(new Date().getFullYear(), new Date().getMonth() - 1, 1),
      endDate: new Date(new Date().getFullYear(), new Date().getMonth() + 2, 0),

      groups: [
        {
          label: 'Projeto Atual',
          bars: [
            {
              id: 1,
              label: 'Fase Inicial',
              start: new Date(new Date().getFullYear(), new Date().getMonth() - 1, 5),
              end: new Date(new Date().getFullYear(), new Date().getMonth(), 10),
              type: 'campaign',
            },
            {
              id: 2,
              label: 'Fase Intermediária',
              start: new Date(new Date().getFullYear(), new Date().getMonth(), 5),
              end: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 15),
              type: 'product',
            },
            {
              id: 3,
              label: 'Fase Final',
              start: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 10),
              end: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 28),
              type: 'maturity',
            },
          ],
        },
      ],

      legendItems: [
        { label: 'Fase Inicial', type: 'campaign' },
        { label: 'Fase Intermediária', type: 'product' },
        { label: 'Fase Final', type: 'maturity' },
      ],
    };
  },
  template: `<div style="width: 100%; height: 200px; padding: 20px;">
    <farm-gantt-chart
      :groups="groups"
      :startDate="startDate"
      :endDate="endDate"
      :legendItems="legendItems"
      :showTodayLine="true"
    />
  </div>`,
});

export const LibraryThemeColors = () => ({
  data() {
    return {
      startDate: new Date(2025, 0, 1), // 1 de Janeiro de 2025
      endDate: new Date(2025, 11, 31), // 31 de Dezembro de 2025

      groups: [
        {
          label: 'Demonstração das Cores da Biblioteca',
          bars: [
            {
              id: 1,
              label: 'Info (Azul)',
              start: new Date(2025, 0, 1),
              end: new Date(2025, 2, 31),
              type: 'campaign', // Usa cor info
            },
            {
              id: 2,
              label: 'Primary (Verde)',
              start: new Date(2025, 3, 1),
              end: new Date(2025, 5, 30),
              type: 'product', // Usa cor primary
            },
            {
              id: 3,
              label: 'Warning (Laranja)',
              start: new Date(2025, 6, 1),
              end: new Date(2025, 8, 30),
              type: 'disbursement', // Usa cor warning
            },
            {
              id: 4,
              label: 'Error (Vermelho)',
              start: new Date(2025, 9, 1),
              end: new Date(2025, 11, 31),
              type: 'maturity', // Usa cor error
            },
          ],
        },
        {
          label: 'Cores Extras da Biblioteca',
          bars: [
            {
              id: 5,
              label: 'Success (Verde Claro)',
              start: new Date(2025, 1, 1),
              end: new Date(2025, 3, 31),
              color: '#81C784', // Success blended with white
            },
            {
              id: 6,
              label: 'Secondary (Dourado)',
              start: new Date(2025, 4, 1),
              end: new Date(2025, 6, 30),
              color: '#EDD5A3', // Secondary blended with white
            },
            {
              id: 7,
              label: 'Extra-1 (Roxo)',
              start: new Date(2025, 7, 1),
              end: new Date(2025, 9, 30),
              color: '#B968C7', // Extra-1 blended with white
            },
            {
              id: 8,
              label: 'Extra-2 (Rosa)',
              start: new Date(2025, 10, 1),
              end: new Date(2025, 11, 31),
              color: '#F2849F', // Extra-2 blended with white
            },
          ],
        },
      ],

      legendItems: [
        { label: 'Info/Campaign (#2196F3BA - 73% opacity)', type: 'campaign' },
        { label: 'Primary/Product (#4F8406BA - 73% opacity)', type: 'product' },
        { label: 'Warning/Disbursement (#FF9800BA - 73% opacity)', type: 'disbursement' },
        { label: 'Error/Maturity (#F44336BA - 73% opacity)', type: 'maturity' },
        { label: 'Success (#4CAF50BA - 73% opacity)', color: '#4CAF50BA' },
        { label: 'Secondary (#E2C076BA - 73% opacity)', color: '#E2C076BA' },
        { label: 'Extra-1 (#8E24AABA - 73% opacity)', color: '#8E24AABA' },
        { label: 'Extra-2 (#EC407ABA - 73% opacity)', color: '#EC407ABA' },
      ],
    };
  },
  template: `<div style="width: 100%; height: 400px; padding: 20px;">
    <farm-gantt-chart
      :groups="groups"
      :startDate="startDate"
      :endDate="endDate"
      :legendItems="legendItems"
    />
  </div>`,
});

export const CustomBarTypes = () => ({
  data() {
    return {
      startDate: new Date(2025, 0, 1),
      endDate: new Date(2025, 6, 1),

      // Exemplo de como customizar os tipos de barra para usar outras cores da biblioteca
      customBarTypes: {
        planning: 'secondary', // Usa cor secondary (dourado)
        development: 'success', // Usa cor success (verde claro)
        testing: 'extra-1', // Usa cor extra-1 (roxo)
        deployment: 'extra-2', // Usa cor extra-2 (rosa)
        default: 'neutral', // Usa cor neutral como padrão
      },

      groups: [
        {
          label: 'Projeto com Cores Customizadas',
          bars: [
            {
              id: 1,
              label: 'Planejamento',
              start: new Date(2025, 0, 1),
              end: new Date(2025, 1, 15),
              type: 'planning',
            },
            {
              id: 2,
              label: 'Desenvolvimento',
              start: new Date(2025, 1, 1),
              end: new Date(2025, 3, 30),
              type: 'development',
            },
            {
              id: 3,
              label: 'Testes',
              start: new Date(2025, 3, 15),
              end: new Date(2025, 4, 31),
              type: 'testing',
            },
            {
              id: 4,
              label: 'Deploy',
              start: new Date(2025, 5, 1),
              end: new Date(2025, 5, 30),
              type: 'deployment',
            },
          ],
        },
      ],

      legendItems: [
        { label: 'Planejamento', type: 'planning' },
        { label: 'Desenvolvimento', type: 'development' },
        { label: 'Testes', type: 'testing' },
        { label: 'Deploy', type: 'deployment' },
      ],
    };
  },
  template: `<div style="width: 100%; height: 300px; padding: 20px;">
    <farm-gantt-chart
      :groups="groups"
      :startDate="startDate"
      :endDate="endDate"
      :legendItems="legendItems"
      :barTypes="customBarTypes"
    />
  </div>`,
});