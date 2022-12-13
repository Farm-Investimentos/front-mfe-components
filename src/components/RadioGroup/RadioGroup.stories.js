import RadioGroup from './RadioGroup';
import { withDesign } from 'storybook-addon-designs';

export default {
	title: 'Form/RadioGroup',
	component: RadioGroup,
	decorators: [withDesign],
	parameters: {
		docs: {
			description: {
				component: `RadioGroup<br />
				selector: <em>farm-radio-group</em><br />
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
			checkedValue: null,
		};
	},
	template: `<div>
	    <farm-radio-group v-model="checkedValue">
			<farm-radio v-model="checkedValue" value="1" /><farm-label>value 1</farm-label>
			<farm-radio v-model="checkedValue" value="2" /><farm-label>value 2</farm-label>
			<farm-radio v-model="checkedValue" value="3" /><farm-label>value 3</farm-label>
		</farm-radio-group>
		selectedValue: {{ checkedValue  }}
	</div>`,
});

export const Reset = () => ({
	data() {
		return {
			checkedValue: null,
		};
	},
	methods: {
		reset() {
			this.$refs.radioGroup.reset();
		},
	},
	template: `<div>
	    <farm-radio-group v-model="checkedValue" ref="radioGroup">
			<farm-radio v-model="checkedValue" value="1" /><farm-label>value 1</farm-label>
			<farm-radio v-model="checkedValue" value="2" /><farm-label>value 2</farm-label>
			<farm-radio v-model="checkedValue" value="3" /><farm-label>value 3</farm-label>
		</farm-radio-group>
		selectedValue: {{ checkedValue  }}
		<farm-btn @click="reset">reset</farm-btn>
	</div>`,
});

export const Validate = () => ({
	data() {
		return {
			checkedValue: null,
			rules: {
				required: value => !!value || 'Required field',
			},
		};
	},
	methods: {
		reset() {
			this.$refs.radioGroup.reset();
		},
	},
	template: `<div style="width: 480px">
		
		<farm-radio-group v-model="checkedValue" ref="radioGroup" :rules="[rules.required]">
			<farm-radio v-model="checkedValue" value="1" /><farm-label>value 1</farm-label>
			<farm-radio v-model="checkedValue" value="2" /><farm-label>value 2</farm-label>
			<farm-radio v-model="checkedValue" value="3" /><farm-label>value 3</farm-label>
		</farm-radio-group>
		selectedValue: {{ checkedValue  }}
		<farm-btn @click="reset">reset</farm-btn>

	</div>`,
});
