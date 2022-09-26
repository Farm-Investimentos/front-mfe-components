import Row from './Row.vue';

export default {
	title: 'Layout/Row',
	component: Row,
	parameters: {
		docs: {
			description: {
				component: `Row<br />
				selector: <em>farm-row</em>
				<span style="color: yellow;">wait</span>
				`,
			},
		},
		viewMode: 'docs',
	},
};

export const Primary = () => ({
	template: '<farm-row>row content</farm-row>',
});

Primary.storyName = 'Basic';
