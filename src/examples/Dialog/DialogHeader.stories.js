import { DialogHeader } from '../../main';

export default {
	title: 'Examples/Dialog/DialogHeader',
	component: DialogHeader,
};

export const Primary = () => ({
	components: { 'farm-dialog-header': DialogHeader },
	template: `
		<div style="max-width: 480px; position: relative;">
			<farm-dialog-header title="Título do header" />
		</div>`,
});

export const CustomIcon = () => ({
	components: { 'farm-dialog-header': DialogHeader },
	template: `
		<div style="max-width: 480px; position: relative;">
			<farm-dialog-header title="Título do header" iconTitle="calendar" />
		</div>`,
});

export const CloseHandler = () => ({
	components: { 'farm-dialog-header': DialogHeader },
	template: `
		<div style="max-width: 480px; position: relative;">
			<farm-dialog-header title="Título do header" iconTitle="calendar" @onClose="onClose" />
		</div>`,
	methods: {
		onClose() {
			alert('onClose handler');
		},
	},
});

export const NoCloseIcon = () => ({
	components: { 'farm-dialog-header': DialogHeader },
	template: `
		<div style="max-width: 480px; position: relative;">
			<farm-dialog-header title="Título do header" :hasCloseIcon="false" />
		</div>`,
});
