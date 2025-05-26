import { withDesign } from 'storybook-addon-designs';
import Tooltip from '.';

export default {
	title: 'Interactions/Tooltip',
	component: Tooltip,
	decorators: [withDesign],
	parameters: {
		docs: {
			description: {
				component: `Tooltip<br />
				selector: <em>farm-tooltip</em><br />
				<span style="color: var(--farm-primary-base);">ready for use</span>
				<br /><br />
				<h3>Important notes:</h3>
				<ul>
					<li><strong>Do not add margin to the activator element</strong> - This can confuse the tooltip display watcher and prevent the arrow from being positioned correctly</li>
					<li>Prefer to add margin to the parent element or sibling elements of the tooltip</li>
					<li>Arrow positioning is calculated based on the activator element position</li>
					<li>The close button (X) is automatically displayed only in tooltips controlled by v-model</li>
					<li>The arrow is only displayed when a position is explicitly defined (position property). If no position is defined, the tooltip will not have an arrow</li>
					<li>You can add a title to the tooltip using the "title" slot. When used in a controlled tooltip, the close button will be aligned with the title</li>
				</ul>
				`,
			},
		},
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/p62YDSTfWg0Mcnf5APfdvI/%E2%9C%8D-Design-System-%7C-v2?node-id=3779%3A6131',
		},
		viewMode: 'docs',
	},
};

export const Tooltips = () => ({
	template: `<div style="padding-left: 80px; padding-top: 80px;">
        <span style="display: flex; align-items: center;">
            Hover over the icon
            <farm-tooltip>
                <span>
                    This is a simple tooltip
                </span>
                <template v-slot:activator>
                    <farm-icon size="sm" color="gray" style="margin-left: 8px; cursor: help;">help-circle</farm-icon>
                </template>
            </farm-tooltip>
        </span>
	</div>`,
});

export const InsideCard = () => ({
	template: `<div style="padding-left: 80px; padding-top: 80px;">
        <farm-card style="padding: 32px">
			<span style="display: flex; align-items: center;">
				<span style="margin-right: 8px;">Important information</span>
				<farm-tooltip>
					this is the tooltip!
					<template v-slot:activator>
						<farm-icon size="sm" color="gray" style="cursor: help;">help-circle</farm-icon>
					</template>
				</farm-tooltip>
			</span>
		</farm-card>
	</div>`,
});

export const FluidTooltip = () => ({
	template: `<div style="padding-left: 80px; padding-top: 80px;">
		<span style="display: flex; align-items: center;">
			<span style="margin-right: 8px;">Fluid width tooltip</span>
			<farm-tooltip fluid>
				This is a fluid tooltip that will grow based on its content.
				It contains a longer text to demonstrate how it expands horizontally.
				<template v-slot:activator>
					<farm-icon size="sm" color="gray" style="cursor: help;">help-circle</farm-icon>
				</template>
			</farm-tooltip>
		</span>
	</div>`,
});

export const TooltipPositions = () => ({
	template: `<div style="padding: 100px; display: flex; flex-direction: column; align-items: center; gap: 50px;">
		<div style="display: flex; gap: 30px; margin-bottom: 50px;">
			<div style="display: flex; flex-direction: column; align-items: center;">
				<p style="margin-bottom: 10px;">Top Left</p>
				<farm-tooltip position="top-left">
					Top-Left Position
					<template v-slot:activator>
						<farm-icon size="md" color="gray" style="cursor: help;">help-circle</farm-icon>
					</template>
				</farm-tooltip>
			</div>

			<div style="display: flex; flex-direction: column; align-items: center;">
				<p style="margin-bottom: 10px;">Top Center</p>
				<farm-tooltip position="top-center">
					Top-Center Position (Default)
					<template v-slot:activator>
						<farm-icon size="md" color="gray" style="cursor: help;">help-circle</farm-icon>
					</template>
				</farm-tooltip>
			</div>

			<div style="display: flex; flex-direction: column; align-items: center;">
				<p style="margin-bottom: 10px;">Top Right</p>
				<farm-tooltip position="top-right">
					Top-Right Position
					<template v-slot:activator>
						<farm-icon size="md" color="gray" style="cursor: help;">help-circle</farm-icon>
					</template>
				</farm-tooltip>
			</div>
		</div>

		<div style="display: flex; gap: 30px;">
			<div style="display: flex; flex-direction: column; align-items: center;">
				<p style="margin-bottom: 10px;">Bottom Left</p>
				<farm-tooltip position="bottom-left">
					Bottom-Left Position
					<template v-slot:activator>
						<farm-icon size="md" color="gray" style="cursor: help;">help-circle</farm-icon>
					</template>
				</farm-tooltip>
			</div>

			<div style="display: flex; flex-direction: column; align-items: center;">
				<p style="margin-bottom: 10px;">Bottom Center</p>
				<farm-tooltip position="bottom-center">
					Bottom-Center Position
					<template v-slot:activator>
						<farm-icon size="md" color="gray" style="cursor: help;">help-circle</farm-icon>
					</template>
				</farm-tooltip>
			</div>

			<div style="display: flex; flex-direction: column; align-items: center;">
				<p style="margin-bottom: 10px;">Bottom Right</p>
				<farm-tooltip position="bottom-right">
					Bottom-Right Position
					<template v-slot:activator>
						<farm-icon size="md" color="gray" style="cursor: help;">help-circle</farm-icon>
					</template>
				</farm-tooltip>
			</div>
		</div>
	</div>`,
});

export const FluidWithPosition = () => ({
	template: `<div style="padding: 200px;">
		<span style="display: flex; align-items: center;">
			<span style="margin-right: 8px;">Fluid tooltip with position</span>
			<farm-tooltip fluid position="bottom-left">
				This is a fluid tooltip with Bottom-Left position.
				Notice how it grows based on content and has the arrow in the correct position.
				<template v-slot:activator>
					<farm-icon size="md" color="gray" style="cursor: help;">help-circle</farm-icon>
				</template>
			</farm-tooltip>
		</span>
	</div>`,
});

export const TooltipWithTitle = () => ({
	template: `<div style="padding-left: 80px; padding-top: 80px;">
		<span style="display: flex; align-items: center;">
			<span style="margin-right: 8px;">Tooltip with title</span>
			<farm-tooltip fluid position="top-left">
				<template v-slot:title>
					<farm-icon size="sm" color="white">alert</farm-icon>
					<span class="ml-10">Important Information</span>
				</template>
				This tooltip has a title that appears at the top.
				<template v-slot:activator>
					<farm-icon size="md" color="gray" style="cursor: help;">help-circle</farm-icon>
				</template>
			</farm-tooltip>
		</span>
	</div>`,
});

export const ControlledTooltipWithTitle = () => ({
	data() {
		return {
			showTooltip: false,
		};
	},
	template: `<div style="padding: 80px;">
		<span style="display: flex; align-items: center;">
			<span style="margin-right: 8px;">Click to open:</span>
			<farm-tooltip fluid v-model="showTooltip" position="top-right">
				<template v-slot:title>
					Tooltip Title
				</template>
				This is a controlled tooltip with title.
				<br><br>
				Notice how the close button is aligned with the title.
				<template v-slot:activator>
					<farm-icon @click="showTooltip = !showTooltip" size="md" color="blue" style="cursor: pointer;">help-circle</farm-icon>
				</template>
			</farm-tooltip>
		</span>
	</div>`,
});
