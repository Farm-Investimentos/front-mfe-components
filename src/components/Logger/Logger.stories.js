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

		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/XDwOALFs1s9uXPFVE7BP9B/%E2%9C%8D---Cr%C3%A9dito?node-id=4029%3A28672',
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
