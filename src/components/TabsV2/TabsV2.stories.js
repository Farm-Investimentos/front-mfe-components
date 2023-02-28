import Tabs from './TabsV2.vue';

export default {
	title: 'Display/TabsV2',
	component: Tabs,
	parameters: {
		docs: {
			description: {
				component: `Tabs<br />
				selector: <em>farm-tabs-v2</em><br />
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
				<farm-tabs-v2 @update="updateValue" /> 
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
				<farm-tabs-v2 :showCounter="false" @update="updateValue" /> 
				<p class="mt-2">selected: {{v}}</p>
			</div>`,
});
