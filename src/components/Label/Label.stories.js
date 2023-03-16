import { withDesign } from 'storybook-addon-designs';
import Label from './Label.vue';

export default {
	title: 'Form/Label',
	component: Label,
	decorators: [withDesign],
	parameters: {
		viewMode: 'docs',
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/1f84J4m1IBghWhozQvdyyt/%E2%9C%85---Design-System-%7C-v1?node-id=1503%3A227',
		},
		docs: {
			description: {
				component: `Label<br />
				selector: <em>farm-label</em><br />
				<span style="color: var(--farm-primary-base);">ready for use</span>`,
			},
		},
	},
};

export const Primary = () => ({
	template: '<farm-label>Label</farm-label>',
});

export const Required = () => ({
	template: `<div>
		<farm-label required>Label</farm-label>
	</div>`,
});

export const Tooltip = () => ({
	template: `<div>
		<farm-label required>
			Label with tooltip
			<farm-tooltip>
				this is the tooltip!
				<template v-slot:activator="{ on, attrs }">
					<farm-icon size="sm" color="gray">help-circle</farm-icon>
				</template>
			</farm-tooltip>
		</farm-label>
	</div>`,
});
