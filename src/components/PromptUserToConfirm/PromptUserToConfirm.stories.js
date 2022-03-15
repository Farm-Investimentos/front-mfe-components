import PromptUserToConfirm from './PromptUserToConfirm';

export default {
	title: 'API/PromptUserToConfirm',
	component: PromptUserToConfirm,
};

export const Primary = () => ({
	components: { PromptUserToConfirm },
	data() {
		return {
			model: {},
		};
	},
	template: `<div style="max-width: 320px"><PromptUserToConfirm  v-model="model"/>
	match: {{ model }}
	</div>`,
});

export const CustomTitle = () => ({
	components: { PromptUserToConfirm },
	template: '<div style="max-width: 320px"><PromptUserToConfirm title="Custom" /></div>',
});

export const CustomMatchInput = () => ({
	components: { PromptUserToConfirm },
	data() {
		return {
			model: {},
		};
	},
	template: `<div style="max-width: 320px"><PromptUserToConfirm title="Custom match input: CONFIRMAR" match="CONFIRMAR" v-model="model" />
	match: {{ model }}
	</div>`,
});

Primary.storyName = 'Básico';
CustomTitle.storyName = 'Título customizado';
CustomMatchInput.storyName = 'Match input customizado';
