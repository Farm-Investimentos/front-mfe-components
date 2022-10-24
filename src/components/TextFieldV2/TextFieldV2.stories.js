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
			v1: 'input 1',
			v2: '',
			v3: '',
			v4: '',
			rules: {
				required: value => !!value || 'Required field',
				email: v =>
					/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'Must be an e-mail',
			},
		};
	},
	template: `<div style="width: 480px">
		<farm-label required>Required field</farm-label>
		<farm-textfield-v2 v-model="v1" :rules="[rules.required]" />

		<farm-label>E-mail</farm-label>
		<farm-textfield-v2 v-model="v2" :rules="[rules.email]" />

		<farm-label required>Required and e-mail</farm-label>
		<farm-textfield-v2 v-model="v3" :rules="[rules.required, rules.email]" />

		<farm-label required>Required field with hint</farm-label>
		<farm-textfield-v2 v-model="v4" :rules="[rules.required]" hint="hint text" />

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
	template: `<div style="width: 480px; display: flex;">
		<farm-textfield-v2 v-model="v" hint="Hint text" />
		<farm-textfield v-model="v" hint="Hint text" persistent-hint />
	</div>`,
});

export const UpdateValue = () => ({
	data() {
		return {
			counter: 1,
			v: '1',
		};
	},
	methods: {
		onClick() {
			this.counter++;
			this.v = this.counter;
		},
	},
	template: `<div style="width: 480px">
		<farm-textfield-v2 v-model="v" />
		<farm-btn @click="onClick">Add 1 to counter and update v-model</farm-btn>
		<br />counter: {{ counter }}
		<br />v-model: {{ v }}
	</div>`,
});

export const Types = () => ({
	data() {
		return {
			types: ['text', 'password', 'email', 'date', 'search', 'color', 'tel', 'url'],
		};
	},
	template: `<div style="width: 480px">
		<div v-for="type in types" :key="'input_type_' + type">
			<farm-label>Type: {{ type }}</farm-label>
			<farm-textfield-v2 :type="type" />
		</div>
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
		<farm-textfield-v2 v-model="v" ref="input" />
		
		<farm-label required>Required</farm-label>
		<farm-textfield-v2 v-model="v" ref="inputValidatable" :rules="[rules.required]" />
		
		<farm-btn @click="reset">reset</farm-btn>

	</div>`,
});
