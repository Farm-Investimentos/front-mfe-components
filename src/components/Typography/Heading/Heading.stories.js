import Heading from './Heading.vue';

export default {
	title: 'API/Typography/Heading',
	component: Heading,
	parameters: {
		docs: {
			description: {
				component: `Heading<br />
				selector: <em>farm-heading</em>
				`,
			},
		},
		viewMode: 'docs',
	},
};

export const Primary = () => ({
	components: { 'farm-heading': Heading },
	data() {
		return {
			type: 1,
		};
	},
	template: `<farm-heading :type="type">
		farm heading
	</farm-heading>`,
	mounted() {
		setTimeout(() => {
			this.type = 5;
		}, 2000);
	}
});

Primary.storyName = 'Basic';
