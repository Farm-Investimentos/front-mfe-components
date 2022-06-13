import LoggerItem from './LoggerItem.vue';

export default {
	title: 'API/Logger/LoggerItem',
	component: LoggerItem,
	parameters: {
		docs: {
			description: {
				component: `LoggerItem<br />
				selector: <em>farm-logger-item</em>
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
	components: { LoggerItem },
	data() {
		return {
			item: {
				icon: 'book',
				message: 'Recusado entre as pré elegíveis',
				userName: 'Cleyton Rasta',
				formattedDate: '13/06/2022  20:40',
				status: 'error',
			},
		};
	},
	template: `<LoggerItem :item="item" />`,
});

Primary.storyName = 'Básico';
