import DatePicker from './DatePicker';

export default {
	title: 'Example/Form/DatePicker',
	component: DatePicker,
};

export const Primary = () => ({
	components: { DatePicker },
	template: `<div style='max-width: 320px'>
        <DatePicker inputId="input-custom-id" />
    </div>`,
});

export const InitValue = () => ({
	components: { DatePicker },
	template: `<div style='max-width: 320px'><DatePicker inputId="input-custom-id" value="2021-08-01" /></div>`,
});

export const MinMaxDates = () => ({
	components: { DatePicker },
	template: `<div style='max-width: 320px'>
        <DatePicker inputId="input-custom-id" max="2021-12-02" min="2021-07-01" />
        max="2021-12-02" min="2021-07-01"
    </div>`,
});

Primary.storyName = 'Básico';
InitValue.storyName = 'Data inicial';
MinMaxDates.storyName = 'Data mínima e máxima';
