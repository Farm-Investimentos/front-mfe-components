import DefaultButton from './DefaultButton.vue';
// import { withDesign } from 'storybook-addon-designs';
import colors from '../../../configurations/colors';
import './Buttons.stories.scss';

export default {
	title: 'Buttons/Default',
	component: DefaultButton,

	//decorators: [withDesign],
	parameters: {
		docs: {
			description: {
				component: `Default button<br />
				selector: <em>farm-btn</em>
				`,
			},
		},
		viewMode: 'docs',
	},
};

export const Primary = () => ({
	components: { DefaultButton },
	template: '<DefaultButton title="Pass text as slot">Pass text as slot</DefaultButton>',
});

export const HtmlMarkup = () => ({
	components: { DefaultButton },
	template: '<DefaultButton><em>I am italic</strong></em></DefaultButton>',
});

export const Props = () => ({
	components: { 'farm-btn': DefaultButton },
	template: '<farm-btn color="secondary" outlined>props</farm-btn>',
});

export const Listener = () => ({
	components: { DefaultButton },
	data() {
		return {
			x: 1,
		};
	},
	template: `
		<DefaultButton color="error" @click="x = 2">click me to change: {{ x }}</DefaultButton>
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
            <v-icon>mdi-book</v-icon> book
        </farm-btn>

		<h4>Outlined</h4>
        <farm-btn v-for="color of colors":key="color + 'outlined'" :color="color" outlined>
            <v-icon>mdi-book</v-icon> book
        </farm-btn>

		<h4>Plain</h4>
        <farm-btn v-for="color of colors":key="color + 'plain'" :color="color" plain>
            <v-icon>mdi-book</v-icon> book
        </farm-btn>
		

	</div>`,
});

export const Iconed = () => ({
	data() {
		return {
			colors,
		};
	},
	template: `<div class="buttons-container">
		<h4>Icon</h4>
        <farm-btn icon v-for="color of colors" :key="'random_2_' + color" :color="color">
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
			sizes: ['xs', 'sm', 'md', 'lg', 'xl'],
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
            <farm-btn v-for="size of sizes" :style="styles.farmBtn" :key="'default_' + size" :size="size" color="secondary">
                {{ size }}
            </farm-btn>
        </div>
		<h4>Outlined</h4>
		<div :style="styles">
            <farm-btn v-for="size of sizes" :style="styles.farmBtn" :key="'outlined_' + size" :size="size" color="secondary" outlined>
                {{ size }}
            </farm-btn>
        </div>
		<h4>Plain</h4>
		<div :style="styles">
            <farm-btn v-for="size of sizes" :style="styles.farmBtn" :key="'plain_' + size" :size="size" color="secondary" plain>
                {{ size }}
            </farm-btn>
        </div>
		<h4>Rounded</h4>
		<div :style="styles">
            <farm-btn v-for="size of sizes" :style="styles.farmBtn" :key="'rouned_' + size" :size="size" color="secondary" rounded>
                {{ size }}
            </farm-btn>
        </div>
		<h4>Icon</h4>
		<div :style="styles">
            <farm-btn v-for="size of sizes" :style="styles.farmBtn" :key="'icon_' + size" color="secondary" :size="size" icon>
				<farm-icon :size="size">book</farm-icon>
            </farm-btn>
        </div>
	</div>`,
});
