import DefaultTextField from './DefaultTextField.vue';

export default {
    title: 'Example/Form/DefaultTextField',
    component: DefaultTextField,
};

export const Primary = () => ({
    components: { DefaultTextField },
    template: '<DefaultTextField :item="{ label: \'Nome do campo\'}" />',
});

Primary.storyName = 'Básico';
