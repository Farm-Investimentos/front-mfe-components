import Tabs from './Tabs.vue';

export default {
	title: 'Display/Tabs',
	component: Tabs,
	parameters: {
		docs: {
			description: {
				component: `Tabs<br />
				selector: <em>farm-tabs</em><br />
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
			v: 'Seleção',
		};
	},
	methods: {
		updateValue(value) {
			this.v = value.name;
		},
	},
	template: `<div>
				<farm-tabs @update="updateValue" /> 
				<p class="mt-2">selected: {{v}}</p>
			</div>`,
});

export const WithoutCounter = () => ({
	data() {
		return {
			v: 'Seleção',
		};
	},
	methods: {
		updateValue(value) {
			this.v = value.name;
		},
	},
	template: `<div>
				<farm-tabs :showCounter="false" @update="updateValue" /> 
				<p class="mt-2">selected: {{v}}</p>
			</div>`,
});

export const Disabled = () => ({
	data() {
		return {
			v: 'Seleção',
		};
	},
	methods: {
		updateValue(value) {
			this.v = value.name;
		},
	},
	template: `<div>
				<farm-tabs :showCounter="false" :allow-user-change="false" @update="updateValue" /> 
				<p class="mt-2">selected: {{v}}</p>
			</div>`,
});


export const TabScroll = () => ({
	data() {
		return {
			v: 'TESTE NOME GRANDE',
			tabs: [
				{name: 'TESTE NOME GRANDE', counter: 10, path: 'selecao'},
				{name: 'Opções', counter: 5, path: 'opcoes'},
				{name: 'Configurações', counter: 2, path: 'configuracoes'},
				{name: 'Detalhes', counter: 8, path: 'detalhes'},
				{name: 'Avançado', counter: 1, path: 'avancado'},
				{name: 'Extras', counter: 0, path: 'extras'},
				{name: 'Personalizado', counter: 4, path: 'personalizado'},
				{name: 'Final', counter: 3, path: 'final'},
				{name: 'Resumo', counter: 6, path: 'resumo'},
			],
		};
	},
	methods: {
		updateValue(value) {
			this.v = value.name;
		},
	},
	template: `<div>
				<farm-tabs :tabs="tabs" :showCounter="true" @update="updateValue" />
				<div class="mt-4 pa-4" style="background-color: #f5f5f5; border-radius: 8px;">
					<h3>Conteúdo da Tab: {{v}}</h3>
					<p class="mt-2">Este é o conteúdo da tab selecionada.</p>
				</div>
			</div>`,
});

export const WithNotification = () => ({
	data() {
		return {
			v: 'Dados Gerais',
			tabs: [
				{name: 'Dados Gerais', path: 'dados', notification: false},
				{name: 'Beneficiários', path: 'beneficiarios', notification: true},
				{name: 'Documentos', path: 'documentos', notification: true},
				{name: 'Revisão', path: 'revisao', notification: false},
			],
		};
	},
	methods: {
		updateValue(value) {
			this.v = value.name;
		},
	},
	template: `<div>
				<farm-tabs :tabs="tabs" :showCounter="false" @update="updateValue" />
				<div class="mt-4 pa-4" style="background-color: #f5f5f5; border-radius: 8px;">
					<h3>Conteúdo da Tab: {{v}}</h3>
					<p class="mt-2">As tabs "Beneficiários" e "Documentos" possuem notificação (bullet laranja) indicando que precisam ser salvas.</p>
				</div>
			</div>`,
});