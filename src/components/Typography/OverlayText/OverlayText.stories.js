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
	template: `<farm-overlaytext>
		FARM OVERLAYTEXT
	</farm-overlaytext>`,
});

Primary.storyName = 'Basic';
