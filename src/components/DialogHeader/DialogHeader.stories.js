import DialogHeader from './DialogHeader.vue';

export default {
	title: 'Display/Dialog/DialogHeader',
	component: DialogHeader,
	parameters: {
		docs: {
			description: {
				component: `Dialog Header<br />
				selector: <em>farm-dialog-header</em><br />
				<span style="color: var(--farm-primary-base);">ready for use</span>
				`,
			},
		},
		viewMode: 'docs',
	},
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

export const TemplateSlot = () => ({
	template: `<div style="max-width: 480px; position: relative;">
		<farm-dialog-header>
			Template Slot <farm-chip :dense="true">chip</farm-chip>
		</farm-dialog-header>
	</div>`,
});
