import Logger from './Logger.vue';

export default {
	title: 'Feedback/Logger',
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
	data() {
		return {
			items: [
				{
					message: 'Recusado entre as pré elegíveis',
					userName: 'Cleyton Rasta',
					formattedDate: '13/06/2022  20:40',
					status: 'error',
				},
				{
					message: 'Aprovado entre as pré elegíveis',
					userName: 'Cleyton Rasta',
					formattedDate: '13/06/2022  20:40',
					status: 'success',
				},
				{
					message: 'Aprovado entre as pré elegíveis',
					userName: 'Cleyton Rasta',
					formattedDate: '13/06/2022  20:40',
					status: 'success',
				},
				{
					message: 'Recusado entre as pré elegíveis',
					userName: 'Cleyton Rasta',
					formattedDate: '13/06/2022  20:40',
					status: 'error',
				},
				{
					message: 'Recusado entre as pré elegíveis',
					userName: 'Cleyton Rasta',
					formattedDate: '13/06/2022  20:40',
					status: 'error',
				},
			],
		};
	},
	template: `<farm-logger :items="items" />`,
});

export const Details = () => ({
	data() {
		return {
			items: [
				{
					message: 'Recusado entre as pré elegíveis',
					userName: 'Cleyton Rasta',
					formattedDate: '13/06/2022  20:40',
					status: 'error',
					details() {
						alert('Ver Detalhes');
					},
				},
				{
					message: 'Aprovado entre as pré elegíveis',
					userName: 'Cleyton Rasta',
					formattedDate: '13/06/2022  20:40',
					status: 'success',
					details() {
						alert('Ver Detalhes');
					},
				},
				{
					message: 'Aprovado entre as pré elegíveis',
					userName: 'Cleyton Rasta',
					formattedDate: '13/06/2022  20:40',
					status: 'success',
					details() {
						alert('Ver Detalhes');
					},
				},
				{
					message: 'Recusado entre as pré elegíveis',
					userName: 'Cleyton Rasta',
					formattedDate: '13/06/2022  20:40',
					status: 'error',
					details() {
						alert('Ver Detalhes');
					},
				},
				{
					message: 'Recusado entre as pré elegíveis',
					userName: 'Cleyton Rasta',
					formattedDate: '13/06/2022  20:40',
					status: 'error',
					details() {
						alert('Ver Detalhes');
					},
				},
			],
		};
	},
	template: `<farm-logger :items="items" />`,
});
