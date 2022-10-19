import { withDesign } from 'storybook-addon-designs';

export default {
	title: 'Display/Dialog/Vuetify',
	decorators: [withDesign],
	parameters: {
		viewMode: 'docs',
		docs: {
			description: {
				component: `Dialog created by vuetify-dialog`,
			},
		},
	},
};

export const Primary = () => ({
	methods: {
		openDialog() {
			this.$dialog.confirm({
				text: `Deseja realmente sair?`,
				title: 'Sair',
				actions: {
					true: {
						text: 'Sim',
						color: 'secondary',
						handle: () => {
							alert('Clicked: Sim');
						},
					},
				},
			});
		},
	},
	template: `<div style="display: flex; flex-direction: column; max-width: 160px; width: 100%;">
        <farm-btn @click="openDialog">
            Open
        </farm-btn>
	</div>`,
});

export const Default = () => ({
	methods: {
		openDialog() {
			this.$dialog.confirm({
				text: `Deseja realmente sair?`,
				title: 'Sair',
				actions: {
					false: {
						text: 'Cancelar',
						color: 'secondary-outlined',
						handle: () => {
							alert('Clicked: Cancelar');
						},
					},
					true: {
						text: 'Sim',
						color: 'secondary',
						handle: () => {
							alert('Clicked: Sim');
						},
					},
				},
			});
		},
	},
	template: `<div style="display: flex; flex-direction: column; max-width: 160px; width: 100%;">
        <farm-btn @click="openDialog">
            Open
        </farm-btn>
	</div>`,
});

export const ErrorColor = () => ({
	methods: {
		openDialog() {
			this.$dialog.confirm({
				text: `Deseja realmente sair?`,
				title: 'Sair',
				actions: {
					true: {
						text: 'Sair',
						color: 'error',
						handle: () => {
							alert('Clicked: Sair');
						},
					},
				},
			});
		},
	},
	template: `<div style="display: flex; flex-direction: column; max-width: 160px; width: 100%;">
        <farm-btn @click="openDialog">
            Open
        </farm-btn>
	</div>`,
});


export const CustomContent = () => ({
	methods: {
		openDialog() {
			this.$dialog.confirm({
				text: `This is a text with <strong>html markup</strong> and<br />break line!`,
				title: 'Sair',
				actions: {
					true: {
						text: 'Sim',
						color: 'secondary',
					},
				},
			});
		},
	},
	template: `<div style="display: flex; flex-direction: column; max-width: 160px; width: 100%;">
        <farm-btn @click="openDialog">
            Open
        </farm-btn>
	</div>`,
});
