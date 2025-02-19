import { withDesign } from 'storybook-addon-designs';
import RangeDatePicker from './RangeDatePicker';

export default {
	title: 'Form/RangeDatePicker',
	component: RangeDatePicker,
	decorators: [withDesign],
	parameters: {
		docs: {
			description: {
				component: `Range Input Date Picker<br />
				selector: <em>farm-input-rangedatepicker</em><br />
				<span style="color: var(--farm-primary-base);">ready for use</span>
				`,
			},
		},
		viewMode: 'docs',
	},
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/1f84J4m1IBghWhozQvdyyt/%E2%9C%8D---Design-System?node-id=1503%3A810',
	},
};

export const Primary = () => ({
	data() {
		return {
			date: null,
		};
	},
	template: `<div style='max-width: 320px'>
	<RangeDatePicker inputId="input-custom-id" v-model="date" />
	date: {{ date }}
	</div>`,
});

export const InitialValue = () => ({
	data() {
		return {
			date: ['2023-08-01', '2023-08-05'],
		};
	},
	template: `<div style='max-width: 320px'>
		<RangeDatePicker inputId="input-custom-id" :value="date" />
		date: {{ date }}
	</div>`,
});

export const readOnly = () => ({
	data() {
		return {
			date: ['2023-08-01', '2023-08-05'],
		};
	},
	template: `<div style='max-width: 320px'>
		<RangeDatePicker readonly inputId="input-custom-id" :value="date" />
		date: {{ date }}
	</div>`,
});

export const MinMax = () => ({
	template: `<RangeDatePicker inputId="input-custom-id" min="2022-01-17" max="2022-02-15" />`,
});

export const Reset = () => ({
	data() {
		return {
			date: null,
		};
	},
	methods: {
		click() {
			this.$refs.datepickerExemple.clear();
		},
	},
	template: `<div style="width: 480px">
	<RangeDatePicker ref="datepickerExemple" inputId="input-custom-id" v-model="date" />
	date: {{ date }}
		<farm-btn @click="click">
			reset
		</farm-btn>
	</div>`,
});

export const disabled = () => ({
	data() {
		return {
			date: ['2023-08-01', '2023-08-05'],
		};
	},
	template: `<div style='max-width: 320px'>
		<RangeDatePicker disabled inputId="input-custom-id" :value="date" />
		date: {{ date }}
	</div>`,
});

export const ValidacaoInputPadrao = () => ({
	data() {
		return {
			date: null,
		};
	},
	template: `<div style='max-width: 320px'>
		<farm-label>Selecione uma data entre 01/01/2025 e 31/12/2025</farm-label>
		<RangeDatePicker
			inputId="input-custom-id"
			v-model="date"
			min="2025-01-01"
			max="2025-12-31"
			validateInput
			required
		/>
		date: {{ date }}
	</div>`,
});

export const ValidacaoInputCustomizada = () => ({
	data() {
		return {
			date: null,
		};
	},
	template: `<div style='max-width: 320px'>
		<farm-label>Selecione uma data do primeiro semestre de 2025</farm-label>
		<RangeDatePicker
			inputId="input-custom-id"
			v-model="date"
			min="2025-01-01"
			max="2025-06-30"
			validateInput
			required
			outOfRangeMessage="Por favor, selecione datas dentro do primeiro semestre de 2025 ({min} até {max})"
		/>
		date: {{ date }}
	</div>`,
});
