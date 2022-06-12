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
