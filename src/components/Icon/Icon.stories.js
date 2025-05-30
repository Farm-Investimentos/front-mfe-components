import { withDesign } from 'storybook-addon-designs';
import Icon from './Icon.vue';
import sizes from '../../configurations/sizes';
import baseThemeColors from '../../configurations/_theme-colors-base.scss';
import bwThemeColors from '../../configurations/_theme-colors-bw.scss';
import iconsList from './icons_list';
import { customIconsList } from '../../assets/icons';
const colors = Object.keys(baseThemeColors);

import('./Icons.stories.scss');

export default {
	title: 'Display/Icons',
	decorators: [withDesign],
	component: Icon,
	parameters: {
		viewMode: 'docs',
		docs: {
			description: {
				component: `Icon<br />
                selector: <em>farm-icon<em><br />
                <span style="color: var(--farm-primary-base);">ready for use</span>`,
			},
		},
	},
};

export const Atom = () => ({
	template: `<div class="icons-container">
        <farm-icon color="primary">
            book
        </farm-icon>
	</div>`,
});

export const Colors = () => ({
	data() {
		return {
			colors: [...colors, 'white'],
		};
	},
	template: `<div class="icons-container">
        <farm-icon v-for="color of colors":key="color" :color="color">
            book
        </farm-icon>
	</div>`,
});

export const ColorsLighten = () => ({
	data() {
		return {
			colors: [...colors],
		};
	},
	template: `<div class="icons-container">
        <farm-icon v-for="color of colors":key="color" :color="color" variation="lighten">
            book
        </farm-icon>
	</div>`,
});

export const ColorsDarken = () => ({
	data() {
		return {
			colors: [...colors],
		};
	},
	template: `<div class="icons-container">
        <farm-icon v-for="color of colors":key="color" :color="color" variation="darken">
            book
        </farm-icon>
	</div>`,
});

export const ColorsBlack = () => ({
	data() {
		return {
			bwColors: Object.keys(bwThemeColors),
		};
	},
	template: `<div class="icons-container">
        <farm-icon 
			v-for="bw in bwColors"
			:key="color" 
			:color="bw.split('-')[0]"
			:variation="bw.split('-')[1]">
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
			filterKey: '',
		};
	},
	watch: {
		filterKey(newValue) {
			this.iconsList = [...iconsList].filter(
				item => item.toLowerCase().indexOf(newValue.toLowerCase()) >= 0
			);
		},
	},
	template: `<div>
        <farm-textfield-v2 v-model="filterKey" style="margin: 0 auto; width: 240px;" />
        <div class="icons-container__list">
            <div v-for="icon of iconsList" :key="'icon_' + icon">
                <farm-icon>
                    {{ icon }}
                </farm-icon>
                <span>{{ icon }}</span>
            </div>
        </div>
    </div>`,
});

export const ListOfCustomIcons = () => ({
	data() {
		return {
			customIconsList: [...customIconsList],
			filteredCustomIcons: [...customIconsList],
			filterKey: '',
		};
	},
	watch: {
		filterKey(newValue) {
			this.filteredCustomIcons = [...this.customIconsList].filter(
				item => item.toLowerCase().indexOf(newValue.toLowerCase()) >= 0
			);
		},
	},
	template: `<div>
		<div style="margin-bottom: 20px; text-align: center;">
			<h3>Custom Icons</h3>
			<p style="font-size: 12px; color: #666;">Total: {{ customIconsList.length }} icon(s)</p>
		</div>
        <farm-textfield-v2 v-model="filterKey" placeholder="Search custom icons..." style="margin: 0 auto; width: 240px;" />
        <div class="icons-container__list">
            <div v-for="icon of filteredCustomIcons" :key="'custom_icon_' + icon">
                <farm-icon color="primary">
                    {{ icon }}
                </farm-icon>
                <span>{{ icon }}</span>
            </div>
        </div>
		<div v-if="filteredCustomIcons.length === 0 && filterKey" style="text-align: center; padding: 40px; color: #666;">
			<p>No custom icons found for "{{ filterKey }}"</p>
			<p style="font-size: 12px;">Try searching for: custom-money-off</p>
		</div>
		<div v-if="customIconsList.length === 0" style="text-align: center; padding: 40px; color: #666;">
			<p>No custom icons available yet.</p>
			<p>Add your custom SVG icons to <code>src/assets/icons/</code> and update the list.</p>
		</div>
    </div>`,
});
