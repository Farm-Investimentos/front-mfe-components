import { withDesign } from 'storybook-addon-designs';
import Radio from './Radio.vue';

export default {
	title: 'Form/Radio',
	component: Radio,
	decorators: [withDesign],
	parameters: {
		docs: {
			description: {
				component: `Radio<br />
				selector: <em>farm-radio</em><br />
				<span style="color: var(--farm-extra-1-base);">development</span>
				`,
			},
		},
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
			<farm-btn @click="reset">reset</farm-btn>
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
