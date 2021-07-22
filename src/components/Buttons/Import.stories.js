import Import from './Import.vue';

export default {
    title: 'Example/Buttons/Import',
    component: Import,
};

export const Primary = () => ({
    components: { Import },
    template: '<Import />',
});

Primary.storyName = 'Básico';
