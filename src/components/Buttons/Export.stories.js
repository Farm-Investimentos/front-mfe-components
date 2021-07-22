import Export from './Export.vue';

export default {
    title: 'Example/Buttons/Export',
    component: Export,
};

export const Primary = () => ({
    components: { Export },
    template: '<Export />',
});

Primary.storyName = 'Básico';
