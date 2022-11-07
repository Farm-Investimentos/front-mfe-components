import OverlayText from './OverlayText.vue';

export default {
	title: 'Typography/OverlayText',
	component: OverlayText,
	parameters: {
		docs: {
			description: {
				component: `OverlayText<br />
				selector: <em>farm-overlaytext</em><br />
				<span style="color: var(--farm-primary-base);">ready for use</span>
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
