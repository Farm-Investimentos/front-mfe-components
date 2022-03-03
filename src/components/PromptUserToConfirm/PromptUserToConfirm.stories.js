import PromptUserToConfirm from './PromptUserToConfirm';

export default {
	title: 'API/PromptUserToConfirm',
	component: PromptUserToConfirm,
};

export const Primary = () => ({
	components: { PromptUserToConfirm },
	template: '<div style="max-width: 320px"><PromptUserToConfirm /></div>',
});

export const CustomTitle = () => ({
	components: { PromptUserToConfirm },
	template: '<div style="max-width: 320px"><PromptUserToConfirm title="Custom" /></div>',
});

Primary.storyName = 'Básico';
CustomTitle.storyName = 'Título customizado';
