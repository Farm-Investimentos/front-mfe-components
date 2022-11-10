import ConfirmButton from './ConfirmButton.vue';

export default {
	title: 'Buttons/Confirm',
	component: ConfirmButton,
	parameters: {
		docs: {
			description: {
				component: `Confirm button<br />
				selector: <em>farm-btn-confirm</em><br />
				<span style="color: var(--farm-primary-base);">ready for use</span>
				`,
			},
		},
		viewMode: 'docs',
	},
};

export const Primary = () => ({
	template: '<ConfirmButton>Confirm Button</ConfirmButton>',
});

export const HtmlMarkup = () => ({
	template: '<ConfirmButton><em>I am italic</strong></em></ConfirmButton>',
});

export const Props = () => ({
	template: '<ConfirmButton title="custom title">custom title (hover me)</ConfirmButton>',
});

export const Listener = () => ({
	data() {
		return {
			x: 1,
		};
	},
	template: `
		<ConfirmButton color="error" @click="x = x + 1">click me to change: {{ x }}</ConfirmButton>
	`,
});

export const Iconed = () => ({
	components: { ConfirmButton },
	template: `<div>
		<ConfirmButton :icon="true">default icon</ConfirmButton>
		<ConfirmButton :icon="true" customIcon="information-outline">information-outline</ConfirmButton>
		<ConfirmButton :icon="true" customIcon="account-search">account-search</ConfirmButton>
		<ConfirmButton :icon="true" customIcon="account-search" disabled>account-search</ConfirmButton>
	</div>`,
});