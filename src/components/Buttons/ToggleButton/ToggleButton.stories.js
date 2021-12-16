import ToggleButton from './ToggleButton.vue';

export default {
    title: 'Example/Buttons/ToggleButton',
    component: ToggleButton,
};

export const Primary = () => ({
    components: { ToggleButton },
    template: '<ToggleButton label="Botão" />',
});

export const Secondary = () => ({
    components: { ToggleButton },
    template: '<ToggleButton label="Botão" position="right" />',
});

export const Opened = () => ({
    components: { ToggleButton },
    template: '<ToggleButton label="Botão" :pressed="true" />',
});

Primary.storyName = 'Básico';
Secondary.storyName = 'Ícone na direita';
Opened.storyName = 'Aberto';
