import { withDesign } from 'storybook-addon-designs';
import Tooltip from '.';
import baseThemeColors from '../../configurations/_theme-colors-base.scss';
const colors = Object.keys(baseThemeColors);

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
	data() {
		return {
			colors,
		};
	},
	template: `<div style="padding-left: 80px; padding-top: 80px;">
        <farm-tooltip
            v-for="color of colors"
            :key="color"
            :color="color"
            style="margin-right: 4px"
        >
            <span>
			this is the tooltip for {{ color }}
			</span>
            <template v-slot:activator="{ on, attrs }">
                {{ color }}
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
	template: `<div style="padding-left: 80px; padding-top: 80px;">
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
			<v-btn @click="show = !show">
				toggle me
			</v-btn>
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
