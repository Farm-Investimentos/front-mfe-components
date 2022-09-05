import { withDesign } from 'storybook-addon-designs';
import Icon from './Icon';
import colors from '../../configurations/colors';
import sizes from '../../configurations/sizes';
import iconsList from './icons_list';

import('./Icons.stories.scss');

export default {
	title: 'Display/Icons',
	decorators: [withDesign],
	parameters: {
		viewMode: 'docs',
		docs: {
			description: {
				component: `Icon`,
			},
		},
	},
};

export const Atom = () => ({
	template: `<div class="icons-container">
        <farm-icon color="secondary">
            book
        </farm-icon>
	</div>`,
});

export const Colors = () => ({
	data() {
		return {
			colors,
		};
	},
	template: `<div class="icons-container">
        <farm-icon v-for="color of colors":key="color" :color="color">
            book
        </farm-icon>
	</div>`,
});

export const Sizes = () => ({
	data() {
		return {
			sizes,
		};
	},
	template: `<div class="icons-container">
        <div v-for="size of sizes">
            <farm-icon :key="size" :size="size">
                book
            </farm-icon>
            {{ size }}
        </div>
        <div>
            <farm-icon size="1.5rem">
                book
            </farm-icon>
            Custom: 1.5rem
        </div>
        <div>
            <farm-icon size="0.5rem">
                book
            </farm-icon>
            Custom: 0.5rem
        </div>
        <div>
            <farm-icon size="14px">
                book
            </farm-icon>
            Custom: 14px
        </div>
		<div>
            <farm-icon size="14">
                book
            </farm-icon>
            Custom: 14 (no unit, use px)
        </div>
	</div>`,
});

export const ListOfIcons = () => ({
	data() {
		return {
			iconsList: [...iconsList],
		};
	},
	template: `<div class="icons-container__list">
       <div v-for="icon of iconsList" :key="'icon_' + icon">
       <farm-icon>
            {{ icon }}
        </farm-icon>
        <span>{{ icon }}</span>
       </div>
	</div>`,
});
