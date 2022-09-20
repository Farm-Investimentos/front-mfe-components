import baseThemeColors from '../configurations/_theme-colors-base.scss';
import variationThemeColors from '../configurations/_theme-colors-variations.scss';
import('./Colors.stories.scss');

export default {
	title: 'Colors/Pallete',
};

export const NamesAndValues = () => ({
	data() {
		return {
			baseThemeColors: { ...baseThemeColors },
			keys: Object.keys(baseThemeColors),
			variationThemeColors: { ...variationThemeColors },
		};
	},
	template: `<div class="palette-container">
        <div
            v-for="key in keys"
            :key="key"
        >
            <farm-heading :type="5">{{ key }}</farm-heading>
            <span :style="{ backgroundColor: baseThemeColors[key] }">Base <span>{{ baseThemeColors[key] }}</span></span>
            <span :style="{ backgroundColor: variationThemeColors[key + '-lighten'] }">Lighten <span>{{ variationThemeColors[key + '-lighten'] }}</span></span>
            <span :style="{ backgroundColor: variationThemeColors[key + '-darken'], color: 'white' }">Darken <span>{{ variationThemeColors[key + '-darken'] }}</span></span>
        </div>
	</div>`,
});

export const CssVariables = () => ({
	data() {
		return {
			baseThemeColors: { ...baseThemeColors },
			keys: Object.keys(baseThemeColors),
			variationThemeColors: { ...variationThemeColors },
		};
	},
	template: `<div class="palette-container">
        <div
            v-for="key in keys"
            :key="key"
        >
            <farm-heading :type="5">{{ key }}</farm-heading>
			<span :style="{ backgroundColor: baseThemeColors[key] }">Base <span>--farm-{{ key }}-base</span></span>
            <span :style="{ backgroundColor: variationThemeColors[key + '-lighten'] }">Lighten<span>--farm-{{ key }}-lighten</span></span>
            <span :style="{ backgroundColor: variationThemeColors[key + '-darken'], color: 'white' }">Darken: <span>--farm-{{ key }}-darken</span></span>
        </div>
	</div>`,
});
