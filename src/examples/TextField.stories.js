import { TextField } from '../main.ts';

export default {
	title: 'Examples/Form/TextField',
	component: TextField,
};

export const Primary = () => ({
	components: { 'farm-textfield': TextField },
	template: `<div style="width: 480px">
		<farm-textfield />
	</div>`,
});

export const BindVar = () => ({
	components: { 'farm-textfield': TextField },
	data() {
		return {
			v: '',
		};
	},
	template: `<div style="width: 480px">
		<farm-textfield v-model="v" />
		value: {{ v }}
	</div>`,
});

export const Rules = () => ({
	components: { 'farm-textfield': TextField },
	data() {
		return {
			v: '',
			rules: {
				required: val => !!val,
			},
		};
	},
	template: `<div style="width: 480px">
		<h4>Custom rule (required field)</h4>
		<farm-textfield v-model="v" :rules="[rules.required]" />
		value: {{ v }}
	</div>`,
});

Primary.storyName = 'Basic';
BindVar.storyName = 'Bind variable';
Rules.storyName = 'Rules';
