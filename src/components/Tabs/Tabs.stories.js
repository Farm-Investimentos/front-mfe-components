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
