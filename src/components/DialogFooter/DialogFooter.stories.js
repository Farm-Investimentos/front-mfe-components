import DialogFooter from './DialogFooter.vue';

export default {
	title: 'API/Dialog/DialogFooter',
	component: DialogFooter,
};

export const Primary = () => ({
	components: { DialogFooter },
	template: '<DialogFooter />',
});

export const Secondary = () => ({
	components: { DialogFooter },
	template: `<DialogFooter :extraButtons="[{ label: 'Random label', color: 'error', outlined: true }]" />`,
});

export const ConfirmIcon = () => ({
	components: { DialogFooter },
	template: `<div><DialogFooter confirmIcon="check" /><br />
	<DialogFooter confirmIcon="check" confirmColor="yellow" /><br />
	<DialogFooter confirmIcon="check" confirmColor="accent" /></div>
	`,
});

Primary.storyName = 'Básico';
Secondary.storyName = 'Botão extra';
ConfirmIcon.storyName = 'Ícone confirmar';
