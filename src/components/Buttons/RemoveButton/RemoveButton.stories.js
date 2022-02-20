import RemoveButton from './RemoveButton.vue';

export default {
    title: 'API/Buttons/Remove',
    component: RemoveButton,
};

export const Primary = () => ({
    components: { RemoveButton },
    template: '<RemoveButton />',
});

export const Secondary = () => ({
    components: { RemoveButton },
    template: '<RemoveButton label="Custom label" />',
});

Primary.storyName = 'Básico';
Secondary.storyName = 'Custom label';
