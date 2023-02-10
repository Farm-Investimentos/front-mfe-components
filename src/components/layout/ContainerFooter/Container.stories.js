import ContainerFooter from './ContainerFooter.vue';

export default {
	title: 'Layout/ContainerFooter',
	component: ContainerFooter,
	parameters: {
		docs: {
			description: {
				component: `Container Footer<br />
				selector: <em>farm-container-footer</em><br />
				<span style="color: var(--farm-primary-base);">ready for use</span>
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

export const noTop = () => ({
	components: { 'farm-container-footer': ContainerFooter },
	template: '<farm-container-footer noTop>Footer content</farm-container-footer>',
});

Primary.storyName = 'Basic';
