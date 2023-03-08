import baseThemeColors from '../configurations/_theme-colors-base.scss';
import textThemeColors from '../configurations/_theme-colors-text.scss';
import strokeThemeColors from '../configurations/_theme-colors-stroke.scss';
import bwThemeColors from '../configurations/_theme-colors-bw.scss';
import backgroundThemeColors from '../configurations/_theme-colors-background.scss';
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
			bwThemeColorsKeys: Object.keys(bwThemeColors),
			bwThemeColors: { ...bwThemeColors },
			backgroundThemeColorsKeys: Object.keys(backgroundThemeColors),
			backgroundThemeColors: { ...backgroundThemeColors },
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

		<div>
			<farm-heading :type="5">Black & White</farm-heading>
			<span v-for="bw in bwThemeColorsKeys" :key="'bw_name_' + bw" :style="{ color: bw !== 'white' ? bwThemeColors[bw] : 'black' }">
				{{ bw }}<span>{{ bwThemeColors[bw] }}</span>
			</span>
		</div>

		<div>
			<farm-heading :type="5">Background</farm-heading>
			<span v-for="bw in backgroundThemeColorsKeys" :key="'bw_name_' + bw" :style="{ backgroundColor: backgroundThemeColors[bw] }">
				{{ bw }}<span>{{ backgroundThemeColors[bw] }}</span>
			</span>
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
			bwThemeColorsKeys: Object.keys(bwThemeColors),
			bwThemeColors: { ...bwThemeColors },
			backgroundThemeColorsKeys: Object.keys(backgroundThemeColors),
			backgroundThemeColors: { ...backgroundThemeColors },
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

		<div>
			<farm-heading :type="5">Black & White</farm-heading>
			<span v-for="bw in bwThemeColorsKeys" :key="'bw_var_' + bw" :style="{ color: bw !== 'white' ? bwThemeColors[bw] : 'black' }">
				{{ bw }} <span>--farm-bw-{{ bw }}</span>
			</span>
		</div>

		<div>
			<farm-heading :type="5">Background</farm-heading>
			<span v-for="bw in backgroundThemeColorsKeys" :key="'bw_var_' + bw" :style="{ backgroundColor: backgroundThemeColors[bw], }">
				{{ bw }} <span>--farm-background-{{ bw }}</span>
			</span>
		</div>

	</div>`,
});
