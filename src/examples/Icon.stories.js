import { withDesign } from 'storybook-addon-designs';
import { Icon } from '../main';
import colors from '../configurations/colors';

import('./Icons.stories.scss');

export default {
	title: 'Examples/Icon',
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

export const Icons = () => ({
	components: {
		'farm-icon': Icon,
	},
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
	components: {
		'farm-icon': Icon,
	},
	data() {
		return {
			sizes: ['xs', 'sm', 'md', 'lg', 'xl'],
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

Icons.story = {
	name: 'Colors',
};
Sizes.story = {
	name: 'Sizes',
};
