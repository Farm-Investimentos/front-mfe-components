import ContainerFooter from './ContainerFooter.vue';

export default {
	title: 'Layout/ContainerFooter',
	component: ContainerFooter,
	parameters: {
		docs: {
			description: {
				component: `Container Footer<br />
				selector: <em>farm-container-footer</em>
				`,
			},
		},
		viewMode: 'docs',
	},
};

export const Primary = () => ({
	components: { 'farm-container-footer': ContainerFooter },
	template: '<farm-container-footer>Footer content</farm-container-footer>',
});

Primary.storyName = 'Basic';
