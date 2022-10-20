import { withDesign } from 'storybook-addon-designs';
import TextFieldV2 from './TextFieldV2.vue';

export default {
	title: 'Form/TextFieldV2',
	component: TextFieldV2,
	decorators: [withDesign],
	parameters: {
		docs: {
			description: {
				component: `Text field v2<br />
				selector: <em>farm-texfield-v2</em><br />
				<span style="color: var(--farm-extra-1-base);">development</span>
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
			v: 'input text',
		};
	},
	template: `<div style="width: 480px">
		<farm-textfield-v2 v-model="v" />
		v-model: {{ v }}
	</div>`,
});

export const Validate = () => ({
	data() {
		return {
			v: 'input',
			rules: {
				required: value => !!value || 'Campo obrigatório',
			},
		};
	},
	template: `<div style="width: 480px">
		<farm-label required>Required field</farm-label>
		<farm-textfield-v2 v-model="v" :rules="[rules.required]" />
	</div>`,
});

export const Icon = () => ({
	data() {
		return {
			v: '',
		};
	},
	methods: {
		show() {
			alert('On icon click');
		},
	},
	template: `<div style="width: 480px">
		<farm-textfield-v2 v-model="v" icon="eye" onClickIcon="this.show" />
		<farm-textfield-v2 v-model="v" icon="eye" icon-position="left" onClickIcon="this.show" />
	</div>`,
});

export const HintText = () => ({
	data() {
		return {
			v: 'input text',
		};
	},
	template: `<div style="width: 480px">
		<farm-textfield-v2 v-model="v" hintText="Hint text" />
	</div>`,
});
