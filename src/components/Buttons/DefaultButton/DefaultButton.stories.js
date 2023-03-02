import { withDesign } from 'storybook-addon-designs';
import baseThemeColors from '../../../configurations/_theme-colors-base.scss';
import './Buttons.stories.scss';
import DefaultButton from './DefaultButton.vue';
const colors = Object.keys(baseThemeColors);

export default {
	title: 'Buttons/Default',
	component: DefaultButton,

	decorators: [withDesign],
	parameters: {
		docs: {
			description: {
				component: `Default button<br />
				selector: <em>farm-btn</em><br />
				<span style="color: var(--farm-primary-base);">ready for use</span>
				`,
			},
			design: {
				type: 'figma',
				url: 'https://www.figma.com/file/p62YDSTfWg0Mcnf5APfdvI/%E2%9C%8D-Design-System-%7C-v2?node-id=2491%3A4486',
			},
		},
		viewMode: 'docs',
	},
};

export const Default = () => ({
	template: '<farm-btn color="primary"> Pass text as slot </farm-btn>',
});

export const Full = () => ({
	template:
		'<farm-btn color="primary" full> <farm-icon>plus</farm-icon> Pass text as slot <farm-icon>plus</farm-icon></farm-btn>',
});

export const PrimaryActive = () => ({
	template:
		'<farm-btn color="primary"> <farm-icon>plus</farm-icon> Pass text as slot <farm-icon>plus</farm-icon></farm-btn>',
});

export const PrimaryInactive = () => ({
	template:
		'<farm-btn disabled> <farm-icon>plus</farm-icon> Pass text as slot <farm-icon>plus</farm-icon></farm-btn>',
});
export const SecondaryActive = () => ({
	template:
		'<farm-btn outlined> <farm-icon>plus</farm-icon> Pass text as slot <farm-icon>plus</farm-icon></farm-btn>',
});

export const SecondaryInactive = () => ({
	template:
		'<farm-btn outlined disabled> <farm-icon>plus</farm-icon> Pass text as slot <farm-icon>plus</farm-icon></farm-btn>',
});

export const TertiaryActive = () => ({
	template:
		'<farm-btn plain> <farm-icon>plus</farm-icon> Pass text as slot <farm-icon>plus</farm-icon></farm-btn>',
});

export const TertiaryInactive = () => ({
	template:
		'<farm-btn plain disabled> <farm-icon>plus</farm-icon> Pass text as slot <farm-icon>plus</farm-icon></farm-btn>',
});

export const HtmlMarkup = () => ({
	template: '<farm-btn><em>I am italic</strong></em></farm-btn>',
});

export const Props = () => ({
	template: '<farm-btn outlined>props</farm-btn>',
});

export const Listener = () => ({
	data() {
		return {
			x: 1,
		};
	},
	template: `
		<farm-btn color="error" @click="x++">click me to change: {{ x }}</farm-btn>
	`,
});

export const ActiveButtons = () => ({
	components: {
		'farm-btn': DefaultButton,
	},
	data() {
		return {
			colors,
		};
	},
	template: `<div class="buttons-container">
        <farm-btn v-for="color of colors":key="'random_9_' + color" :color="color">
            {{ color }}
        </farm-btn>
		<farm-btn v-for="color of colors":key="'random_9_lighten_' + color" :color="color" variation="lighten">
            {{ color }} lighten
        </farm-btn>
	</div>`,
});

export const OutlinedButtons = () => ({
	components: {
		'farm-btn': DefaultButton,
	},
	data() {
		return {
			colors,
		};
	},
	template: `<div class="buttons-container">
		<h4>Outlined</h4>
        <farm-btn v-for="color of colors":key="'random_8_' + color" :color="color" outlined>
            {{ color }}
        </farm-btn>
	</div>`,
});

export const DisabledButtons = () => ({
	components: {
		'farm-btn': DefaultButton,
	},
	data() {
		return {
			colors,
			x: 1,
		};
	},
	template: `<div class="buttons-container">
		<h4>Default</h4>
        <farm-btn v-for="color of colors":key="'random_5_' + color" :color="color" disabled>
            {{ color }}
        </farm-btn>
		<h4>Outlined</h4>
		<farm-btn v-for="color of colors":key="'random_6_' + color" :color="color" outlined disabled>
            {{ color }}
        </farm-btn>
		<h4>Plain</h4>
		<farm-btn v-for="color of colors":key="'random_7_' + color" :color="color" plain disabled>
            {{ color }}
        </farm-btn>
		<h4>Icon</h4>
        <farm-btn v-for="color of colors":key="color + '_disabled_icon'" :color="color" plain disabled>
            <farm-icon>book</farm-icon> {{ color }}
        </farm-btn>
		<farm-btn v-for="color of colors":key="'random_icon_' + color" :color="color" disabled>
			<farm-icon>book</farm-icon>
			{{ color }}
	</farm-btn>
	</div>`,
});

