import DefaultButton from './DefaultButton.vue';

export default {
	title: 'Example/Buttons/Default',
	component: DefaultButton,
};

export const Primary = () => ({
	components: { DefaultButton },
	template: '<DefaultButton>Pass text as slot</DefaultButton>',
});

export const HtmlMarkup = () => ({
	components: { DefaultButton },
	template: '<DefaultButton><em>I am italic</strong></em></DefaultButton>',
});

export const Props = () => ({
	components: { DefaultButton },
	template: '<DefaultButton color="secondary">props</DefaultButton>',
});

export const Listener = () => ({
	components: { DefaultButton },
	template: '<DefaultButton color="error" @click="alert(1)">click me</DefaultButton>',
});

Primary.storyName = 'Básico';
HtmlMarkup.storyName = 'Html Markup';
Props.storyName = 'Props';
Listener.storyName = 'Listener';
