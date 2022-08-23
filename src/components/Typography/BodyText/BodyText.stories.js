import BodyText from './BodyText.vue';

export default {
	title: 'Typography/BodyText',
	component: BodyText,
	parameters: {
		docs: {
			description: {
				component: `BodyText<br />
				selector: <em>farm-bodytext</em>
				`,
			},
		},
		viewMode: 'docs',
	},
};

export const Primary = () => ({
	components: { 'farm-bodytext': BodyText },
	data() {
		return {
			type: 1,
		};
	},
	template: `<farm-bodytext :type="1" :variation="'regular'" tag="span">
		farm bodytext
	</farm-bodytext>`,
});

Primary.storyName = 'Basic';
