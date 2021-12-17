import ConfirmButton from './ConfirmButton.vue';

export default {
	title: 'Example/Buttons/Confirm',
	component: ConfirmButton,
};

export const Primary = () => ({
	components: { ConfirmButton },
	template: '<ConfirmButton>Confirm Button</ConfirmButton>',
});

export const HtmlMarkup = () => ({
	components: { ConfirmButton },
	template: '<ConfirmButton><em>I am italic</strong></em></ConfirmButton>',
});

export const Props = () => ({
	components: { ConfirmButton },
	template: '<ConfirmButton title="custom title">custom title (hover me)</ConfirmButton>',
});

export const Listener = () => ({
	components: { ConfirmButton },
	data() {
		return {
			x: 1,
		};
	},
	template: `
		<ConfirmButton color="error" @click="x = 2">click me to change: {{ x }}</ConfirmButton>
	`,
});

export const Iconed = () => ({
	components: { ConfirmButton },
	template: `<div>
		<ConfirmButton :icon="true">default icon</ConfirmButton>
		<ConfirmButton :icon="true" customIcon="information-outline">information-outline</ConfirmButton>
		<ConfirmButton :icon="true" customIcon="account-search">account-search</ConfirmButton>
	</div>`,
});

Primary.storyName = 'Básico';
HtmlMarkup.storyName = 'Html Markup';
Props.storyName = 'Props';
Listener.storyName = 'Listener';
Iconed.storyName = 'Icon';
