import { withDesign } from 'storybook-addon-designs';
import Select from './Select.vue';

export default {
	title: 'Form/SelectV2',
	component: Select,
	decorators: [withDesign],
	parameters: {
		docs: {
			description: {
				component: `Select<br />
				selector: <em>farm-select</em><br />
				<span style="color: var(--farm-extra-1-base);">development</span>
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
			v: null,
			items: [
				{ value: 1, text: ' value 1' },
				{ value: 2, text: ' value 2' },
				{ value: 3, text: ' value 3' },
			],
		};
	},
	template: `<div style="width: 480px">
		<farm-select v-model="v" :items="items" />
		v-model: {{ v }}
	</div>`,
});

export const InitialValue = () => ({
	data() {
		return {
			v: 1,
			items: [
				{ value: 1, text: ' value 1' },
				{ value: 2, text: ' value 2' },
				{ value: 3, text: ' value 3' },
			],
		};
	},
	template: `<div style="width: 480px">
		<farm-select v-model="v" :items="items" />
		v-model: {{ v }}
	</div>`,
});

export const Readonly = () => ({
	data() {
		return {
			v: 1,
			items: [
				{ value: 1, text: ' value 1' },
				{ value: 2, text: ' value 2' },
				{ value: 3, text: ' value 3' },
			],
		};
	},
	template: `<div style="width: 480px">
		<farm-select v-model="v" :items="items" readonly />
		v-model: {{ v }}
	</div>`,
});

export const Disabled = () => ({
	data() {
		return {
			v: 1,
			items: [
				{ value: 1, text: ' value 1' },
				{ value: 2, text: ' value 2' },
				{ value: 3, text: ' value 3' },
			],
		};
	},
	template: `<div style="width: 480px">
		<farm-select v-model="v" :items="items" disabled />
		v-model: {{ v }}
	</div>`,
});

export const Validate = () => ({
	data() {
		return {
			v: null,
			items: [
				{ value: null, text: '' },
				{ value: 1, text: ' value 1' },
				{ value: 2, text: ' value 2' },
				{ value: 3, text: ' value 3' },
			],
			rules: {
				required: value => !!value || 'Required field',
			},
		};
	},
	template: `<div style="width: 480px">
		<farm-label required>Required</farm-label>
		<farm-select v-model="v" :items="items" :rules="[rules.required]" />
		v-model: {{ v }}
	</div>`,
});


export const Reset = () => ({
	data() {
		return {
			v: 1,
			items: [
				{ value: 1, text: ' value 1' },
				{ value: 2, text: ' value 2' },
				{ value: 3, text: ' value 3' },
			],
			rules: {
				required: value => !!value || 'Required field',
			},
		};
	},
	methods: {
		click() {
			this.$refs.select.reset();
		}
	},
	template: `<div style="width: 480px">
		<farm-select v-model="v" :items="items" ref="select" :rules="[rules.required]" />
		v-model: {{ v }}
		<farm-btn @click="click">
			reset
		</farm-btn>
	</div>`,
});