export const Plain = () => ({
	data() {
		return {
			colors,
		};
	},
	template: `<div class="buttons-container">
        <farm-btn v-for="color of colors":key="'random_4_' + color" :color="color" plain>
            {{ color }}
        </farm-btn>
	</div>`,
});

export const Icons = () => ({
	data() {
		return {
			colors,
		};
	},
	template: `<div class="buttons-container">
		<h4>Full</h4>
        <farm-btn v-for="color of colors":key="'random_3_' + color" :color="color">
			<farm-icon>book</farm-icon> book
        </farm-btn>

		<h4>Outlined</h4>
        <farm-btn v-for="color of colors":key="color + 'outlined'" :color="color" outlined>
			<farm-icon>book</farm-icon> book
        </farm-btn>

		<h4>Plain</h4>
        <farm-btn v-for="color of colors":key="color + 'plain'" :color="color" plain>
			<farm-icon color="primary">book</farm-icon> book
        </farm-btn>
		

	</div>`,
});

export const Iconed = () => ({
	data() {
		return {
			colors: [...colors, 'white'],
		};
	},
	template: `<div class="buttons-container">
		<h4>Icon</h4>
        <farm-btn icon v-for="color of colors" :key="'random_2_' + color" :color="color">
            <farm-icon>book</farm-icon>
        </farm-btn>

		<h4>Darken Icon</h4>
        <farm-btn icon v-for="color of colors" :key="'random_2_' + color" :color="color" variation="darken">
            <farm-icon>book</farm-icon>
        </farm-btn>

		<h4>Lighten Icon</h4>
        <farm-btn icon v-for="color of colors" :key="'random_2_' + color" :color="color" variation="lighten">
            <farm-icon>book</farm-icon>
        </farm-btn>

		<h4>Disabled Icon</h4>
        <farm-btn icon v-for="color of colors" :key="'disabled_random_2_' + color" :color="color" :disabled="true">
            <farm-icon>book</farm-icon>
        </farm-btn>

	</div>`,
});

export const Rounded = () => ({
	data() {
		return {
			colors,
		};
	},
	template: `<div class="buttons-container">
		<h4>Rounded</h4>
        <farm-btn v-for="color of colors" :key="'random_1_' + color" :color="color" rounded >rounded
        </farm-btn>
	</div>`,
});

export const Sizes = () => ({
	data() {
		return {
			sizes: ['xs', 'sm', 'md', 'lg', 'xl', 'default'],
			styles: {
				display: 'flex',
				flexDirection: 'row',
				farmBtn: {
					marginRight: '12px',
				},
			},
		};
	},
	template: `<div>
		<h4>Default</h4>
        <div :style="styles">
            <farm-btn v-for="size of sizes" :style="styles.farmBtn" :key="'default_' + size" :size="size">
                {{ size }}
            </farm-btn>
        </div>
		<h4>Outlined</h4>
		<div :style="styles">
            <farm-btn v-for="size of sizes" :style="styles.farmBtn" :key="'outlined_' + size" :size="size" outlined>
                {{ size }}
            </farm-btn>
        </div>
		<h4>Plain</h4>
		<div :style="styles">
            <farm-btn v-for="size of sizes" :style="styles.farmBtn" :key="'plain_' + size" :size="size" plain>
                {{ size }}
            </farm-btn>
        </div>
		<h4>Rounded</h4>
		<div :style="styles">
            <farm-btn v-for="size of sizes" :style="styles.farmBtn" :key="'rouned_' + size" :size="size" rounded>
                {{ size }}
            </farm-btn>
        </div>
		<h4>Icon</h4>
		<div :style="styles">
            <farm-btn v-for="size of sizes" :style="styles.farmBtn" :key="'icon_' + size" :size="size" icon>
				<farm-icon :size="size">book</farm-icon>
            </farm-btn>
        </div>
	</div>`,
});

export const Elevated = () => ({
	template: '<farm-btn :elevated="true">Elevated</farm-btn>',
});
