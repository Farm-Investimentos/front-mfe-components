import Toggle from './Toggle.vue';

export default {
    title: 'Example/Buttons/Toggle',
    component: Toggle,
};

export const Primary = () => ({
    components: { Toggle },
    template: '<Toggle label="Botão" />',
});

Primary.storyName = 'Básico';
