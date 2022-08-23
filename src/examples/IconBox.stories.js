import { withDesign } from 'storybook-addon-designs';
import { IconBox } from '../main';
import colors from '../configurations/colors';
import sizes from '../configurations/sizes';
import('../components/Icon/Icons.stories.scss');

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

export const Sizes = () => ({
	components: {
		'farm-icon-box': IconBox,
	},
	data() {
		return {
			sizes,
		};
	},
	template: `<div class="icons-container">
        <div v-for="size of sizes" :key="size">
            <farm-icon-box icon="book" :key="size" :size="size" />
			{{ size }}
        </div>
       
	</div>`,
});

IconBoxes.story = {
	name: 'Colors',
};

Sizes.story = {
	name: 'Sizes',
};
