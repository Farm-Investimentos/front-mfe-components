import { Logger } from '../../main';

export default {
	title: 'Examples/Logger/Logger',
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
		return {
			items: [
				{
					icon: 'book',
					message: 'Recusado entre as pré elegíveis',
					userName: 'Cleyton Rasta',
					formattedDate: '13/06/2022  20:40',
					status: 'error',
				},
				{
					icon: 'book',
					message: 'Recusado entre as pré elegíveis',
					userName: 'Cleyton Rasta',
					formattedDate: '13/06/2022  20:40',
					status: 'success',
				},
				{
					icon: 'book',
					message: 'Recusado entre as pré elegíveis',
					userName: 'Cleyton Rasta',
					formattedDate: '13/06/2022  20:40',
					status: 'success',
				},
			],
		};
	},
	template: `<Logger :items="items" />`,
});

Primary.storyName = 'Básico';