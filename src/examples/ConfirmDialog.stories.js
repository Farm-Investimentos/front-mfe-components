import { withDesign } from 'storybook-addon-designs';
import { ConfirmButton } from '../main';

export default {
	title: 'Examples/ConfirmDialog',
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
	components: {
		ConfirmButton,
	},
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

ConfirmDialog.story = {
	name: 'ConfirmDialog',
};
