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
    template: '<farm-tabs />',
});
