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
		date: {{ date }}
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
			min: '2022-07-01',
			max: '2022-12-02',
		};
	},
	template: `<div style='max-width: 320px'>
        <farm-input-datepicker inputId="input-custom-id-2" :max="max" :min="min" v-model="date" />
        max {{ max }} min {{ min }}
    </div>`,
});

export const RequiredDate = () => ({
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
	data() {
		return {
			date: '2021-08-01',
		};
	},
	template: `<div style='max-width: 320px'>
        <farm-input-datepicker :readonly="true" v-model="date" inputId="input-custom-id-3"/>
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
			allowedDays: [5, 10, 15, 20, 25],
		};
	},
	template: `<div style='max-width: 320px'>
		<farm-input-datepicker position="bottom" :allowed-days="allowedDays" inputId="input-custom-id-1" v-model="date" />
	</div>`,
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