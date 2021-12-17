import DangerButton from './DangerButton.vue';

export default {
	title: 'Example/Buttons/DangerButton',
	component: DangerButton,
};

export const Primary = () => ({
	components: { DangerButton },
	template: '<DangerButton>Danger Button</DangerButton>',
});

export const HtmlMarkup = () => ({
	components: { DangerButton },
	template: '<DangerButton><em>I am italic</strong></em></DangerButton>',
});

export const Props = () => ({
	components: { DangerButton },
	template: '<DangerButton title="custom title">custom title (hover me)</DangerButton>',
});

export const Listener = () => ({
	components: { DangerButton },
	data() {
		return {
			x: 1,
		};
	},
	template: `
		<DangerButton color="error" @click="x = 2">click me to change: {{ x }}</DangerButton>
	`,
});

export const Iconed = () => ({
	components: { DangerButton },
	template: `<div>
		<DangerButton :icon="true">default icon</DangerButton>
		<DangerButton :icon="true" customIcon="information-outline">information-outline</DangerButton>
		<DangerButton :icon="true" customIcon="account-search">account-search</DangerButton>
	</div>`,
});

Primary.storyName = 'Básico';
HtmlMarkup.storyName = 'Html Markup';
Props.storyName = 'Props';
Listener.storyName = 'Listener';
Iconed.storyName = 'Icon';
