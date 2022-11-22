import Checkbox from './Checkbox';
import baseThemeColors from '../../configurations/_theme-colors-base.scss';
import sizes from '../../configurations/sizes';
const colors = Object.keys(baseThemeColors);
const variations = ['', 'darken', 'lighten'];

export default {
	title: 'Form/Checkbox',
	component: Checkbox,
	parameters: {
		docs: {
			description: {
				component: `Checkbox<br />
				selector: <em>farm-checkbox</em><br />
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
			isChecked: null,
		};
	},
	template: `<div>
		<farm-checkbox v-model="isChecked" value="1" />
		isChecked (value): {{ isChecked }}
	</div>`,
});

export const DefaultCheck = () => ({
	data() {
		return {
			isChecked: true,
		};
	},
	template: `<div>
		<farm-checkbox v-model="isChecked" :value="true" />
		isChecked (value): {{ isChecked }}
	</div>`,
});

export const WithLabel = () => ({
	data() {
		return {
			isChecked: false,
		};
	},
	template: `<div>
		<farm-checkbox v-model="isChecked" value="1" label="custom label" />
	</div>`,
});

export const Disabled = () => ({
	data() {
		return {
			isChecked: true,
			notIsChecked: false,
		};
	},
	template: `<div>
		<farm-checkbox v-model="isChecked" :value="true" :disabled="true" /><br />
		<farm-checkbox v-model="notIsChecked" value="" :disabled="true" />
	</div>`,
});

export const Colors = () => ({
	data() {
		return {
			isChecked: true,
			colors,
			variations,
		};
	},
	template: `<div style="display: flex; flex-direction: row; flex-wrap: wrap;">
	<div v-for="color in colors" style="width: 33.3%;">
		<h4>{{ color }}</h4>
		<div
			style="display: flex; flex-direction: column;"
			v-for="variation in variations"
			:key="color + '_' + variation"
		>
			<farm-checkbox
				v-model="isChecked"
				:value="true"
				:color="color"
				:variation="variation"
				:label="variation || 'Base'"			
			/>
			</div>
		</div>
	</div>`,
});

export const Sizes = () => ({
	data() {
		return {
			sizes,
			isChecked: true,
		};
	},
	template: `<div style="display: flex; flex-direction: column; flex-wrap: wrap;">
        <div v-for="size of sizes">
			<farm-checkbox v-model="isChecked" :size="size" :value="true" :label="size" /><br />
        </div>
	</div>`,
});

export const Indeterminate = () => ({
	data() {
		return {
			sizes,
			isChecked: true,
		};
	},
	template: `<div>
		<farm-checkbox :indeterminate="true" v-model="isChecked" :value="true"  />
	</div>`,
});