import Logger from './Logger.vue';

export default {
	title: 'API/Logger',
	component: Logger,
	parameters: {
		docs: {
			description: {
				component: `Logger<br />
				selector: <em>farm-logger</em>
				`,
			},
		},
		viewMode: 'docs',
	},
};

export const Primary = () => ({
	components: { Logger },
	data() {
		return {};
	},
	template: `<Logger>
	
	</Logger>`,
});

Primary.storyName = 'Básico';
