import DialogFooter from './DialogFooter.vue';

export default {
    title: 'Example/DialogFooter',
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

Primary.storyName = 'Básico';
Secondary.storyName = 'Botão extra';
