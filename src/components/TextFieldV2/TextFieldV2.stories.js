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
	methods: {
		show() {
			alert('iconLeftAction');
		},
	},
	template: `<div style="width: 480px">
		<farm-textfield-v2 v-model="v" iconLeft="eye" iconLeftAction="this.show" iconRight="eye" iconRightAction="this.show" hintText="Hint text" isUntouched />
	</div>`,
});

export const Validate = () => ({
	data() {
		return {
			v: 'input',
			rules: {
				required: value => !!value || 'Campo obrigatório',
			}
		};
	},
	template: `<div style="width: 480px">
		<farm-label required>Required field</farm-label>
		<farm-textfield-v2 v-model="v" :rules="[rules.required]" />
	</div>`,
});

/*
export const Untouched = () => ({
	data() {
		return {
			v: 'input text',
		};
	},
	methods: {
		show() {
			alert('iconLeftAction');
		},
	},
	template: `<div style="width: 480px">
		<farm-textfield-v2 v-model="v" iconLeft="eye" iconLeftAction="this.show" iconRight="eye" iconRightAction="this.show" hintText="Hint text" isUntouched />
	</div>`,
});

export const TouchedSuccess = () => ({
	data() {
		return {
			v: 'input text',
		};
	},
	template: `<div style="width: 480px">
		<farm-textfield-v2 v-model="v" iconRight="eye" hintText="Hint text" isSuccess />
	</div>`,
});

export const TouchedError = () => ({
	data() {
		return {
			v: 'input text',
		};
	},
	template: `<div style="width: 480px">
		<farm-textfield-v2 v-model="v" iconRight="eye" hintText="Hint text error" isError errorMessage="Campo obrigatório" />
	</div>`,
});

export const TouchedDisabled = () => ({
	data() {
		return {
			v: 'input text',
		};
	},
	template: `<div style="width: 480px">
		<farm-textfield-v2 v-model="v" iconLeft="eye" iconLeftAction="this.show" hintText="Hint text" isDisabled />
	</div>`,
});
*/
