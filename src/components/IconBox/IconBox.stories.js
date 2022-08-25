import { withDesign } from 'storybook-addon-designs';
import IconBox from './IconBox';
import colors from '../../configurations/colors';
import sizes from '../../configurations/sizes';
import('../Icon/Icons.stories.scss');

export default {
	title: 'Display/IconBox',
	component: IconBox,
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

export const Primary = () => ({
	template: `<div class="icons-container">
        <farm-icon-box
			icon="book" />
	</div>`,
});

export const IconBoxes = () => ({
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
