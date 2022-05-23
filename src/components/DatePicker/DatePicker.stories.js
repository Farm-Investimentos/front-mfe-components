import DatePicker from './DatePicker';

export default {
	title: 'API/Form/DatePicker',
	component: DatePicker,
	parameters: {
		docs: {
			description: {
				component: `Input Date Picker<br />
				selector: <em>farm-input-datepicker</em>
				`,
			},
		},
		viewMode: 'docs',
	},
};

export const Primary = () => ({
	components: { DatePicker },
	template: `<div style='max-width: 320px'>
        <DatePicker inputId="input-custom-id-0" />
    </div>`,
});

export const InitValue = () => ({
	components: { DatePicker },
	template: `<div style='max-width: 320px'><DatePicker inputId="input-custom-id-1" value="2021-08-01" /></div>`,
});

export const MinMaxDates = () => ({
	components: { DatePicker },
	template: `<div style='max-width: 320px'>
        <DatePicker inputId="input-custom-id-2" max="2021-12-02" min="2021-07-01" />
        max="2021-12-02" min="2021-07-01"
    </div>`,
});

export const RequiredDates = () => ({
	components: { DatePicker },
	template: `<div style='max-width: 320px'>
        <DatePicker inputId="input-custom-id-3" :required="true" />
    </div>`,
});

export const readonlyFalse = () => ({
	components: { DatePicker },
	template: `<div style='max-width: 320px'>
        <DatePicker :readonly="false" inputId="input-custom-id-3"/>
    </div>`,
});

Primary.storyName = 'Básico';
InitValue.storyName = 'Data inicial';
MinMaxDates.storyName = 'Data mínima e máxima';
RequiredDates.storyName = 'Obrigatório';
readonlyFalse.storyName = 'Permitir digitação';
