import ImportButton from './Import.vue';

export default {
    title: 'Example/Buttons/Import',
    component: ImportButton,
};

export const Primary = () => ({
    components: { ImportButton },
    template: '<ImportButton />',
});

Primary.storyName = 'Básico';
