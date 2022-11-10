import DangerButton from './DangerButton.vue';

export default {
	title: 'Buttons/DangerButton',
	component: DangerButton,
	parameters: {
		docs: {
			description: {
				component: `Danger button<br />
				selector: <em>farm-btn-fanger</em><br />
				<span style="color: var(--farm-primary-base);">ready for use</span>
				`,
			},
		},
		viewMode: 'docs',
	},
};

export const Primary = () => ({
	template: '<farm-btn-danger>Danger Button</farm-btn-danger>',
});

export const HtmlMarkup = () => ({
	template: '<farm-btn-danger><em>I am italic</strong></em></farm-btn-danger>',
});

export const Props = () => ({
	template: '<farm-btn-danger title="custom title">custom title (hover me)</farm-btn-danger>',
});

export const Listener = () => ({
	data() {
		return {
			x: 1,
		};
	},
	template: `
		<farm-btn-danger color="error" @click="x = 2">click me to change: {{ x }}</farm-btn-danger>
	`,
});

export const Iconed = () => ({
	template: `<div>
		<farm-btn-danger :icon="true">default icon</farm-btn-danger>
		<farm-btn-danger :icon="true" customIcon="information-outline">information-outline</farm-btn-danger>
		<farm-btn-danger :icon="true" customIcon="account-search">account-search</farm-btn-danger>
		<farm-btn-danger :icon="true" customIcon="account-search" disabled>account-search</farm-btn-danger>
	</div>`,
});
