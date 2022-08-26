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
            <span :style="{ backgroundColor: baseThemeColors[key] }">Base {{ baseThemeColors[key] }}</span>
            <span :style="{ backgroundColor: variationThemeColors[key + '-lighten'] }">Lighten: {{ variationThemeColors[key + '-lighten'] }}</span>
            <span :style="{ backgroundColor: variationThemeColors[key + '-darken'], color: 'white' }">Darken: {{ variationThemeColors[key + '-darken'] }}</span>
        </div>
	</div>`,
});
