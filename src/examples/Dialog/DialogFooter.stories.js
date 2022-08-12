import { DialogFooter } from '../../main';

export default {
	title: 'Examples/Dialog/DialogFooter',
	component: DialogFooter,
};

export const Primary = () => ({
	components: { 'farm-dialog-footer': DialogFooter },
	template: '<farm-dialog-footer />',
});

export const ExtraButton = () => ({
	components: { 'farm-dialog-footer': DialogFooter },
	data() {
		return { extraButtons: [{ label: 'Random label', color: 'error', outlined: true }] };
	},
	template: `<farm-dialog-footer :extraButtons="extraButtons" />`,
});

export const ConfirmIcon = () => ({
	components: { 'farm-dialog-footer': DialogFooter },
	template: `<div>
        <farm-dialog-footer confirmIcon="check" />
        <farm-dialog-footer confirmIcon="check" confirmColor="yellow" />
        <farm-dialog-footer confirmIcon="check" confirmColor="accent" />
    </div>
	`,
});

export const Handlers = () => ({
	components: { 'farm-dialog-footer': DialogFooter },
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
