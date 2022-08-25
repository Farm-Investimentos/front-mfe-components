import { withDesign } from 'storybook-addon-designs';

export default {
	title: 'Display/Dialog/Confirm',
	decorators: [withDesign],
	parameters: {
		viewMode: 'docs',
		docs: {
			description: {
				component: `ConfirmDialog created by vuetify-dialog`,
			},
		},
	},
};

export const ConfirmDialog = () => ({
	methods: {
		openDialog() {
			this.$dialog.confirm({
				text: `Deseja realmente sair?`,
				title: 'Sair',
				actions: {
					false: {
						text: 'Cancelar',
						color: 'primary',
					},
					true: {
						text: 'Sim',
						color: 'secondary',
						handle: () => {
							this.$emit('onLogout');
						},
					},
				},
			});
		},
	},
	template: `<div style="display: flex; flex-direction: column; max-width: 160px; width: 100%;">
        <ConfirmButton @click="openDialog">
            Open
        </ConfirmButton>
	</div>`,
});
