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
				selector: <em>farm-copytobclipboard</em><br />
				<span style="color: var(--farm-primary-base);">ready for use</span>
				`,
			},
		},
		viewMode: 'docs',
	},
};

export const Primary = () => ({
	template: `<div style="max-width: 480px; padding-top: 80px; padding-left: 80px;">
		<farm-copytoclipboard toCopy="To be copied" />
    </div>`,
});

export const NoIcon = () => ({
	template: `<div style="max-width: 480px; padding-top: 80px; padding-left: 80px;">
		<farm-copytoclipboard toCopy="To be copied" :isIcon="false" />
    </div>`,
});

export const CustomSuccessMessage = () => ({
	template: `<div style="max-width: 480px; padding-top: 80px; padding-left: 80px;">
		<farm-copytoclipboard toCopy="To be copied" success-message="Custom Success Message" />
    </div>`,
});

export const CustomTooltipColor = () => ({
	template: `<div style="max-width: 480px; padding-top: 80px; padding-left: 80px;">
		<farm-copytoclipboard toCopy="To be copied" tooltip-color="info" />
    </div>`,
});

export const Modal = () => ({
	data() {
		return {
			value: false,
		};
	},
	template: `<div>
	<farm-btn @click="value = true">abrir</farm-btn>
	<farm-modal v-model="value">
		<template v-slot:content>
			<farm-copytoclipboard toCopy="To be copied" :isIcon="false" />
		</template>
	</farm-modal>
	</div>`,
});

export const SuccessTimeout = () => ({
	template: `<div style="max-width: 480px; padding-top: 80px; padding-left: 80px;">
		<farm-copytoclipboard toCopy="To be copied" success-timeout="5000" />
    </div>`,
});