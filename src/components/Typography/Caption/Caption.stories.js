import Caption from './Caption.vue';

export default {
	title: 'API/Typography/Caption',
	component: Caption,
	parameters: {
		docs: {
			description: {
				component: `Caption<br />
				selector: <em>farm-caption</em>
				`,
			},
		},
		viewMode: 'docs',
	},
};

export const Primary = () => ({
	components: { 'farm-caption': Caption },
	data() {
		return {
			type: 1,
		};
	},
	template: `<farm-caption variation="regular" tag="span">
		farm caption
	</farm-caption>`,
});

Primary.storyName = 'Basic';
