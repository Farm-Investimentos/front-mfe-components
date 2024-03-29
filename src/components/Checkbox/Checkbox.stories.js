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

export const Value = () => ({
	data() {
		return {
			option1: 'option1',
			option2: 'option2',
			option3: 'option3',
		};
	},
	template: `<div>
	<div class="d-flex">
	<farm-checkbox v-model="option1" value="option1" class="mr-2" /> 
		option1 : {{option1}}
	</div>
	<div class="d-flex align-center">
	<farm-checkbox v-model="option2" value="option2" class="mr-2 my-2" /> 
		option2 : {{option2}}
	</div>
	<div class="d-flex">
	<farm-checkbox v-model="option3" value="option3" class="mr-2" /> 
		option3 : {{option3}}
	</div>
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
		<farm-checkbox v-model="notIsChecked" value="1" :disabled="true" />
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

export const ResetByValue = () => ({
	data() {
		return {
			isChecked: true,
		};
	},
	template: `<div>
		<farm-checkbox v-model="isChecked" :value="true" />
		isChecked (value): {{ isChecked }}
		<farm-btn @click="isChecked = null;">reset</farm-btn>
	</div>`,
});

export const ResetByMethod = () => ({
	data() {
		return {
			isChecked: true,
		};
	},
	template: `<div>
		<farm-checkbox v-model="isChecked" :value="true" ref="checkbox" />
		isChecked (value): {{ isChecked }}
		<farm-btn @click="$refs.checkbox.reset()">reset</farm-btn>
	</div>`,
});
