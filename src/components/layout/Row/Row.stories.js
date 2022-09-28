import Row from './Row.vue';

export default {
	title: 'Layout/Row',
	component: Row,
	parameters: {
		docs: {
			description: {
				component: `Row<br />
				selector: <em>farm-row</em><br />
				<span style="color: var(--farm-extra-1-base);">development</span>
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
