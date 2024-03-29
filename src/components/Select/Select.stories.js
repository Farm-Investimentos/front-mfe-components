import { withDesign } from 'storybook-addon-designs';
import Select from './Select.vue';

export default {
	title: 'Form/Select',
	component: Select,
	decorators: [withDesign],
	parameters: {
		docs: {
			description: {
				component: `Select<br />
				selector: <em>farm-select</em><br />
				<span style="color: var(--farm-primary-base);">ready for use</span><br />
				<a href="https://github.com/Farm-Investimentos/front-mfe-components/blob/develop/src/components/Select/Select.vue" target="_blank">Github</a>
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
				{ value: 0, text: 'value 0' },
				{ value: 1, text: 'value 1' },
				{ value: 2, text: 'value 2' },
				{ value: 3, text: 'value 3' },
			],
		};
	},
	template: `<div style="width: 120px;">
		<farm-label for="select_id">
			label
		</farm-label>
		<farm-select id="select_id" v-model="v" :items="items" />
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

export const HintText = () => ({
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
		<farm-select v-model="v" :items="items" hint="Hint Text" :persistent-hint="false" />
		v-model: {{ v }}
	</div>`,
});

export const PersistentHintText = () => ({
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
		<farm-select v-model="v" :items="items" hint="Hint Text" />
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

export const DisabledKeys = () => ({
	data() {
		return {
			v: null,
			items: [
				{ value: 1, text: ' value 1', disabled: true },
				{ value: 2, text: ' value 2', disabled: true },
				{ value: 3, text: ' value 3' },
			],
		};
	},
	methods: {
		allowAllOptions() {
			this.items = [
				{ value: 1, text: ' value 1' },
				{ value: 2, text: ' value 2' },
				{ value: 3, text: ' value 3' },
			];
		},
		reset() {
			this.items = [
				{ value: 1, text: ' value 1', disabled: true },
				{ value: 2, text: ' value 2', disabled: true },
				{ value: 3, text: ' value 3' },
			];
		},
	},
	template: `<div style="width: 480px">
		<farm-select v-model="v" :items="items" />
		v-model: {{ v }}
		<br><br>
		<farm-btn @click="allowAllOptions">Habilitar todos itens</farm-btn>
		<farm-btn @click="reset">Resetar</farm-btn>
	</div>`,
});

export const Validate = () => ({
	data() {
		return {
			v: null,
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
		},
	},
	template: `<div style="width: 480px">
		<farm-select v-model="v" :items="items" ref="select" :rules="[rules.required]" />
		v-model: {{ v }}
		<farm-btn @click="click">
			reset
		</farm-btn>
	</div>`,
});

export const CustomKeys = () => ({
	data() {
		return {
			v: 1,
			items: [
				{ id: 1, label: ' value 1' },
				{ id: 2, label: ' value 2' },
				{ id: 3, label: ' value 3' },
			],
		};
	},
	template: `<div style="width: 480px">
		<farm-select v-model="v" :items="items" item-text="label" item-value="id" />
		v-model: {{ v }}
	</div>`,
});

export const OutsideChangeVmodel = () => ({
	data() {
		return {
			v: null,
			items: [
				{ value: 1, text: 'value 1' },
				{ value: 2, text: 'value 2' },
				{ value: 3, text: 'value 3' },
			],
		};
	},
	methods: {
		onClick() {
			this.v = 2;
		},
	},
	template: `<div style="width: 120px">
		<farm-select v-model="v" :items="items" />
		v-model: {{ v }}
		<farm-btn @click="onClick">
		change value
		</farm-btn>
	</div>`,
});

export const NoItems = () => ({
	data() {
		return {
			v: null,
			items: [],
		};
	},
	template: `<div style="width: 120px">
		<farm-select v-model="v" :items="items" />
		v-model: {{ v }}
	</div>`,
});

export const Multiple = () => ({
	data() {
		return {
			v: null,
			items: [
				{ value: 0, text: 'value 0' },
				{ value: 1, text: 'value 1' },
				{ value: 2, text: 'value 2' },
				{ value: 3, text: 'value 3' },
			],
		};
	},
	template: `<div style="width: 400px">
		<farm-select v-model="v" :items="items" multiple />
		v-model: {{ v }}
	</div>`,
});

export const MultipleWithAllOption = () => ({
	data() {
		return {
			v: null,
			items: [
				{ value: 0, text: 'value 0' },
				{ value: 1, text: 'value 1' },
				{ value: 2, text: 'value 2' },
				{ value: 3, text: 'value 3' },
			],
		};
	},
	template: `<div style="width: 400px">
		<farm-select v-model="v" :items="items" multiple has-all-option />
		v-model: {{ v }}
	</div>`,
});

export const MultipleWithAllOptionAndDisabledItems = () => ({
	data() {
		return {
			v: null,
			items: [
				{ value: 0, text: 'value 0' },
				{ value: 1, text: 'value 1', disabled: true },
				{ value: 2, text: 'value 2' },
				{ value: 3, text: 'value 3', disabled: true },
			],
		};
	},
	template: `<div style="width: 400px">
		<farm-select v-model="v" :items="items" multiple has-all-option />
		v-model: {{ v }}
	</div>`,
});

export const MultipleInitValue = () => ({
	data() {
		return {
			v: [2, 3],
			items: [
				{ id: 0, label: 'value 0' },
				{ id: 1, label: 'value 1' },
				{ id: 2, label: 'value 2' },
				{ id: 3, label: 'value 3' },
			],
		};
	},
	methods: {
		click() {
			this.$refs.select.reset();
		},
	},
	template: `<div style="width: 400px">
		<farm-select
			v-model="v"
			item-value="id"
			item-text="label"
			ref="select"
			multiple
			:items="items"
		/>
		v-model: {{ v }}
		<farm-btn @click="click">
			reset
		</farm-btn>
	</div>`,
});

export const MultipleResetByValue = () => ({
	data() {
		return {
			filters: {
				v: [2, 3],
			},
			items: [
				{ id: 0, label: 'value 0' },
				{ id: 1, label: 'value 1' },
				{ id: 2, label: 'value 2' },
				{ id: 3, label: 'value 3' },
			],
		};
	},
	methods: {
		click() {
			this.filters.v = [1];
		},
	},
	template: `<div style="width: 400px">
		<farm-select
			v-model="filters.v"
			item-value="id"
			item-text="label"
			ref="select"
			multiple
			:items="items"
		/>
		v-model: {{ filters.v }}
		<farm-btn @click="click">
			reset
		</farm-btn>
	</div>`,
});

export const ChangeEvent = () => ({
	data() {
		return {
			v: null,
			items: [
				{ value: 0, text: 'value 0' },
				{ value: 1, text: 'value 1' },
				{ value: 2, text: 'value 2' },
				{ value: 3, text: 'value 3' },
			],
		};
	},
	methods: {
		onChange(value) {
			alert('Selected value: ' + value);
		},
	},
	template: `<div style="width: 120px;">
		<farm-label for="select_id">
			label
		</farm-label>
		<farm-select id="select_id" v-model="v" :items="items" @change="onChange" />

	</div>`,
});
