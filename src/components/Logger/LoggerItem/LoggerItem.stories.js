import LoggerItem from './LoggerItem.vue';

export default {
	title: 'Feedback/Logger/LoggerItem',
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

export const Default = () => ({
	data() {
		return {
			item: {
				message: 'Recusado entre as pré elegíveis',
				userName: 'Cleyton Rasta',
				formattedDate: '13/06/2022  20:40',
			},
		};
	},
	template: `<farm-logger-item :item="item" />`,
});

export const Success = () => ({
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
	template: `<farm-logger-item :item="item" />`,
});

export const Error = () => ({
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
	template: `<farm-logger-item :item="item" />`,
});

export const Info = () => ({
	data() {
		return {
			item: {
				message: 'Recusado entre as pré elegíveis',
				userName: 'Cleyton Rasta',
				formattedDate: '13/06/2022  20:40',
				status: 'info',
			},
		};
	},
	template: `<farm-logger-item :item="item" />`,
});

export const Warning = () => ({
	data() {
		return {
			item: {
				message: 'Recusado entre as pré elegíveis',
				userName: 'Cleyton Rasta',
				formattedDate: '13/06/2022  20:40',
				status: 'warning',
			},
		};
	},
	template: `<farm-logger-item :item="item" />`,
});

export const ExtraMessage = () => ({
	data() {
		return {
			item: {
				message: 'Recusado entre as pré elegíveis',
				extraMessage: 'More text',
				formattedDate: '13/06/2022  20:40',
				status: 'info',
			},
		};
	},
	template: `<farm-logger-item :item="item" />`,
});

export const CustomIcon = () => ({
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
	template: `<farm-logger-item :item="item" />`,
});

export const Details = () => ({
	data() {
		return {
			items: [
				{
					icon: 'book',
					message: 'Aprovado entre as pré elegíveis',
					userName: 'Cleyton Rasta',
					formattedDate: '13/06/2022  20:40',
					status: 'success',
					details() {
						alert('Ver Detalhes');
					},
				},
				{
					icon: 'book',
					message: 'Reprovado entre as pré elegíveis',
					userName: 'Cleyton Rasta',
					formattedDate: '13/06/2022  20:40',
					status: 'error',
					details() {
						alert('Ver Detalhes');
					},
				},
				{
					icon: 'book',
					message: 'Info',
					userName: 'Cleyton Rasta',
					formattedDate: '13/06/2022  20:40',
					status: 'info',
					details() {
						alert('Ver Detalhes');
					},
				},

				{
					icon: 'book',
					message: 'Warning',
					userName: 'Cleyton Rasta',
					formattedDate: '13/06/2022  20:40',
					status: 'warning',
					details() {
						alert('Ver Detalhes');
					},
				},
			],
		};
	},
	template: `<div><farm-logger-item v-for="item of items" :key="item.status" :item="item" /></div>`,
});
