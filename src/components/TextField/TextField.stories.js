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
				selector: <em>farm-texfield</em><br />
				<span style="color: var(--farm-primary-base);">ready for use</span>
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
		<farm-textfield v-model="v" />
		value: {{ v }}
	</div>`,
});

export const Disabled = () => ({
	data() {
		return {
			v: 'disabled field',
		};
	},
	template: `<div style="width: 480px">
		<farm-textfield v-model="v" disabled />
	</div>`,
});

export const Readonly = () => ({
	data() {
		return {
			v: 'readonly field',
		};
	},
	template: `<div style="width: 480px">
		<farm-textfield v-model="v" readonly />
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

export const Validate = () => ({
	data() {
		return {
			v1: 'input 1',
			v2: '',
			v3: '',
			v4: '',
			rules: {
				required: value => !!value || 'Required field',
				email: v =>
					!v ||
					/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
					'Must be an e-mail',
			},
		};
	},
	template: `<div style="width: 480px">
		<farm-label required>Required field</farm-label>
		<farm-textfield v-model="v1" :rules="[rules.required]" />

		<farm-label>E-mail</farm-label>
		<farm-textfield v-model="v2" :rules="[rules.email]" />

		<farm-label required>Required and e-mail</farm-label>
		<farm-textfield v-model="v3" :rules="[rules.required, rules.email]" />

		<farm-label required>Required field with hint</farm-label>
		<farm-textfield v-model="v4" :rules="[rules.required]" hint="hint text" />

		<farm-label required>Required field with icon</farm-label>
		<farm-textfield v-model="v1" :rules="[rules.required]" append-icon="mdi-eye" />

	</div>`,
});