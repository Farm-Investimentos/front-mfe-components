import DefaultTextField from './DefaultTextField.vue';

export default {
	title: 'API/Form/DefaultTextField',
	component: DefaultTextField,
};

export const Primary = () => ({
	components: { DefaultTextField },
	data() {
		return {
			model: 'primary',
			item: { label: 'Nome do campo', key: 'key' },
		};
	},
	template: '<DefaultTextField v-model="model" :item="item" />',
});

export const Secondary = () => ({
	components: { DefaultTextField },
	data() {
		return {
			model: 'secondary',
			item: { label: 'Nome do campo', key: 'key' },
		};
	},
	template: '<DefaultTextField :item="item" v-model="model" required="true" />',
});

export const ReadOnly = () => ({
	components: { DefaultTextField },
	data() {
		return {
			model: 'readonly',
			item: { label: 'Nome do campo', key: 'key' },
		};
	},
	template: '<DefaultTextField :item="item" v-model="model" :readonly="true" />',
});

Primary.storyName = 'Básico';
Secondary.storyName = 'Label de obrigatório';
ReadOnly.storyName = 'Input readonly';
