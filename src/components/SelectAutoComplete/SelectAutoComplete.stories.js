import SelectAutoComplete from './SelectAutoComplete.vue';

export default {
	title: 'Form/SelectAutoComplete',
	component: SelectAutoComplete,
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
		<farm-select-auto-complete id="select_id" v-model="v" :items="items" />
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
		<farm-select-auto-complete v-model="v" :items="items" />
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
		<farm-select-auto-complete v-model="v" :items="items" readonly />
		v-model: {{ v }}
	</div>`,
});

export const HintText = () => ({
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
		<farm-select-auto-complete v-model="v" :items="items" hint="Hint Text" :persistent-hint="false" />
		v-model: {{ v }}
	</div>`,
});

export const PersistentHintText = () => ({
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
		<farm-select-auto-complete v-model="v" :items="items" hint="Hint Text" />
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
		<farm-select-auto-complete v-model="v" :items="items" disabled />
		v-model: {{ v }}
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
		<farm-select-auto-complete v-model="v" :items="items" :rules="[rules.required]" />
		v-model: {{ v }}
	</div>`,
});

export const Reset = () => ({
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
	methods: {
		click() {
			this.$refs.select.reset();
		},
	},
	template: `<div style="width: 480px">
		<farm-select-auto-complete v-model="v" :items="items" ref="select" :rules="[rules.required]" />
		v-model: {{ v }}
		<farm-btn @click="click">
			reset
		</farm-btn>
	</div>`,
});

export const CustomKeys = () => ({
	data() {
		return {
			v: null,
			items: [
				{ id: 1, label: ' value 1' },
				{ id: 2, label: ' value 2' },
				{ id: 3, label: ' value 3' },
			],
		};
	},
	template: `<div style="width: 480px">
		<farm-select-auto-complete v-model="v" :items="items" item-text="label" item-value="id" />
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
		<farm-select-auto-complete v-model="v" :items="items" />
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
		<farm-select-auto-complete v-model="v" :items="items" />
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
		<farm-select-auto-complete v-model="v" :items="items" multiple />
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
		<farm-select-auto-complete
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
				v: null,
			},
			items: [
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
		<farm-select-auto-complete
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
		<farm-select-auto-complete id="select_id" v-model="v" :items="items" @change="onChange" />

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
		<farm-select-auto-complete v-model="v" :items="items" multiple has-all-option />
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
		<farm-select-auto-complete v-model="v" :items="items" multiple has-all-option />
		v-model: {{ v }}
	</div>`,
});
