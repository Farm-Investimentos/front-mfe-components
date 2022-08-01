import { withDesign } from 'storybook-addon-designs';
import { Tooltip } from '../main';
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
            some <em>sample</em> text
            <br />with line break
            <br />and a long text that does not fit
        </farm-tooltip>
	</div>`,
});

Tooltips.story = {
	name: 'Colors',
};


/*
export default {
	title: 'Examples/Tooltip',
	component: Tooltip,
};


export const Primary = () => ({
	components: { 'farm-tooltip': Tooltip },
	template: `<div style="padding-left: 80px; padding-top: 80px;">
    <farm-tooltip>
        some <em>sample</em> text
        <br />with line break
        <br />and a long text that does not fit
    </farm-tooltip>
    </div>`,
});

Primary.storyName = 'Padrão';
*/