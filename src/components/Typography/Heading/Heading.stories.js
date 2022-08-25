import Heading from './Heading';

export default {
	title: 'Typography/Heading',
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
	data() {
		return {
			types: [1, 2, 3, 4, 5, 6],
		};
	},
	template: `<div>
		<farm-heading v-for="type in types" :key="type" :type="type">
		Heading {{ type }}
	</farm-heading>
	</div>`,
});

Primary.storyName = 'Basic';
