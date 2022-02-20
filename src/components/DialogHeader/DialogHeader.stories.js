import DialogHeader from './DialogHeader.vue';

export default {
    title: 'API/Dialog/DialogHeader',
    component: DialogHeader,
};

export const Primary = () => ({
    components: { DialogHeader },
    template: '<DialogHeader title="Título do header" />',
});

export const Secondary = () => ({
    components: { DialogHeader },
    template: `<DialogHeader title="Título do header" iconTitle="calendar" />`,
});

Primary.storyName = 'Básico';
Secondary.storyName = 'Com ícone';
