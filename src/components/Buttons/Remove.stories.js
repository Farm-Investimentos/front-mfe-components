import Remove from './Remove.vue';

export default {
    title: 'Example/Buttons/Remove',
    component: Remove,
};

export const Primary = () => ({
    components: { Remove },
    template: '<Remove />',
});

export const Secondary = () => ({
    components: { Remove },
    template: '<Remove label="Custom label" />',
});

Primary.storyName = 'Básico';
Secondary.storyName = 'Custom label';
