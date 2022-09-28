import RadioGroup from './RadioGroup';
import baseThemeColors from '../../configurations/_theme-colors-base.scss';

const colors = Object.keys(baseThemeColors);

export default {
	title: 'Form/RadioGroup',
	component: RadioGroup,
	parameters: {
		docs: {
			description: {
				component: `RadioGroup<br />
				selector: <em>farm-radio-group</em><br />
				<span style="color: green;">ready for use</span>

				`,
			},
		},
		viewMode: 'docs',
	},
};

export const Primary = () => ({
	data() {
		return {
			buttons: [
				{ label: 'Random text', id: 1 },
				{ label: 'In', id: 2 },
				{ label: 'Radio Group', id: 3 },
			],
			checkedValue: 1,
		};
	},
	template: `<div>
	    <farm-radio-group v-model="checkedValue" :buttons="buttons" />
	</div>`,
});

export const Reset = () => ({
	data() {
		return {
			buttons: [
				{ label: 'Button 1', id: 1 },
				{ label: 'Button 2', id: 2 },
				{ label: 'Button 3', id: 3 },
			],
			checkedValue: 1,
		};
	},
	methods: {
		reset() {
			this.$refs.radiogroupreset.reset();
		},
	},
	template: `<div>
	    <farm-radio-group v-model="checkedValue" :buttons="buttons" ref="radiogroupreset" /><br />
		<farm-btn @click="reset">Reset</farm-btn>
	</div>`,
});

export const Vertical = () => ({
	data() {
		return {
			buttons: [
				{ label: 'Button 1', id: 1 },
				{ label: 'Button 2', id: 2 },
				{ label: 'Button 3', id: 3 },
			],
			checkedValue: 1,
		};
	},
	template: `<div>
	    <farm-radio-group v-model="checkedValue" vertical :buttons="buttons" />
	</div>`,
});

export const Colors = () => ({
	data() {
		return {
			buttons: [
				{ label: 'Button 1', id: 1 },
				{ label: 'Button 2', id: 2 },
				{ label: 'Button 3', id: 3 },
			],
			checkedValue: 1,
			colors,
		};
	},
	template: `<div style="display: flex; flex-direction: row; flex-wrap: wrap;">
		<div v-for="color in colors" style="width: 33.3%; margin-bottom: 32px;">
			<h4 style="margin-bottom: 16px">{{ color }}</h4>
			<farm-radio-group v-model="checkedValue" vertical :color="color" :buttons="buttons" />
		</div>
	</div>`,
});
