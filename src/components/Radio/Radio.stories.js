// import { withDesign } from 'storybook-addon-designs';
import Radio from './Radio.vue';
import sizes from '../../configurations/sizes';
import baseThemeColors from '../../configurations/_theme-colors-base.module.scss';
const colors = Object.keys(baseThemeColors);

export default {
	title: 'Form/Radio',
	component: Radio,
	// decorators: [withDesign],
	parameters: {
		docs: {
			description: {
				component: `Radio<br />
				selector: <em>farm-radio</em><br />
				<span style="color: var(--farm-primary-base);">ready for use</span>
				`,
			},
			design: {
				type: 'figma',
				url: 'https://www.figma.com/file/p62YDSTfWg0Mcnf5APfdvI/%E2%9C%8D-Design-System-%7C-v2?node-id=4913%3A20222&t=RIUg7AZerUGMSaM9-0',
			},
		},
		viewMode: 'docs',
	},
};

export const Primary = () => ({
	data() {
		return {
			v: null,
		};
	},
	template: `<div style="width: 480px">
		<farm-radio v-model="v" value="1" />
		v-model: {{ v }}
	</div>`,
});

export const Group = () => ({
	data() {
		return {
			v: null,
		};
	},
	template: `<div style="width: 480px">
		<farm-radio v-model="v" value="1" />
		<farm-radio v-model="v" value="2" />
		<farm-radio v-model="v" value="3" />
		v-model: {{ v }}
	</div>`,
});

export const Reset = () => ({
	data() {
		return {
			v: null,
		};
	},
	methods: {
		reset() {
			this.$refs.form.reset();
		},
	},
	template: `<div style="width: 480px">
		<farm-form ref="form">
			<farm-radio v-model="v" value="1" />
			<farm-radio v-model="v" value="2" />
			<farm-radio v-model="v" value="3" />
			v-model: {{ v }}
			<farm-btn @click="reset">reset by method</farm-btn>
			<farm-btn @click="v = null">reset by value</farm-btn>
		</farm-form>
	</div>`,
});

export const Checked = () => ({
	data() {
		return {
			v: 1,
		};
	},
	template: `<div style="width: 480px">
		<farm-radio v-model="v" value="1" />
		v-model: {{ v }}
	</div>`,
});

export const Sizes = () => ({
	data() {
		return {
			sizes,
			v: 1,
		};
	},
	template: `<div style="width: 480px">
		<div v-for="size in sizes" :key="size" class="d-flex flex-row align-center mb-3">
			<farm-radio v-model="v" :id="size" :value="size" :size="size"  />&nbsp;&nbsp;<label  :for="size">{{ size }}</label>
		</div>
	</div>`,
});

export const Colors = () => ({
	data() {
		return {
			colors,
			v: 1,
		};
	},
	template: `<div style="width: 480px">
		<div v-for="color in colors" :key="color" class="d-flex flex-row align-center mb-3">
			<farm-radio v-model="v" :id="color" :value="1" :color="color" :label="color" />
		</div>
	</div>`,
});

export const Disabled = () => ({
	data() {
		return {
			v: 1,
		};
	},
	template: `<div style="width: 480px">
		<div class="d-flex flex-row align-center mb-3">
			<farm-radio v-model="v" :value="2" disabled label="Disabled" />
		</div>
		<div class="d-flex flex-row align-center mb-3">
			<farm-radio v-model="v" :value="1" disabled label="Checked and Disabled" />
		</div>
	</div>`,
});

export const Label = () => ({
	data() {
		return {
			v: 1,
		};
	},
	template: `<div style="width: 480px">
		<div class="d-flex flex-row align-center mb-3">
			<farm-radio v-model="v" :value="2" id="option1" label="Option 1" />
		</div>
		<div class="d-flex flex-row align-center mb-3">
			<farm-radio v-model="v" :value="1" id="option2" label="Option 2" />
		</div>
	</div>`,
});
