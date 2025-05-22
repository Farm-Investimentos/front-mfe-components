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
        <farm-tooltip>
            <span>
			    Este é um tooltip simples
			</span>
            <template v-slot:activator>
                Passe o mouse aqui
            </template>
        </farm-tooltip>
	</div>`,
});

export const Iconed = () => ({
	template: `<div style="padding-left: 80px; padding-top: 80px;">
        <farm-tooltip>
            some <em>sample</em> text
            <br />with line break
            <br />and a long text that does not fit
            <template v-slot:activator="{ on, attrs }">
                <farm-icon size="sm" color="gray">help-circle</farm-icon>
            </template>
        </farm-tooltip>
	</div>`,
});

export const Visibility = () => ({
	data() {
		return {
			show: false,
		};
	},
	template: `<div style="padding-left: 80px; padding-top: 82px;">
        <farm-tooltip v-model="show">
            some <em>sample</em> text<br />
			some <em>sample</em> text<br />
			some <em>sample</em> text<br />
			some <em>sample</em> text<br />
			some <em>sample</em> text<br />
			some <em>sample</em> text<br />
			some <em>sample</em> text<br />
			some <em>sample</em> text<br />
			some <em>sample</em> text<br />
            <template v-slot:activator="{ on, attrs }">
			<farm-btn @click="show = !show">
				toggle me
			</farm-btn>
            </template>
        </farm-tooltip>
	</div>`,
});

export const InsideCard = () => ({
	template: `<div style="padding-left: 80px; padding-top: 80px;">
        <farm-card style="padding: 32px">
			<farm-tooltip>
				this is the tooltip!
				<template v-slot:activator="{ on, attrs }">
					<farm-btn style="height: 80px">try me</farm-btn>
				</template>
			</farm-tooltip>
		</farm-card>
	</div>`,
});

export const FluidTooltip = () => ({
	template: `<div style="padding-left: 80px; padding-top: 80px;">
        <farm-tooltip fluid>
            This is a fluid tooltip that will grow based on its content.
            It contains a longer text to demonstrate how it expands horizontally.
            <template v-slot:activator="{ on, attrs }">
                <farm-btn>Fluid Tooltip</farm-btn>
            </template>
        </farm-tooltip>
	</div>`,
});

export const TooltipPositions = () => ({
	template: `<div style="padding: 200px; display: grid; grid-template-columns: 1fr 1fr 1fr; grid-gap: 20px;">
        <farm-tooltip position="bottom-left">
            Bottom-Left Position
            <template v-slot:activator="{ on, attrs }">
                <farm-btn>Bottom Left</farm-btn>
            </template>
        </farm-tooltip>

        <farm-tooltip position="bottom-right">
            Bottom-Right Position
            <template v-slot:activator="{ on, attrs }">
                <farm-btn>Bottom Right</farm-btn>
            </template>
        </farm-tooltip>

        <farm-tooltip position="top-left">
            Top-Left Position
            <template v-slot:activator="{ on, attrs }">
                <farm-btn>Top Left</farm-btn>
            </template>
        </farm-tooltip>

        <farm-tooltip position="top-right">
            Top-Right Position
            <template v-slot:activator="{ on, attrs }">
                <farm-btn>Top Right</farm-btn>
            </template>
        </farm-tooltip>

        <farm-tooltip position="top-center">
            Top-Center Position (Default)
            <template v-slot:activator="{ on, attrs }">
                <farm-btn>Top Center</farm-btn>
            </template>
        </farm-tooltip>

        <farm-tooltip position="bottom-center">
            Bottom-Center Position
            <template v-slot:activator="{ on, attrs }">
                <farm-btn>Bottom Center</farm-btn>
            </template>
        </farm-tooltip>
	</div>`,
});

export const FluidWithPosition = () => ({
	template: `<div style="padding: 200px;">
        <farm-tooltip fluid position="bottom-left">
            This is a fluid tooltip with Bottom-Left position.
            Notice how it grows based on content and has the arrow in the correct position.
            <template v-slot:activator="{ on, attrs }">
                <farm-btn>Fluid + Position</farm-btn>
            </template>
        </farm-tooltip>
	</div>`,
});
