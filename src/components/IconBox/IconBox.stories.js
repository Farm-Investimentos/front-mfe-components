import { withDesign } from 'storybook-addon-designs';
import IconBox from './IconBox';
import baseThemeColors from '../../configurations/_theme-colors-base.scss';
const colors = Object.keys(baseThemeColors);
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
				component: `IconBox<br />
				selector: <em>farm-icon-box</em><br />
				<span style="color: var(--farm-primary-base);">ready for use</span>`,
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

export const Colors = () => ({
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

export const Inverted = () => ({
	data() {
		return {
			colors,
		};
	},
	template: `<div class="icons-container">
        <farm-icon-box
			v-for="color of colors"
			:key="'inverted_' + color"
			:color="color"
			:inverted="true"
			icon="book"
			 />
	</div>`,
});
