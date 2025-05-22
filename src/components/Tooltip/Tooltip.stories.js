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
                <span style="display: flex; align-items: center;">
                    Passe o mouse sobre o ícone 
                    <farm-icon size="sm" color="gray" style="margin-left: 8px; cursor: help;">help-circle</farm-icon>
                </span>
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
            <template v-slot:activator>
                <farm-icon size="sm" color="gray" style="cursor: help;">help-circle</farm-icon>
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
            <template v-slot:activator>
				<div style="display: flex; align-items: center;">
					<span style="margin-right: 8px;">Clique no ícone para alternar</span>
					<farm-icon @click="show = !show" size="md" color="gray" style="cursor: pointer;">info-circle</farm-icon>
				</div>
            </template>
        </farm-tooltip>
	</div>`,
});

export const InsideCard = () => ({
	template: `<div style="padding-left: 80px; padding-top: 80px;">
        <farm-card style="padding: 32px">
			<div style="display: flex; align-items: center;">
				<span style="margin-right: 8px;">Informação importante</span>
				<farm-tooltip>
					this is the tooltip!
					<template v-slot:activator>
						<farm-icon size="sm" color="gray" style="cursor: help;">help-circle</farm-icon>
					</template>
				</farm-tooltip>
			</div>
		</farm-card>
	</div>`,
});

export const FluidTooltip = () => ({
	template: `<div style="padding-left: 80px; padding-top: 80px;">
		<div style="display: flex; align-items: center;">
			<span style="margin-right: 8px;">Tooltip com largura fluida</span>
			<farm-tooltip fluid>
				This is a fluid tooltip that will grow based on its content.
				It contains a longer text to demonstrate how it expands horizontally.
				<template v-slot:activator>
					<farm-icon size="sm" color="gray" style="cursor: help;">help-circle</farm-icon>
				</template>
			</farm-tooltip>
		</div>
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
		<div style="display: flex; align-items: center;">
			<span style="margin-right: 8px;">Tooltip fluido com posição</span>
			<farm-tooltip fluid position="bottom-left">
				This is a fluid tooltip with Bottom-Left position.
				Notice how it grows based on content and has the arrow in the correct position.
				<template v-slot:activator>
					<farm-icon size="md" color="gray" style="cursor: help;">help-circle</farm-icon>
				</template>
			</farm-tooltip>
		</div>
	</div>`,
});

export const SimplePositions = () => ({
	template: `<div style="padding: 150px; display: grid; grid-template-columns: 1fr 1fr 1fr; grid-gap: 80px; text-align: center;">
		<div>
			<p style="margin-bottom: 10px;">Top Left</p>
			<farm-tooltip position="top-left">
				<div style="padding: 10px;">Top Left</div>
				<template v-slot:activator>
					<farm-icon size="md" color="gray" style="cursor: help;">help-circle</farm-icon>
				</template>
			</farm-tooltip>
		</div>

		<div>
			<p style="margin-bottom: 10px;">Top Center</p>
			<farm-tooltip position="top-center">
				<div style="padding: 10px;">Top Center</div>
				<template v-slot:activator>
					<farm-icon size="md" color="gray" style="cursor: help;">help-circle</farm-icon>
				</template>
			</farm-tooltip>
		</div>

		<div>
			<p style="margin-bottom: 10px;">Top Right</p>
			<farm-tooltip position="top-right">
				<div style="padding: 10px;">Top Right</div>
				<template v-slot:activator>
					<farm-icon size="md" color="gray" style="cursor: help;">help-circle</farm-icon>
				</template>
			</farm-tooltip>
		</div>

		<div>
			<p style="margin-bottom: 10px;">Bottom Left</p>
			<farm-tooltip position="bottom-left">
				<div style="padding: 10px;">Bottom Left</div>
				<template v-slot:activator>
					<farm-icon size="md" color="gray" style="cursor: help;">help-circle</farm-icon>
				</template>
			</farm-tooltip>
		</div>

		<div>
			<p style="margin-bottom: 10px;">Bottom Center</p>
			<farm-tooltip position="bottom-center">
				<div style="padding: 10px;">Bottom Center</div>
				<template v-slot:activator>
					<farm-icon size="md" color="gray" style="cursor: help;">help-circle</farm-icon>
				</template>
			</farm-tooltip>
		</div>

		<div>
			<p style="margin-bottom: 10px;">Bottom Right</p>
			<farm-tooltip position="bottom-right">
				<div style="padding: 10px;">Bottom Right</div>
				<template v-slot:activator>
					<farm-icon size="md" color="gray" style="cursor: help;">help-circle</farm-icon>
				</template>
			</farm-tooltip>
		</div>
	</div>`,
});
