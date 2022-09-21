import baseThemeColors from '../configurations/_theme-colors-base.scss';
import textThemeColors from '../configurations/_theme-colors-text.scss';
import strokeThemeColors from '../configurations/_theme-colors-stroke.scss';
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
			textThemeColors: { ...textThemeColors },
			strokeThemeColors: { ...strokeThemeColors },
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

		<div>
            <farm-heading :type="5">Text</farm-heading>
            <span :style="{ color: textThemeColors['text-primary'] }">Primary <span>{{ textThemeColors['text-primary'] }}</span></span>
			<span :style="{ color: textThemeColors['text-secondary'] }">Secondary <span>{{ textThemeColors['text-secondary'] }}</span></span>
			<span :style="{ color: textThemeColors['text-disabled'] }">Disabled <span>{{ textThemeColors['text-disabled'] }}</span></span>
        </div>
		<div>
            <farm-heading :type="5">Stroke</farm-heading>
            <span :style="{ color: strokeThemeColors['stroke-base'] }">Base <span>{{ strokeThemeColors['stroke-base'] }}</span></span>
			<span :style="{ color: strokeThemeColors['stroke-disabled'] }">Disabled <span>{{ strokeThemeColors['stroke-disabled'] }}</span></span>
			<span :style="{ color: strokeThemeColors['stroke-divider'] }">Divider <span>{{ strokeThemeColors['stroke-divider'] }}</span></span>
        </div>

	</div>`,
});

export const CssVariables = () => ({
	data() {
		return {
			baseThemeColors: { ...baseThemeColors },
			keys: Object.keys(baseThemeColors),
			variationThemeColors: { ...variationThemeColors },
			textThemeColors: { ...textThemeColors },
			strokeThemeColors: { ...strokeThemeColors },
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

		<div>
            <farm-heading :type="5">Text</farm-heading>
            <span :style="{ color: textThemeColors['text-primary'] }">Primary <span>--farm-text-primary</span></span></span>
			<span :style="{ color: textThemeColors['text-secondary'] }">Secondary <span>--farm-text-secondary</span></span>
			<span :style="{ color: textThemeColors['text-disabled'] }">Disabled <span>--farm-text-disabled</span></span>
        </div>

		<div>
            <farm-heading :type="5">Stroke</farm-heading>
            <span :style="{ color: strokeThemeColors['stroke-base'] }">Base <span>--farm-stroke-base</span></span></span>
			<span :style="{ color: strokeThemeColors['stroke-disabled'] }">Disabled <span>--farm-stroke-disabled</span></span>
			<span :style="{ color: strokeThemeColors['stroke-divider'] }">Divider <span>--farm-stroke-divider</span></span>
        </div>

	</div>`,
});
