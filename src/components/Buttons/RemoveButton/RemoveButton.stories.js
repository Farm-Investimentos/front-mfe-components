import RemoveButton from './RemoveButton.vue';

export default {
    title: 'Buttons/Remove',
    component: RemoveButton,
};

export const Primary = () => ({
    template: '<farm-btn-remove />',
});

export const Secondary = () => ({
    template: '<farm-btn-remove label="Custom label" />',
});

Primary.storyName = 'Básico';
Secondary.storyName = 'Custom label';
