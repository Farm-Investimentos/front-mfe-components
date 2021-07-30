import Toggle from './Toggle.vue';

export default {
    title: 'Example/Buttons/Toggle',
    component: Toggle,
};

export const Primary = () => ({
    components: { Toggle },
    template: '<Toggle label="Botão" />',
});

export const Secondary = () => ({
    components: { Toggle },
    template: '<Toggle label="Botão" position="right" />',
});

export const Opened = () => ({
    components: { Toggle },
    template: '<Toggle label="Botão" :pressed="true" />',
});

Primary.storyName = 'Básico';
Secondary.storyName = 'Ícone na direita';
Opened.storyName = 'Aberto';
