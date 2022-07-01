import Icon from './Icon.vue';

export default {
	title: 'API/Icon',
	component: Icon,
	parameters: {
		docs: {
			description: {
				component: `Icon<br />
				selector: <em>farm-icon</em>
				`,
			},
		},
		viewMode: 'docs',
	},
};



export const Primary = () => ({
	components: { 'farm-icon': Icon },
	template: '<farm-icon color="secondary">book</farm-icon>',
});



Primary.storyName = 'Primary';