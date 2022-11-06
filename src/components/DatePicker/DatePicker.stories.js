import DatePicker from './DatePicker';

export default {
	title: 'Form/DatePicker',
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
	data() {
		return {
			date: '',
		};
	},
	template: `<div style='max-width: 320px'>
        <DatePicker inputId="input-custom-id-0" v-model="date" />
		{{ date }}
    </div>`,
});

export const InitValue = () => ({
	template: `<div style='max-width: 320px'><DatePicker inputId="input-custom-id-1" value="2021-08-01" /></div>`,
});

export const MinMaxDates = () => ({
	template: `<div style='max-width: 320px'>
        <DatePicker inputId="input-custom-id-2" max="2021-12-02" min="2021-07-01" />
        max="2021-12-02" min="2021-07-01"
    </div>`,
});

export const RequiredDates = () => ({
	template: `<div style='max-width: 320px'>
        <DatePicker inputId="input-custom-id-3" :required="true" />
    </div>`,
});

export const ReadonlyFalse = () => ({
	template: `<div style='max-width: 320px'>
        <DatePicker :readonly="false" inputId="input-custom-id-3"/>
    </div>`,
});

