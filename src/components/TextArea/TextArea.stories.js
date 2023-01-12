import { withDesign } from 'storybook-addon-designs';
import TextArea from './TextArea.vue';

export default {
	title: 'Form/TextArea',
	component: TextArea,
	decorators: [withDesign],
	parameters: {
		docs: {
			description: {
				component: `Text Area<br />
				selector: <em>farm-textarea</em><br />
				<span style="color: var(--farm-primary-base);">ready for use</span>
				`,
			},
		},
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/jnZXo2e0nRJ3fVXl4Et8t4/%E2%9C%8D-Design-System-%7C-BACKUP-(10%2F10%2F2022)?node-id=2491%3A4487',
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
	template: `<div style="width: 480px;">
		<farm-textarea v-model="v" />
		v-model: {{ v }}
	</div>`,
});

export const Rows = () => ({
	data() {
		return {
			v: 'input text',
		};
	},
	template: `<div style="width: 480px;">
		<farm-textarea v-model="v" rows="10" />
		<farm-textarea v-model="v" rows="3" />
	</div>`,
});

export const Disabled = () => ({
	data() {
		return {
			v: 'input text',
		};
	},
	template: `<div style="width: 480px">
		<farm-textarea v-model="v" disabled />
	</div>`,
});

export const Readonly = () => ({
	data() {
		return {
			v: 'input text',
		};
	},
	template: `<div style="width: 480px">
		<farm-textarea v-model="v" readonly />
	</div>`,
});

export const Validate = () => ({
	data() {
		return {
			v1: 'input 1',
			v2: '',
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
		<farm-textarea v-model="v1" :rules="[rules.required]" />

		<farm-label>E-mail</farm-label>
		<farm-textarea v-model="v2" :rules="[rules.email]" />

		<farm-label required>Required field with hint</farm-label>
		<farm-textarea v-model="v4" :rules="[rules.required]" hint="hint text" />

	</div>`,
});

export const HintText = () => ({
	data() {
		return {
			v: 'input text',
		};
	},
	template: `<div style="width: 480px; display: flex;">
		<farm-textarea v-model="v" hint="Hint text" />
	</div>`,
});

export const Reset = () => ({
	data() {
		return {
			v: 'input text',
			rules: {
				required: value => !!value || 'Required field',
			},
		};
	},
	methods: {
		reset() {
			this.$refs.input.reset();
			this.$refs.inputValidatable.reset();
		},
	},
	template: `<div style="width: 480px">

		<farm-label>Not Required</farm-label>
		<farm-textarea v-model="v" ref="input" />
		
		<farm-label required>Required</farm-label>
		<farm-textarea v-model="v" ref="inputValidatable" :rules="[rules.required]" />
		
		<farm-btn @click="reset">reset</farm-btn>

	</div>`,
});