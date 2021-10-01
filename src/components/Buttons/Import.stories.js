import ImportButton from './Import.vue';

export default {
    title: 'Example/Buttons/Import',
    component: ImportButton,
};

export const Primary = () => ({
    components: { ImportButton },
    template: '<ImportButton />',
});

export const CustomLabel = () => ({
    components: { ImportButton },
    template: '<ImportButton label="Label custom" />',
});

Primary.storyName = 'Básico';
CustomLabel.storyName = 'Label customizado';
