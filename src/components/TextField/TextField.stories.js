import { withDesign } from 'storybook-addon-designs';
import TextField from './TextField.vue';

export default {
	title: 'Form/TextField',
	component: TextField,
	decorators: [withDesign],
	parameters: {
		docs: {
			description: {
				component: `Text field<br />
				selector: <em>farm-texfield</em>
				`,
			},
		},
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/1f84J4m1IBghWhozQvdyyt/%E2%9C%85---Design-System-%7C-v1?node-id=1503%3A227',
		},
		viewMode: 'docs',
	},
};

export const Primary = () => ({
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

export const BindVar = () => ({
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
