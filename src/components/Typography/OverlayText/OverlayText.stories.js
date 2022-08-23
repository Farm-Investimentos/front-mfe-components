import OverlayText from './OverlayText.vue';

export default {
	title: 'Typography/OverlayText',
	component: OverlayText,
	parameters: {
		docs: {
			description: {
				component: `OverlayText<br />
				selector: <em>farm-overlaytext</em>
				`,
			},
		},
		viewMode: 'docs',
	},
};

export const Primary = () => ({
	components: { 'farm-overlaytext': OverlayText },
	template: `<farm-overlaytext>
		FARM OVERLAYTEXT
	</farm-overlaytext>`,
});

Primary.storyName = 'Basic';
