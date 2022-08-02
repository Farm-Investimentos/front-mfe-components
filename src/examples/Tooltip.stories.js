import { withDesign } from 'storybook-addon-designs';
import { Tooltip, Icon } from '../main';
import colors from '../configurations/colors';

export default {
	title: 'Examples/Tooltip',
	decorators: [withDesign],
	parameters: {
		viewMode: 'docs',
		docs: {
			description: {
				component: `Tooltip`,
			},
		},
	},
};

export const Tooltips = () => ({
	components: {
		'farm-tooltip': Tooltip,
	},
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
            this is the tooltip for {{ color }}
            <template v-slot:activator="{ on, attrs }">
                {{ color }}
            </template>
        </farm-tooltip>
	</div>`,
});

export const Iconed = () => ({
	components: {
		'farm-tooltip': Tooltip,
		'farm-icon': Icon,
	},
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
	components: {
		'farm-tooltip': Tooltip,
		'farm-icon': Icon,
	},
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

Tooltips.story = {
	name: 'Colors',
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/p62YDSTfWg0Mcnf5APfdvI/%E2%9C%8D-Design-System-%7C-v2?node-id=3779%3A6131',
		},
	},
};

Iconed.story = {
	name: 'Iconed',
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/p62YDSTfWg0Mcnf5APfdvI/%E2%9C%8D-Design-System-%7C-v2?node-id=3779%3A6131',
		},
	},
};

Visibility.story = {
	name: 'Visibility',
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/p62YDSTfWg0Mcnf5APfdvI/%E2%9C%8D-Design-System-%7C-v2?node-id=3779%3A6131',
		},
	},
};
