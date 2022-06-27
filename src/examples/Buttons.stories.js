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
		DefaultButton,
	},
	data() {
		return {
			colors,
		};
	},
	template: `<div class="buttons-container">
        <DefaultButton v-for="color of colors":key="color" :color="color">
            {{ color }}
        </DefaultButton>
	</div>`,
});

export const OutlinedButtons = () => ({
	components: {
		DefaultButton,
	},
	data() {
		return {
			colors,
		};
	},
	template: `<div class="buttons-container">
        <DefaultButton v-for="color of colors":key="color" :color="color"outlined>
            {{ color }}
        </DefaultButton>
	</div>`,
});

export const DisabledButtons = () => ({
	components: {
		DefaultButton,
	},
	data() {
		return {
			colors,
		};
	},
	template: `<div class="buttons-container">
        <DefaultButton v-for="color of colors":key="color" :color="color" disabled>
            {{ color }}
        </DefaultButton>
	</div>`,
});

export const Plain = () => ({
	components: {
		DefaultButton,
	},
	data() {
		return {
			colors,
		};
	},
	template: `<div class="buttons-container">
        <DefaultButton v-for="color of colors":key="color" :color="color" plain>
            {{ color }}
        </DefaultButton>
	</div>`,
});

export const Icons = () => ({
	components: {
		DefaultButton,
	},
	data() {
		return {
			colors,
		};
	},
	template: `<div class="buttons-container">
		<h4>Full</h4>
        <DefaultButton v-for="color of colors":key="color" :color="color">
            <v-icon>mdi-book</v-icon> book
        </DefaultButton>

		<h4>Outlined</h4>
        <DefaultButton v-for="color of colors":key="color" :color="color" outlined>
            <v-icon>mdi-book</v-icon> book
        </DefaultButton>

		<h4>Plain</h4>
        <DefaultButton v-for="color of colors":key="color" :color="color" plain>
            <v-icon>mdi-book</v-icon> book
        </DefaultButton>

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
