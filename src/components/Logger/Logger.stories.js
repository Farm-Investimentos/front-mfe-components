import Logger from './Logger.vue';

export default {
	title: 'Feedback/Logger',
	component: Logger,
	parameters: {
		docs: {
			description: {
				component: `Logger<br />
				selector: <em>farm-logger</em><br />
				<span style="color: var(--farm-primary-base);">ready for use</span>
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
					status: 'info',
				},
				{
					message: 'Info',
					userName: 'Cleyton Rasta',
					formattedDate: '13/06/2022  20:40',
					status: 'info',
				},
				{
					message: 'Aprovado entre as pré elegíveis',
					userName: 'Cleyton Rasta',
					formattedDate: '13/06/2022  20:40',
					status: 'success',
				},
				{
					message: 'Em validação',
					userName: 'Cleyton Rasta',
					formattedDate: '13/06/2022  20:40',
					status: 'warning',
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

export const Horizontal = () => ({
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
			],
		};
	},
	template: `<farm-logger :items="items" :vertical="false" />`,
});

export const HorizontalLeftAligned = () => ({
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
			],
		};
	},
	template: `<farm-logger :items="items" :vertical="false" align="left" />`,
});
