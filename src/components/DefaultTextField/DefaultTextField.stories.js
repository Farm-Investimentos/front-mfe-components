import DefaultTextField from './DefaultTextField.vue';

export default {
    title: 'Example/Form/DefaultTextField',
    component: DefaultTextField,
};

export const Primary = () => ({
    components: { DefaultTextField },
    template: '<DefaultTextField :item="{ label: \'Nome do campo\'}" />',
});

export const Secondary = () => ({
    components: { DefaultTextField },
    template: '<DefaultTextField :item="{ label: \'Nome do campo\'} :required="true" />',
});

Primary.storyName = 'Básico';
Secondary.storyName = 'Label de obrigatório';
