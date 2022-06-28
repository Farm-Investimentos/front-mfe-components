import { withDesign } from 'storybook-addon-designs';
import { DefaultButton } from '../main';
import('./Buttons.stories.scss');

export default {
	title: 'Examples/Buttons',
	decorators: [withDesign],
	parameters: {
		viewMode: 'docs',
		docs: {
			description: {
				component: `DefaultButton`,
			},
		},
	},
};

const colors = ['primary', 'secondary', 'error', 'gray', 'accent', 'yellow'];

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
        <farm-btn v-for="color of colors":key="color" :color="color">
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
        <farm-btn v-for="color of colors":key="color" :color="color"outlined>
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
		};
	},
	template: `<div class="buttons-container">
        <farm-btn v-for="color of colors":key="color" :color="color" disabled>
            {{ color }}
        </farm-btn>
	</div>`,
});

export const Plain = () => ({
	components: {
		'farm-btn': DefaultButton,
	},
	data() {
		return {
			colors,
		};
	},
	template: `<div class="buttons-container">
        <farm-btn v-for="color of colors":key="color" :color="color" plain>
            {{ color }}
        </farm-btn>
	</div>`,
});

export const Icons = () => ({
	components: {
		'farm-btn': DefaultButton,
	},
	data() {
		return {
			colors,
		};
	},
	template: `<div class="buttons-container">
		<h4>Full</h4>
        <farm-btn v-for="color of colors":key="color" :color="color">
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
	components: {
		'farm-btn': DefaultButton,
	},
	data() {
		return {
			colors,
		};
	},
	template: `<div class="buttons-container">
		<h4>Icon</h4>
        <farm-btn icon v-for="color of colors":key="color" >
            <v-icon :color="color">mdi-book</v-icon>
        </farm-btn>


	</div>`,
});

ActiveButtons.story = {
	name: 'Active',
};
OutlinedButtons.story = {
	name: 'Outlined',
};
DisabledButtons.story = {
	name: 'Disabled',
};
Plain.story = {
	name: 'Plain',
};
Icons.story = {
	name: 'Icons',
};
Iconed.story = {
	name: 'Iconed',
};
