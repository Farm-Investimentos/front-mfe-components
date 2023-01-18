import { withDesign } from 'storybook-addon-designs';
import TextFieldV2 from './TextFieldV2.vue';

import createNumberMask from 'text-mask-addons/dist/createNumberMask';
const currencyMask = createNumberMask({
	prefix: 'R$',
	allowDecimal: true,
	includeThousandsSeparator: true,
	thousandsSeparatorSymbol: '.',
	decimalSymbol: ',',
	allowNegative: false,
});

export default {
	title: 'Form/TextFieldV2',
	component: TextFieldV2,
	decorators: [withDesign],
	parameters: {
		docs: {
			description: {
				component: `Text field v2<br />
				selector: <em>farm-textfield-v2</em><br />
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
		<farm-label for="select_label">
			label
		</farm-label>
		<farm-textfield-v2 id="select_label" v-model="v" />
		v-model: {{ v }}
	</div>`,
});

export const Disabled = () => ({
	data() {
		return {
			v: 'input text',
		};
	},
	template: `<div style="width: 480px">
		<farm-textfield-v2 v-model="v" disabled />
		<farm-textfield-v2 v-model="v" disabled icon="book" />
	</div>`,
});

export const Readonly = () => ({
	data() {
		return {
			v: 'input text',
		};
	},
	template: `<div style="width: 480px">
		<farm-textfield-v2 v-model="v" readonly />
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
		<farm-textfield-v2 v-model="v1" :rules="[rules.required]" />

		<farm-label>E-mail</farm-label>
		<farm-textfield-v2 v-model="v2" :rules="[rules.email]" />

		<farm-label required>Required and e-mail</farm-label>
		<farm-textfield-v2 v-model="v3" :rules="[rules.required, rules.email]" />

		<farm-label required>Required field with hint</farm-label>
		<farm-textfield-v2 v-model="v4" :rules="[rules.required]" hint="hint text" />

		<farm-label required>Required field with icon</farm-label>
		<farm-textfield-v2 v-model="v1" :rules="[rules.required]" icon="eye" />

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
		<farm-textfield-v2 v-model="v" icon="eye" @onClickIcon="show" />
		<farm-textfield-v2 v-model="v" icon="eye" icon-position="left" @onClickIcon="show" />
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

export const Mask = () => ({
	data() {
		return {
			v: '',
			v2: '',
			mask: '###.###.###/##',
			currencyMask,
		};
	},
	template: `<div style="width: 480px">
		<farm-label>CPF Mask ({{ mask }})</farm-label>
		<farm-textfield-v2 v-model="v" :mask="mask" />
		v-model: {{ v }}

		<farm-label>Number Mask (R$ ##.###.###,##)</farm-label>
		<farm-textfield-v2 v-model="v2" :mask="currencyMask" />
		v-model: {{ v2 }}

	</div>`,
});

export const ToggleVisibility = () => ({
	data() {
		return {
			v: 'hidden password',
			visible: false,
		};
	},
	methods: {
		toggle() {
			this.visible = !this.visible;
		},
	},
	template: `<div style="width: 480px">
		<farm-textfield-v2 v-model="v" :type="visible ? 'text' : 'password'"  :icon="visible ? 'eye-off' : 'eye'" @onClickIcon="toggle" />
	</div>`,
});
