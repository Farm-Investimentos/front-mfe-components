import DatePicker from './DatePicker';

export default {
    title: 'Example/Form/DatePicker',
    component: DatePicker,
};

export const Primary = () => ({
    components: { DatePicker },
    template: '<DatePicker inputId="input-custom-id" />',
});

export const Secondary = () => ({
    components: { DatePicker },
    template: `<DatePicker inputId="input-custom-id" value="2021-08-01" />`,
});

export const Tertiary = () => ({
    components: { DatePicker },
    template: `<DatePicker inputId="input-custom-id" max="2021-08-02" min="2021-07-01" value="2021-08-01" />`,
});

Primary.storyName = 'Básico';
Secondary.storyName = 'Data inicial';
Tertiary.storyName = 'Data mínima e máxima';