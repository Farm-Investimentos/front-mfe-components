import DialogFooter from './DialogFooter.vue';

export default {
	title: 'Display/Dialog/DialogFooter',
	component: DialogFooter,
	parameters: {
		docs: {
			description: {
				component: `DialogFooter<br />
				selector: <em>farm-dialog-footer</em><br />
				<span style="color: var(--farm-primary-base);">ready for use</span>
				`,
			},
		},
		viewMode: 'docs',
	},
};

export const Primary = () => ({
	template: '<farm-dialog-footer />',
});

export const ExtraButton = () => ({
	data() {
		return { extraButtons: [{ label: 'Random label', color: 'error', outlined: true }] };
	},
	template: `<farm-dialog-footer :extraButtons="extraButtons" />`,
});

export const ConfirmIcon = () => ({
	template: `<div>
        <farm-dialog-footer confirmIcon="check" />
        <farm-dialog-footer confirmIcon="check" confirmColor="yellow" />
        <farm-dialog-footer confirmIcon="check" confirmColor="accent" />
    </div>
	`,
});

export const Handlers = () => ({
	template: '<farm-dialog-footer @onConfirm="onConfirm"  @onClose="onClose" />',
	methods: {
		onConfirm() {
			alert('onConfirm handler');
		},
		onClose() {
			alert('onClose handler');
		},
	},
});
