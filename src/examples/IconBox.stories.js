import { withDesign } from 'storybook-addon-designs';
import { IconBox } from '../main';
import colors from '../configurations/colors';
import('./Icons.stories.scss');

export default {
	title: 'Examples/IconBox',
	decorators: [withDesign],
	parameters: {
		viewMode: 'docs',
		docs: {
			description: {
				component: `IconBox`,
			},
		},
	},
};

export const IconBoxes = () => ({
	components: {
		'farm-icon-box': IconBox,
	},
	data() {
		return {
			colors,
		};
	},
	template: `<div class="icons-container">
        <farm-icon-box
			v-for="color of colors"
			:key="color"
			:color="color"
			icon="book" />
	</div>`,
});

IconBoxes.story = {
	name: 'Colors',
};
