import PromptUserToConfirm from './PromptUserToConfirm';

const formValue = '';

export default {
	title: 'Example/PromptUserToConfirm',
	component: PromptUserToConfirm,
};

export const Primary = () => ({
	components: { PromptUserToConfirm },
	template: '<PromptUserToConfirm v-model="formValue" /> {{ formValue }}',
});

Primary.storyName = 'Básico';
