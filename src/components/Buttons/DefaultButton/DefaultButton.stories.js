import DefaultButton from './DefaultButton.vue';

export default {
	title: 'API/Buttons/Default',
	component: DefaultButton,
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

Primary.storyName = 'Básico';
HtmlMarkup.storyName = 'Html Markup';
Props.storyName = 'Props';
Listener.storyName = 'Listener';
