import DatePicker from './DatePicker';

export default {
	title: 'Form/DatePicker',
	component: DatePicker,
	parameters: {
		docs: {
			description: {
				component: `Input Date Picker<br />
				selector: <em>farm-input-datepicker</em><br />
				<span style="color: var(--farm-primary-base);">ready for use</span>
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
        <farm-input-datepicker inputId="input-custom-id-0" v-model="date" />
		{{ date }}
    </div>`,
});

export const InitValue = () => ({
	data() {
		return {
			date: '2023-08-01',
		};
	},
	template: `<div style='max-width: 320px'><farm-input-datepicker inputId="input-custom-id-1" v-model="date" /></div>`,
});

export const MinMaxDates = () => ({
	data() {
		return {
			date: '',
		};
	},
	template: `<div style='max-width: 320px'>
        <farm-input-datepicker inputId="input-custom-id-2" max="2021-12-02" min="2021-07-01" v-model="date" />
        max="2021-12-02" min="2021-07-01"
    </div>`,
});

export const RequiredDates = () => ({
	data() {
		return {
			date: '',
		};
	},
	template: `<div style='max-width: 320px'>
        <farm-input-datepicker inputId="input-custom-id-3" v-model="date" :required="true" />
    </div>`,
});

export const Readonly = () => ({
	template: `<div style='max-width: 320px'>
        <farm-input-datepicker :readonly="true"  value="2021-08-01" inputId="input-custom-id-3"/>
    </div>`,
});

export const IsNull = () => ({
	data() {
		return {
			date: null,
		};
	},
	template: `<div style='max-width: 320px'>
		<farm-input-datepicker inputId="input-custom-id-8" v-model="date" :required="true" />
    </div>`,
});

export const OnlyAllowedDates = () => ({
	data() {
		return {
			date: '',
		};
	},
	props: {
		allowedDates: {
			default: () => (value) => {
				const day = parseInt(value.split('-')[2], 10);
				return [5, 10, 15, 20, 25].includes(day);
			}
		}
	},
	template: `<div style='max-width: 320px'><farm-input-datepicker position="bottom" :allowed-dates="allowedDates" inputId="input-custom-id-1" v-model="date" /></div>`,
});

export const WithInitialMonth = () => ({
	data() {
		return {
			date: '',
			pickerDate: '2023-01'
		};
	},
	template: `<div style='max-width: 320px'>
        <farm-input-datepicker inputId="input-custom-id-0" v-model="date" position="center" :picker-date.sync="pickerDate" />
		{{ date }}
    </div>`,
});

export const TopPositioned = () => ({
	data() {
		return {
			date: '',
		};
	},
	template: `<div style='max-width: 320px'>
        <farm-input-datepicker inputId="input-custom-id-0" v-model="date" position="top" />
		{{ date }}
    </div>`,
});

export const CenterPositioned = () => ({
	data() {
		return {
			date: '',
		};
	},
	template: `<div style='max-width: 320px'>
        <farm-input-datepicker inputId="input-custom-id-0" v-model="date" position="center" />
		{{ date }}
    </div>`,
});

export const MultipleDates = () => ({
	data() {
		return {
			date: [],
		};
	},
	computed: {
		dates() {
			return this.date.join('  ///  ');
		}
	},
	template: `<div style='max-width: 320px'>
        <farm-input-datepicker inputId="input-custom-id-0" v-model="date" multiple required />
		{{ dates }}
    </div>`,
});