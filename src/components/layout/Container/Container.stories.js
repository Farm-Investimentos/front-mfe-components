import Container from './Container.vue';

export default {
	title: 'Layout/Container',
	component: Container,
	parameters: {
		docs: {
			description: {
				component: `Container<br />
				selector: <em>farm-container</em>
				`,
			},
		},
		viewMode: 'docs',
	},
};

export const Primary = () => ({
	components: { 'farm-container': Container },
	template: '<farm-container>content</farm-container>',
});

Primary.storyName = 'Basic';
