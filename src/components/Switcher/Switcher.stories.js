import Switch from './Switcher';
import baseThemeColors from '../../configurations/_theme-colors-base.module.scss';
const colors = Object.keys(baseThemeColors);

export default {
	title: 'Form/Switcher',
	component: Switch,
	parameters: {
		viewMode: 'docs',
		docs: {
			description: {
				component: `Switcher<br />
				selector: <em>farm-switcher</em><br />
				<span style="color: var(--farm-primary-base);">ready for use</span>`,
			},
		},
	},
};

export const Primary = () => ({
	data() {
		return {
			selectedValue: true,
		};
	},
	template: `<div>
	<farm-switcher v-model="selectedValue" block />
	</div>`,
});

export const OnDisabled = () => ({
	data() {
		return {
			selectedValue: true,
		};
	},
	template: `<div>
	<farm-switcher v-model="selectedValue" block :disabled="true" />
	</div>`,
});

export const Off = () => ({
	data() {
		return {
			selectedValue: false,
		};
	},
	template: `<div>
	<farm-switcher v-model="selectedValue" block :disabled="false" />
	</div>`,
});

export const OffDisabled = () => ({
	data() {
		return {
			selectedValue: false,
		};
	},
	template: `<div>
	<farm-switcher v-model="selectedValue" block :disabled="true" />
	</div>`,
});

export const Colors = () => ({
	data() {
		return {
			colors,
			selectedValue: true,
		};
	},
	template: `
	<farm-row>
		<farm-col
			cols="12"
			md="3"
			v-for="color in colors"
			:key="'color_' + color"
		>
			<farm-bodytext>{{ color }}</farm-bodytext>
			<farm-switcher
				v-model="selectedValue"
				:color="color"
			/>
			<farm-caption>Desabilitado</farm-caption>
			<farm-switcher
				disabled
				v-model="selectedValue"
				:color="color"
			/>
		</farm-col>

	</farm-row>`,
});

export const OutsideChangeVmodel = () => ({
	data() {
		return {
			selectedValue: true,
		};
	},
	methods: {
		onClick() {
			this.selectedValue = !this.selectedValue;
		},
	},
	template: `<div>
		<farm-switcher v-model="selectedValue" block />
		<farm-btn @click="onClick">
		toggle selection: {{ selectedValue }}
		</farm-btn>
	</div>`,
});
