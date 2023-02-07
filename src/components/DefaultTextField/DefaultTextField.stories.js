import { withDesign } from 'storybook-addon-designs';
import DefaultTextField from './DefaultTextField.vue';

export default {
	title: 'Form/DefaultTextField',
	component: DefaultTextField,
	decorators: [withDesign],
	parameters: {
		viewMode: 'docs',
		docs: {
			description: {
				component: `Default Text Field with label (inherit from Vuetify)<br />
			selector: <em>farm-textfield-labelled</em>`,
			},
		},
	},
};

export const Primary = () => ({
	components: { DefaultTextField },
	data() {
		return {
			model: 'primary',
			item: { label: 'Nome do campo', key: 'key', md: 4 },
		};
	},
	template: '<DefaultTextField v-model="model" :item="item" />',
});

export const Secondary = () => ({
	components: { DefaultTextField },
	data() {
		return {
			model: 'secondary',
			item: { label: 'Nome do campo', key: 'key', md: 4 },
			rules: {
				required: val => !!val,
			},
		};
	},
	template: `<farm-form>
		<DefaultTextField :item="item" v-model="model" :required="true" :rules='[rules.required]' />
	</farm-form>`,
});

export const ReadOnly = () => ({
	components: { DefaultTextField },
	data() {
		return {
			model: 'readonly',
			item: { label: 'Nome do campo', key: 'key', md: 4 },
		};
	},
	template: '<DefaultTextField :item="item" v-model="model" :readonly="true" />',
});

export const Masked = () => ({
	components: { DefaultTextField },
	data() {
		return {
			model: '12345',
			item: { label: 'Máscara (##.###)', key: 'key', md: 4 },
		};
	},
	template: `
	<v-form>
		<DefaultTextField :item="item" v-model="model" mask="##.###" />
	</v-form>
	`,
});

export const Placeholder = () => ({
	components: { DefaultTextField },
	data() {
		return {
			model: '',
			item: { label: 'Nome do campo', key: 'key', md: 4 },
		};
	},
	template: '<DefaultTextField v-model="model" :item="item" placeholder="your text" />',
});

Primary.storyName = 'Basic';
Secondary.storyName = 'Required field';
ReadOnly.storyName = 'Readonly input';
Masked.storyName = 'Masked';
Placeholder.storyName = 'Placeholder';
