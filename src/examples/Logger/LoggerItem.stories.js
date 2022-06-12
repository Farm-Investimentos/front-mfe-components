import { LoggerItem } from '../../main';

export default {
	title: 'Examples/Logger/LoggerItem',
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
				message: 'Recusado entre as pré elegíveis',
				userName: 'Cleyton Rasta',
				formattedDate: '13/06/2022  20:40',
			},
		};
	},
	template: `<LoggerItem :item="item" />`,
});

export const Success = () => ({
	components: { LoggerItem },
	data() {
		return {
			item: {
				message: 'Recusado entre as pré elegíveis',
				userName: 'Cleyton Rasta',
				formattedDate: '13/06/2022  20:40',
				status: 'success',
			},
		};
	},
	template: `<LoggerItem :item="item" />`,
});

export const Error = () => ({
	components: { LoggerItem },
	data() {
		return {
			item: {
				message: 'Recusado entre as pré elegíveis',
				userName: 'Cleyton Rasta',
				formattedDate: '13/06/2022  20:40',
				status: 'error',
			},
		};
	},
	template: `<LoggerItem :item="item" />`,
});

export const CustomIcon = () => ({
	components: { LoggerItem },
	data() {
		return {
			item: {
				icon: 'book',
				message: 'Recusado entre as pré elegíveis',
				userName: 'Cleyton Rasta',
				formattedDate: '13/06/2022  20:40',
				status: 'success',
			},
		};
	},
	template: `<LoggerItem :item="item" />`,
});

Primary.storyName = 'Basic';
Success.storyName = 'Success';
Error.storyName = 'Error';
CustomIcon.storyName = 'Custom Icon';
