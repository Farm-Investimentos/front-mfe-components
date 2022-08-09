import Subtitle from './Subtitle.vue';

export default {
	title: 'API/Typography/Subtitle',
	component: Subtitle,
	parameters: {
		docs: {
			description: {
				component: `Subtitle<br />
				selector: <em>farm-subtitle</em>
				`,
			},
		},
		viewMode: 'docs',
	},
};

export const Primary = () => ({
	components: { 'farm-subtitle': Subtitle },
	data() {
		return {
			type: 1,
		};
	},
	template: `<farm-subtitle :type="1" :variation="'regular'" tag="span">
		farm subtitle
	</farm-subtitle>`,
});

Primary.storyName = 'Basic';
