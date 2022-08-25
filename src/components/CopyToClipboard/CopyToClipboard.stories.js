import { withDesign } from 'storybook-addon-designs';
import CopyToClipboard from './CopyToClipboard.vue';

export default {
	title: 'Interactions/CopyToClipboard',
	component: CopyToClipboard,
	decorators: [withDesign],
	parameters: {
		docs: {
			description: {
				component: `CopyToClipboard<br />
				selector: <em>farm-copytobclipboard</em>
				`,
			},
		},
		viewMode: 'docs',
	},
};

export const Primary = () => ({
	components: { 'farm-copytoclipboard': CopyToClipboard },
	template: `<div style="max-width: 480px; padding-top: 80px; padding-left: 80px;">
		<farm-copytoclipboard toCopy="To be copied" />
    </div>`,
});
