import Line from './Line.vue';

export default {
	title: 'Layout/Line',
	component: Line,
	parameters: {
		docs: {
			description: {
				component: `Line<br />
				selector: <em>farm-line</em><br />
				<span style="color: var(--farm-primary-base);">ready for use</span>
				`,
			},
		},
		viewMode: 'docs',
	},
};

export const Primary = () => ({
	components: { 'farm-line': Line },
	template: '<farm-line />',
});

export const Spacing = () => ({
	components: { 'farm-line': Line },
	template: '<farm-line :noSpacing="true" />',
});

Primary.storyName = 'Basic';
Spacing.storyName = 'No Spacing';
