import Container from './Container.vue';

export default {
	title: 'Layout/Container',
	component: Container,
	parameters: {
		docs: {
			description: {
				component: `Container<br />
				selector: <em>farm-container</em><br />
				<span style="color: green;">ready for use</span>
				`,
			},
		},
		viewMode: 'docs',
	},
};

export const Primary = () => ({
	template: '<farm-container>content</farm-container>',
});

Primary.storyName = 'Basic';
