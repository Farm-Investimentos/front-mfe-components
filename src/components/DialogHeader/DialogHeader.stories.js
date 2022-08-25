import DialogHeader from './DialogHeader.vue';

export default {
	title: 'Display/Dialog/DialogHeader',
	component: DialogHeader,
};

export const Primary = () => ({
	template: `<div style="max-width: 480px; position: relative;">
		<farm-dialog-header title="Título do header" />
	</div>`,
});

export const Secondary = () => ({
	template: `<div style="max-width: 480px; position: relative;">
		<farm-dialog-header title="Título do header" iconTitle="calendar" />
	</div>`,
});


export const CustomIcon = () => ({
	template: `
		<div style="max-width: 480px; position: relative;">
			<farm-dialog-header title="Título do header" iconTitle="calendar" />
		</div>`,
});

export const CloseHandler = () => ({
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
	template: `
		<div style="max-width: 480px; position: relative;">
			<farm-dialog-header title="Título do header" :hasCloseIcon="false" />
		</div>`,
});