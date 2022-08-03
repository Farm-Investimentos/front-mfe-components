import Typography from './Typography.vue';

export default {
	title: 'API/Typography',
	component: Typography,
	parameters: {
		docs: {
			description: {
				component: `Typography<br />
				selector: <em>farm-typography</em>
				`,
			},
		},
		viewMode: 'docs',
	},
};

export const Primary = () => ({
	components: { 'farm-typography': Typography },
	template: `<farm-typography color="secondary">
		farm typography
	</farm-typography>`,
});

Primary.storyName = 'Basic';
