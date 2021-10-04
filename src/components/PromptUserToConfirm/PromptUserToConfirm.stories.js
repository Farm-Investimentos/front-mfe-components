import PromptUserToConfirm from './PromptUserToConfirm';

export default {
	title: 'Example/PromptUserToConfirm',
	component: PromptUserToConfirm,
};

export const Primary = () => ({
	components: { PromptUserToConfirm },
	template: '<PromptUserToConfirm />',
});

export const CustomTitle = () => ({
	components: { PromptUserToConfirm },
	template: '<PromptUserToConfirm title="Custom" /> ',
});

Primary.storyName = 'Básico';
CustomTitle.storyName = 'Título customizado';
